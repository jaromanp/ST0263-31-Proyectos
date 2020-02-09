const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dataRoute = require('./routes/api')
const userRoute = require('./routes/users')
const morgan = require('morgan')
const cors = require('cors')
const path  = require('path')
const history = require('connect-history-api-fallback');

require('dotenv/config')

//Middleware
const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
const port = process.env.PORT || 3001


app.use('/api', dataRoute)
app.use('/user', userRoute)
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

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
