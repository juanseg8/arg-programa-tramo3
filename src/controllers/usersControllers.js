const UsuarioModelo1 = require('../models/usersModels')

const userControllers = {}

const lista_usuarios = [
    { nombre: "Juan" },
    { nombre: "Pedro" }
];

// Ver usuarios
userControllers.viewUsers = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModelo1.findAll()
        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error interno',
            error: error
        })
    }

}

// Ver usuario  
userControllers.viewUser = (req, res) => {
    return res.json({ mensaje: 'Ruta ver un usuario' });
}

// Crear usuario
userControllers.createUser = (re1, res) => {
    return res.json({ mensaje: 'Ruta crear un usuario' });
}

// Editar usuario
userControllers.editUser = (req, res) => {
    return res.json({ mensaje: 'Ruta eliminar un usuario' });
}

// Eliminar usuario
userControllers.delateUser = (req, res) => {
    return res.json({ mensaje: 'Ruta editar usuario' });
}

module.exports = userControllers