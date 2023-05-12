
import DisneyService from './src/services/disney-services.js' //llamando a la clase para obtener los datos
import Personaje from './src/models/personaje.js'
import config from './dbconfig.js';
import sql from 'mssql';
import express from "express"

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/characters', async function (req, res) {
    const newDS = new DisneyService()
    res.send(await newDS.getAllPersonajes())
})

app.get('/movieSeries', async function (req, res) {
  const newDS = new DisneyService()
  res.send(await newDS.getAllPeliSeries())
})

app.get('/characters/:name', async function (req, res) {
  const newDS = new DisneyService()
  let name = req.params.name;
  res.send(await newDS.getPersonajeByName(name))
})

app.get('/characters/e/:age', async function (req, res) {
  const newDS = new DisneyService()
  let age = req.params.age;
  res.send(await newDS.getPersonajeByAge(age))
})

app.get('/characters/ps/:idPersonaje', async function (req, res) {
  const newDS = new DisneyService()
  let idPersonaje = req.params.movieSeries;
  res.send(await newDS.getPeliSerieByIdPersonaje(idPersonaje))
})
  

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})

//http://localhost:3000/
//http://localhost:3000/characters