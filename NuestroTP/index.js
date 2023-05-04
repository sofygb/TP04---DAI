
import DisneyService from './src/services/disney-services.js' //llamando a la clase para obtener los datos
import Personaje from './src/models/personaje.js'
import config from './dbconfig.js';
import sql from 'mssql';
import express from "express"

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/characters', function (req, res) {
    res.send(getAllPersonajes()) //no estamos seguros si es así
  })
  

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})

//http://localhost:3000/
//http://localhost:3000/characters