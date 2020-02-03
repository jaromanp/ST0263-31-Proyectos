const express = require('express')
const router = express.Router()
const dataIoT = require('../Models/dataIoT')



//Rutas
//Obtener todos los datos
router.get('/consultar', async (req , res) => {
    try {
        const datos = await dataIoT.find()
        res.json(datos)
    } catch (error) {
        res.json({ message:err})
    }
})

//Enviar un dato
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

//Traer un dato de un usuario
router.get('/:user', async (req, res) => {
   try {
        const data = await dataIoT.find({userID: req.params.user})
        res.json(data)
   } catch (err) {
       res.json({message: err})
   }
})

module.exports = router;