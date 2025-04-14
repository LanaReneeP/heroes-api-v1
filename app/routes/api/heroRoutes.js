

const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/heroDao')

router.get('/', (req, res)=> {
    dao.findHeroes(res, dao.table)
})

router.get('/alignment/:alignment', (req, res)=> {
    dao.findByAlignment(res, dao.table, req.params.alignment)
})

router.get('/sort', (req, res)=> {
    dao.sort(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findHeroById(res, dao.table, req.params.id)
})

module.exports = router