const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    email: { type:String, unique:true, lowercase:true},
    userID: String,
    Name: String,
    password: { type: String, select: false},
    lastLogin: Date
})

const User = mongoose.model('User', UserSchema)
module.exports = mongoose.model('User', UserSchema)