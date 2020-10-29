const express = require('express');
const router = express.Router();
const Reports = require('../models/Reportschema.js');

const verify = require('./Verification.js')



router.get('/',verify, async (req, res) => {
    await Reports.findAll().then((reports) => res.json(reports))
    .catch((err) => console.log(err))
})

router.get('/:id',verify, async (req, res) => {
    await Reports.findByPk( req.params.id).then((reports) => res.json(reports))
    .catch((err) => console.log(err))
})

router.post('/register', async (req, res) => {
    await Reports.create({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        check : req.body.check,
        price: req.body.price,
     })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.put('/:id',verify, async (req, res) => {
    Reports.findByPk(req.params.id).then((reports) => {
        Reports.update({

        }).then((reports) => {
            res.json(reports);
        });
    })
    .catch((err) => console.log(err))
})

router.delete('/:id',verify, async (req, res) => {
    await Reports.findByPk(req.params.id).then((reports) => {
        reports.destroy();
    }).then(() => {
        res.json("deleted");
    })
    .catch((err) => console.log(err))
});

router.delete('/', verify,async (req, res) => {
    await Reports.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))
});


module.exports = router;