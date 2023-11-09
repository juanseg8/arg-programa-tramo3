const { Schema, model } = require('mongoose')

const usuairoShcema = new Schema({
    nombres: String,
    apellidos: String

});

const usuairoModelo1 = model('usuario', usuairoShcema)

module.exports = usuairoModelo1;