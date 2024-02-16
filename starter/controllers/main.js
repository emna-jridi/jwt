
const jwt = require('jsonwebtoken')

const {BadRequest} = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequest('Please provide email and password')
    }
    const id = new Date().getDate() //creation d'id car on n'a pas de bd 

    //payload must be small
    const token = jwt.sign({ id,username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user created', token })
    console.log(username, password);
    res.send('Fake login/register/signup Route')
}


const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
         msg: `hello , ${req.user.username}`,
         secret: `here is your authorized data,  your lucky number is ${luckyNumber}` })
}


module.exports = {
    login, dashboard
}
