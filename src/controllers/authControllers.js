const jwt = require('jsonwebtoken')

const authControllers = {};

const JWT_KEY = process.env.JWT_KEY;

const users = [
    {
        id: 1,
        usuario: 'Lord',
        contrasena: '123456'
    },
    {
        id: 2,
        usuario: 'Lady',
        contrasena: 'abcdef'
    }
]

authControllers.authenticate = (req, res) => {
    // Simular autenticacion de usuario
    let token = jwt.sign({ id: 1 }, JWT_KEY)
    res.json({ token: token })
}

authControllers.register = (req, res) => {
    // Simular registro de usuario...
}

authControllers.verifyToken = (req, res) => {
    try{
        const token = req.body.token;
        let decode = jwt.verify(token, JWT_KEY)
        res.json({ decode: decode })
    }catch(error){
        res.status(500).json({ 
            message: 'Ocurrio un error',
            error: error.message 
        })
    }

}

module.exports = authControllers;