const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const postRoute = require('./routes/api')


require('dotenv/config')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/api', postRoute)

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
