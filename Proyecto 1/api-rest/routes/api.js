const express = require('express')
const router = express.Router()
const dataIoT = require('../Models/dataIoT')



//Rutas
router.get('/consultar', (req , res) => {
    res.send(200, {resultado: []})
})

router.post('/enviar_datos', (req , res) => {
    console.log(req.body)
    const datos = new dataIoT({
        userID: req.body.userID,
        temperatura: req.body.temperatura,
        humedad: req.body.humedad,
        ubicacion: req.body.ubicacion
    })    

    datos.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({message: err})
        })
})

module.exports = router;