/* eslint-disable no-console */

const bodyParser = require('body-parser')
const express = require('express')
const { getAllTrails, getTrailById, createTrail, deleteTrail } = require('./controllers/trailsController')

const app = express()
const port = 8080

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/api/trails', getAllTrails)
app.get('/api/trails/:id', getTrailById)
app.post('/api/trails', createTrail)
app.delete('/api/trails/:id', deleteTrail)

app.all('*', (request, response) => {
  return response.status(404).send('It seems you have gone off trail. Please reroute')
})

app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})
