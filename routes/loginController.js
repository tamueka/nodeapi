'use strict';

//Creamos un controller que nos servira para asociar a rutas en app.js
//cargamos el modelo de usuario

const bcrypt = require('bcrypt');


const Usuario = require('../models/Usuario')
//podemos controllar express con ficheros controller o con rutas
class LoginController{
    //GET '/' 
    index(req, res, next){          //metodo que recoge las variables email, error
        res.locals.email = process.env.NODE_ENV === 'development' ? 'admin@example.com': '';      
            //res.locals dejamos el email admin@example.com por defecto
            //cuando esta activado el modo development
        res.locals.error = '';
        res.render('login');
    }

    // POST
    async post(req, res, next){
        try{ //usamos try cath para controlar errores
        //recoger parametros del cuerpo de la peticion
        const email = req.body.email;
        const password = req.body.password;

        //buscar usuario
        const usuario = await Usuario.findOne({ email: email });

        console.log('Usuario encontrado');
        if(!usuario || !await bcrypt.compare (password, usuario.password)){   //comparamos el usuario y la password (se compara la password en claro con el hash)
            //si el usuario No existe O las password(los hashes) NO coinciden
            res.locals.email = email;                   
            res.locals.error = res.__('Invalid credentials');
            res.render('login')                     //renderiza la pagina de login
            //podemos hacerlo asi res.render('login', {email: email, error: error})
        }

        //usuario encontrado y password ok
        res.send('OK')

        }catch(err){
            next(err)
        }
    }
}


module.exports = new LoginController(); //creo un objeto y lo exporto, los modulos son singleton