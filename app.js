const express = require('express')
const app = express()
var number = 0;

app.get('/port/', (req, res) => res.send(number.toString()))

app.get('/port/stat', (req, res) => {
    res.send((number + 1).toString());
    number++;
})

app.get('/port/about', (req, res) => res.send('Hello, Liubooov..'))

app.listen(80, () => console.log('Server is started...'))

