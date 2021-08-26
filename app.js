const express = require('express')
const routes = require('./routes')

const app = express()

app.use('/api/', routes)

app.listen(5000, () => console.log(`http://localhost:5000`))