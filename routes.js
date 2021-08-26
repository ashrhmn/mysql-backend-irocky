const router = require('express').Router()

const connection = require('./database')

router.get('/', (req, res) => {
    connection.query(`SELECT id,name from book`, (err, results, field) => {
        if (err) return res.send(err)
        return res.json(results)
    })
})

router.post('/', (req, res) => {
    const book = req.body.name
    connection.execute(`insert into book(name) values('${book}')`, (err, result) => {
        if (err) return res.send(err)
        return res.json(result)
    })
})

module.exports = router