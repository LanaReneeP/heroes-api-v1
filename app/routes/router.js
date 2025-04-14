

const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

const endpoints = [ 'hero', 'franchise', 'team', 'power', 'species']

// router.use('/api/hero', require('./api/heroRoutes'))
// router.use('/api/franchise', require('./api/franchiseRoutes'))
endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'My Hero Website'
    })
})

module.exports = router