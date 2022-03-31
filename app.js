const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home.example')
})

app.get('/', (req, res) => {
  res.render('pages/about.example')
})

app.get('/', (req, res) => {
  res.render('pages/contact.example')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
