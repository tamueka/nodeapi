'use strict';

const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true}, // unique:true, indice unico para que no haya dos usuarios con el mismo email 
    password: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;