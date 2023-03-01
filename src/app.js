const express = require('express')
const db = require('./utils/db')
const ToDo = require('../src/models/todo')
const todoRoutes = require('./routes/todo.routes')

ToDo;

const port = 8000

db.authenticate()
  .then(() => {
  console.log("Successful authentication")
  })
  .catch((error) => { 
    console.log(error)
  });

  db.sync()
    .then(() => {
        console.log("Everything in my database is fine")
    })
    .catch((error) => {
        console.log(error)
    })


const app = express()
app.use(express.json())
app.use(todoRoutes)
app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.listen (port, () => {
    console.log(`Server in process ${port}`)
} )