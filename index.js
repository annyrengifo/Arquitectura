'use strict';
//npm install nodemon --save-dev
//npm install express --save 
//use strict es para que funcione las reglas de javaScript

//declaramos las librerias a usar este servidor:
const express = require('express');
//definimos el uso de app como interprete express:
const app = express();
//declaramos el puerto del servicio de node.js
const port = 3800;
//mensaje de bienvenida desde el servidor:
app.listen(port, ()=>{
    console.log('Bienvenidos a mi servidor de NodeJS');
    console.log('puedes ingresar ala URL:localhost:3800//');
});

