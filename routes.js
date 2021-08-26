const router = require('express').Router()

const connection = require('./database')

router.get('/', (req, res) => {
    connection.query(`SELECT id,name from book`, (err, results, field) => {
        if (err) return res.send(err)
        return res.json(results)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    connection.query(`SELECT id,name from book where id=${id}`, (err, results, field) => {
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

router.put('/:id', (req, res) => {
    const id = req.params.id
    const book = req.body.name
    connection.execute(`replace into book(id,name) values(${id},'${book}')`, (err, result) => {
        if (err) return res.send(err)
        return res.json(result)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    connection.execute(`delete from book where id=${id}`, (err, result) => {
        if (err) return res.send(err)
        return res.json(result)
    })
})

module.exports = router