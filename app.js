/* eslint-disable prefer-const */
/* eslint-disable no-duplicate-case */
const express = require('express')
const bodyParser = require('body-parser')

const date = require(__dirname + '/date.js')


const app = express()
const port = 3000
let items = ['Buy Food', 'Cook Food', 'Eat Food'] // an array
let workItems = [] // an array

app.set('view engine', 'ejs') // telling express to use ejs as its new engine

app.use(bodyParser.urlencoded({ extended: true })) // usng body parser to get info from a user

app.use(express.static('public'))

app.get('/', (req, res) => {


  res.render('list', { ListTitle: date, newListItems: items }) // rendering data
})

app.post('/', (req, res) => { // once clicked we push a new item to an array and redirecting to home route 
  let item = (req.body.newItem)

  if (req.body.list === 'Work') {
    workItems.push(item)
    res.redirect('/work')
  } else {
    items.push(item)
    res.redirect('/')
  }
})

app.get('/work', (req, res) => {
  res.render('list', { ListTitle: 'Work', newListItems: workItems }) // rendering data
})

app.get('/about', (req, res) => {
  res.render('about') // rendering about page with no params
})

app.post('/work', (req, res) => {
  let item = (req.body.newItem)
  workItems.push(item)
  res.redirect('/work') // redirecting to home route 
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})