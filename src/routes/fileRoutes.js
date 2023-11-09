const fileRouter = require('express').Router()
const { subirArchivo } = require('../controllers/fileController')

fileRouter.post('/subirArchivo', subirArchivo);

module.exports = fileRouter;