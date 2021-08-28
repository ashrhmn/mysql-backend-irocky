const express = require('express')
const cors = require('cors')
const routes = require('./routes')


const app = express()

var corsOption = {
    origin: "*"
}
app.use(cors(corsOption));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/book/', routes)

app.listen(5000, () => console.log(`http://localhost:5000/book`))