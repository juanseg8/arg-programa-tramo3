const UsuarioModelo1 = require('../../models/mongoose/usersModels')

const userControllers = {}

userControllers.viewUsers = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModelo1.find()
        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error interno',
            error: error
        })
    }

}

// Ver usuario 
userControllers.viewUser = async (req, res) => {
    try {
        const { id } = req.params
        const usuarioEncontrado = await UsuarioModelo1.findById(id)
        return res.json(usuarioEncontrado);
    } catch (error) {

        let mensaje = 'Ocurrio un error al buscar ese usuario'

        if(error.kind === 'ObjectId'){
            mensaje = 'No se encontro el usuario'
        }
        return res.status(500).json({
            mensaje: mensaje,
            error: error
        })
    }
}

// Crear usuario
userControllers.createUser = async (req, res) => {
    try {
        const { nombres, apellidos } = req.body

        const nuevoUsuario = new UsuarioModelo1({
            nombres: nombres,
            apellidos: apellidos
        })

        await nuevoUsuario.save()

        return res.json({ mensaje: 'Usuario creado con exito' });

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error al crear el usuario',
            error: error
        })
    }

}

// Editar usuario
userControllers.editUser = async (req, res) => {
    try {
        const { id, nombres, apellidos } = req.body

        await UsuarioModelo1.findByIdAndUpdate(
            id,
            {
                nombres: nombres,
                apellidos: apellidos

            })

        return res.json({ mensaje: 'Usuario editado con exito' });

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error al editar el usuario',
            error: error
        })
    }
}

// Eliminar usuario
userControllers.delateUser = async (req, res) => {
    try {
        const { id } = req.body

        await UsuarioModelo1.findByIdAndDelete(id)

        return res.json({ mensaje: 'Usuario se elimino con exito' });

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error al eliminar el usuario',
            error: error
        })
    }
}

module.exports = userControllers;
