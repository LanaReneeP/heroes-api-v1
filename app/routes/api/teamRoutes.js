


const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/teamDao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/team/:team', (req, res)=> {
    dao.findHeroesByTeam(res, dao.table, req.params.team)
})

router.get('/sort', (req, res)=> {
    dao.sortGeneral(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router