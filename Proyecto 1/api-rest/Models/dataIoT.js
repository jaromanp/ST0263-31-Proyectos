const mongoose = require('mongoose')


const dataIoTSchema = mongoose.Schema({
    userID: String,
    temperatura: Number,
    humedad: Number,
    ubicacion: String,
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('dataIoT', dataIoTSchema)