'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/resultados', (req , res) => {
    res.send(200, {resultado: []})
})

app.post('/api/resultados', (req , res) => {
    console.log(req.body)
    res.status(200).send({message: 'Los datos se han recibido'})
})




app.listen(port, () => {
    console.log(`API Rest corriendo en http://localhost:${port}`)
})
 