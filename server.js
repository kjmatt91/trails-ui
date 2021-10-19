/* eslint-disable no-console */

const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const cors = require('cors')
const { getAllTrails, getTrailById, createTrail, deleteTrail } = require('./controllers/trailsController')

const app = express()
const port = 8080

app.set('view engine', 'pug')
app.use(cors())
app.use(express.static('client/build'))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/api/trails', getAllTrails)
app.get('/api/trails/:id', getTrailById)
app.post('/api/trails', createTrail)
app.delete('/api/trails/:id', deleteTrail)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})
