const georefRouter = require('express').Router()
const { obtenerProvincias } = require('../controllers/georefController')

georefRouter.get('/obtenerProvincias', obtenerProvincias)

module.exports = georefRouter;
