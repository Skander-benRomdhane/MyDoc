const express = require('express');
const router = express.Router();
const Doctors = require('../models/DoctorSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const verify = require('./Verification.js')
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

dotenv.config();

const { registerDocValidation, loginDocValidation } = require('./DoctorValidation.js')


router.get('/', async (req, res) => {
  console.log(req.body);

    await Doctors.findAll().then((doctors) => res.json(doctors))
        .catch((err) => console.log(err))
})

router.get('/:id',verify, async (req, res) => {
    await Doctors.findByPk( req.params.id).then((doctors) => res.json(doctors))
    .catch((err) => console.log(err))

})

router.post('/register', async (req, res) => {
    const { error } = registerDocValidation(req.body)
    if (error) return res.send(error.details[0].message)
    const emailExist = await Doctors.findOne({ where: { email: req.body.email } })
    if (emailExist) return res.status(400).send('Email already exist')
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)

    await Doctors.create({

        name: req.body.name,
        password: hashpassword,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
        category: req.body.category,
        cabineName: req.body.cabineName,
        urlCertificate: req.body.urlCertificate,
        accountBanc: req.body.accountBanc,
        price: req.body.price
    })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.post('/login', async (req, res) => {
    const { error } = loginDocValidation(req.body)
    if (error) return res.send(error.details[0].message)
    const user = await Doctors.findOne({ where: { email: req.body.email } })
    if (!user) return res.send('Email is not found')
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.send('Invalid password ')
    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN)
    return res.status(200).header('auth_token', token).json({ id: user.id });
})
router.post('/sendemail',async (req, res) => {
   await Doctors.findAll({where:{email:req.body.email}}).then((obj) => {
      nodemailer.createTestAccount((err, email) => {
        var transporter = nodemailer.createTransport(
          smtpTransport({
            service: "gmail",
            port: 465,
            secure: false,
            host: "smtp.gmail.com",
            auth: {
              user: "mydocapplication123456@gmail.com",
              pass: "Mydocapplication123",
            },
            tls: {
              rejectUnauthorized: false,
            },
          })
        );
  
        let mailOptions = {
          from: "mydocapplication123456@gmail.com",
          to: `${req.body.email}`,
          subject: "my Doc application",
          text: `thanks u for sign in .`,
        };
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          }
          res.send(info);
        });
      });
    });
  });

router.put('/:id',verify, async (req, res) => {

    Doctors.findByPk(req.params.id).then((doctors) => {
        doctors.update({

            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            phoneNumber: req.body.phoneNumber,
            category: req.body.category,
            cabineName: req.body.cabineName,
            urlCertificate: req.body.urlCertificate,
            Patients: req.body.Patients,
            accountBanc: req.body.accountBanc,
            price: req.body.price,
        }).then((doctors) => {
            res.json(doctors);
        });
    })
        .catch((err) => console.log(err))
})


router.delete('/:id',verify, async (req, res) => {

    await Doctors.findByPk(req.params.id).then((doctors) => {
        doctors.destroy();
    }).then(() => {
        res.json("deleted");
    })
        .catch((err) => console.log(err))
});


router.delete('/', verify,async (req, res) => {
    await Doctors.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))

});


module.exports = router;