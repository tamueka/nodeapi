'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const usuarioSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true}, // unique:true, indice unico para que no haya dos usuarios con el mismo email 
    password: String
});

//este metodo hashea password
usuarioSchema.statics.hashPassword = async function (plainPassword) {        //con async hago que esta funcion devuelva una promesa
    const hashedPassword= await bcrypt.hash(plainPassword, 10);  
    return hashedPassword;            //bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash)
}

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;