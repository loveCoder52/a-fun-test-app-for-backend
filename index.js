require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) =>{
    res.send('About Us')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login on codewithlove</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h1>Welcome to the YouTube page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
