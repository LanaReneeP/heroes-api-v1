


const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/speciesDao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/species/:species', (req, res)=> {
    dao.findHeroesBySpecies(res, dao.table, req.params.species)
})

router.get('/sort', (req, res)=> {
    dao.sortGeneral(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router