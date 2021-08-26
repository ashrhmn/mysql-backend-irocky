const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/book/', routes)

app.listen(5000, () => console.log(`http://localhost:5000/book`))