'use strict';

const express = require('express')
const router = express.Router();

router.get('/:locale', (req, res, next)=>{
    //recuperar el codigo de lenguaje(idioma) que me piden
    const locale = req.params.locale; //palabra en o es de la peticion http://localhost:3000/lang/en

    //guardar la pagina a la que hay que volver, recuperamos de la cabecera referer 
    //el browser archiva de que pagina venia el usuario Referer: http://localhost:3000/about
    const backTo = req.get('referer');

    //establecemos la cookie del nuevo idioma res.cookie('name')
    res.cookie('nodeapi-lang', locale, {maxAge: 1000 * 60 * 60 * 24 * 14})  //dos semanas

    //redirigimos al usuario a donde estaba
    res.redirect(backTo);

});

module.exports = router;

