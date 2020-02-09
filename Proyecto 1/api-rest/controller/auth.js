const moongose = require('moongose')
const User = require('../Models/user')

function singUp(req, res){
    const user = new User({
        email: req.body.email,
        userID: req.body.userID,
        Name: req.body.Name,
    })
    user.save((err) => {
        if(err) res.status(500).send({ message: `Error al crear el usuario: ${err}`})

        return res.status(200).send({ token: ServiceUIFrameContext.createToken(user)})
    })
}

function singIn(req, res){

}

module.exports = {
    singIn,
    singUp
}
