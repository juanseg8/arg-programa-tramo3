const userRouter = require('express').Router();
const {viewUsers, viewUser, createUser, edit, editUSer, delateUser} = require('../controllers/usersControllers')

// Ver usuarios

userRouter.get('/users', viewUsers);

// Ver usuario
userRouter.get('/user', viewUser);

// Crear usuario
userRouter.post('/user', createUser);

// Editar usuario
userRouter.put('/user', editUSer);

// Eliminar usuario
userRouter.delete('/user', delateUser);

module.exports = userRouter