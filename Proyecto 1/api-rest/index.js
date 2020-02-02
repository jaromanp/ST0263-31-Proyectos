'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./Models/products')

require('dotenv/config')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//Rutas
app.get('/api/consultar', (req , res) => {
    res.send(200, {resultado: []})
})

app.post('/api/enviar_datos', (req , res) => {
    console.log('POST /api/enviar_datos')
    console.log(req.body)

    let product = new product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if(err) res.status(500).send({message: `Error al guardar en la base de datos ${err}`} )

        res.status(200).send({data: productStored})
    })
})

//conexion a la base de datos
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },(err, res) => {
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida...')

    app.listen(port, () => {
        console.log(`API Rest corriendo en http://localhost:${port}`)
    })
})



//mongoose.connection('mongodb://')
