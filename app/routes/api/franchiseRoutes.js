



const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/franchiseDao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/fran/:franchise', (req, res)=> {
    dao.findHeroesByFranchise(res, dao.table, req.params.franchise)
})

router.get('/sort', (req, res)=> {
    dao.sortGeneral(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router