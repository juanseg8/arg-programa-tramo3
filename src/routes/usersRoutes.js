const userRouter = require('express').Router();
const {viewUsers, viewUser, createUser,editUser, delateUser} = require('../controllers/usersControllers')
const { viewUsers: viewUsersMongo, createUser: createUserMongo, editUser: editUserMongo, delateUser: delateUserMongo, viewUser: viewUserMongo } = require('../controllers/mongoose/usersControllers')
// Ver usuarios

userRouter.get('/users', viewUsers);

// Ver usuario
userRouter.get('/user', viewUser);

// Crear usuario
userRouter.post('/user', createUser);

// Editar usuario
userRouter.put('/user', editUser);

// Eliminar usuario
userRouter.delete('/user', delateUser);

//**********************************************************************


// Ver usuarios (Mongoose)
userRouter.get('/m/users', viewUsersMongo);

// Ver usuario
userRouter.get('/m/user/:id', viewUserMongo);

// Crear usuario (Mongoose)
userRouter.post('/m/user', createUserMongo);

// Editar usuario (Mongoose)
userRouter.put('/m/user', editUserMongo);

// Eliminar usuario (Mongoose)
userRouter.delete('/m/user', delateUserMongo);

module.exports = userRouter