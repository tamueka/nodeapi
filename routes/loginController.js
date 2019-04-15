'use strict';

//Creamos un controller que nos servira para asociar a rutas en app.js
//cargamos el modelo de usuario
const Usuario = require('../models/Usuario')
//podemos controllar express con ficheros controller o con rutas
class LoginController{
    //GET '/' 
    index(req, res, next){
        res.locals.email = '';
        res.locals.error = '';
        res.render('login');
    }

    // POST
    async post(req, res, next){
        try{ //usamos try cath para controlar errores
        //recoger parametros del cuerpo de la peticion
        const email = req.body.email;
        const password = req.body.password;

        console.log(email, password)

        //buscar usuario
        const usuario = await Usuario.findOne({ email: email });

        console.log('usuario encontrado: ', usuario)
        if(!usuario || password != usuario.password){
            res.locals.email = email;
            res.locals.error = res.__('Invalid credentials');
            res.render('login')
            //podemos hacerlo asi res.render('login', {email: email, error: error})
        }

        //usuario encontrado y password ok

        
        }catch(err){
            next(err)
        }
    }
}


module.exports = new LoginController(); //creo un objeto y lo exporto, los modulos son singleton