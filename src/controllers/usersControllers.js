
const userControllers = {}

const lista_usuarios = [
    {nombre: "Juan"},
    {nombre: "Pedro"}
];

// Ver usuarios
userControllers.viewUsers = (req, res) => {
    return res.json(lista_usuarios);
}

// Ver usuario  
userControllers.viewUser = (req,res) => {
    return res.json({mensaje: 'Ruta ver un usuario'});
}

// Crear usuario
userControllers.createUser = (re1,res) => {
    return res.json({mensaje: 'Ruta crear un usuario'});
}

// Editar usuario
userControllers.delateUser = (req,res) => {
    return res.json({mensaje: 'Ruta eliminar un usuario'});
}

// Eliminar usuario
userControllers.editUSer = (req,res) => {
    return res.json({mensaje: 'Ruta editar usuario'});
}

module.exports = userControllers