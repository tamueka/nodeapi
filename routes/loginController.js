'use strict';

//Creamos un controller que nos servira para asociar a rutas en app.js

//podemos controllar express con ficheros controller o con rutas
class LoginController{
    //GET '/' 
    index(req, res, next){
        res.render('login')
    }
}

module.exports = new LoginController(); //creo un objeto y lo exporto, los modulos son singleton