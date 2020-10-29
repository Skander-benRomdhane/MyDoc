const express = require('express');
const router = express.Router();

const Appointments = require('../models/AppointmentSchema.js');

const verify = require('./Verification.js')



router.get('/',verify, async (req, res) => {
    await Appointments.findAll().then((appointments) => res.json(appointments))
    .catch((err) => console.log(err))
})

router.get('/:id',verify, async (req, res) => {
    await Appointments.findByPk( req.params.id).then((appointments) => res.json(appointments))
    .catch((err) => console.log(err))
})

router.post('/register', async (req, res) => {
    await Appointments.create({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        check : req.body.check,
        price: req.body.price,
     })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.put('/:id',verify, async (req, res) => {
    Appointments.findByPk(req.params.id).then((appointments) => {
        appointments.update({

        }).then((appointments) => {
            res.json(appointments);
        });
    })
    .catch((err) => console.log(err))
})

router.delete('/:id',verify, async (req, res) => {
    await Appointments.findByPk(req.params.id).then((appointments) => {
        appointments.destroy();
    }).then(() => {
        res.json("deleted");
    })
    .catch((err) => console.log(err))
});

router.delete('/', verify,async (req, res) => {
    await Appointments.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))
});


module.exports = router;