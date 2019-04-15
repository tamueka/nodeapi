

# NodeApi

## Install

```shell
npm install
```

Copy .env.example to .env and review the values.

## Database

Ejecutamos MongoDB en Windows:
"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"

To initialize the database use:

```shell
npm run install_db
```

## Run

To start the application in production use:

```shell
npm start
```

To start the application in cluster mode:

```shell
npm run cluster
```

## Development

To run the application in development use:

```shell
npm run dev
```

## DIA2

BUSCAMOS PLANTILLAS HTML (THEMES)  
https://startbootstrap.com/themes

Instalamos http-server: npm i http-server

cd startbootstrap template

http-server

Iniciamos el servidor local para ver theme (modo prueba para ver si funciona)


Hashear contraseñas: BCRYPT.
Ver articulo:
https://codahale.com/how-to-safely-store-a-password/

Hasheamos password : vamos a reutilizarla en loginController y en install_db em el moddelo de usaurio nos creamos un
metodo para hashear la password del usuario Usuario.js, metodo statico en modelo de usuario

With promises
bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS >= 0.12 has a native Promise implementation built in. However, this should work in any Promises/A+ compliant implementation.

Async methods that accept a callback, return a Promise when callback is not specified if Promise support is available.

bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    // Store hash in your password DB.
});

Modificamos el archivo install_db para hashear passwords
        for(let i = 0; i < usuarios.length; i++){
        usuarios[i].password = await Usuario.hashPassword(usuarios[i].password)  //one liner javascript
      }

Ejecutamos npm run install_db (yes)

Nos actualiza la base de datos y el password de usuario esta hasheado como podemos ver en Roboto

Leer: https://codahale.com/how-to-safely-store-a-password/

Backend con Node.js Avanzado _ Día 3 _ Parte II:: Hash de contraseñas - Sesiones - Middleware de autenticación - Logout

https://plataforma.keepcoding.io/courses/425358/lectures/6533284 