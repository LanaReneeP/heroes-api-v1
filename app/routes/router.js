

const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

const endpoints = [ 'hero', 'franchise', 'team', 'power', 'species']

// router.use('/api/hero', require('./api/heroRoutes'))
// router.use('/api/franchise', require('./api/franchiseRoutes'))
endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})


let heroAsideData = []

axios.get(`http://localhost:${PORT}/api/hero/sort`)
    .then(resp => heroAsideData = resp.data)

router.get('/', (req, res)=> {

    let randomHero = {}
    let message = ''
    const url = `http://localhost:${PORT}/api/hero`

    axios.get(url)
        .then(resp => {
            randomHero = resp.data[Math.floor(Math.random() * resp.data.length)]

            let heroName = randomHero.hero_name != null ? randomHero.hero_name : `${randomHero.first_name} ${randomHero.last_name}`

            switch (randomHero.alignment) {
                case 'HERO':
                    message = `${heroName} is here to save the day!!`
                    break;
                case 'ANTIHERO':
                    message = `${heroName}...so good news and bad news...`
                    break;
                case 'VILLAIN':
                    message = `Killed in action by ${heroName}...no purple heart for you today :(`
                    break;
                default: 
                    message = ''
                    break;
            }
            // console.log(message)
            // console.log(randomHero)
            res.render('pages/home', {
                title: 'Home',
                name: 'My Hero Website',
                randomHero,
                message,
                heroName
            })
        })
})

router.get('/heroes', (req, res)=> {

    const url = `http://localhost:${PORT}/api/hero`

    axios.get(url)
        .then(resp => {
            res.render('pages/hero', {
                title: 'All Heroes',
                name: 'Heroes',
                data: resp.data,
                asideData: heroAsideData
            })
        })
})

router.get('/heroes/:id', (req, res)=> {

    const id = req.params.id 

    const url = `http://localhost:${PORT}/api/hero/${id}`

    axios.get(url)
        .then(resp => {

            let heroName = resp.data.hero_name == null ? `${resp.data.first_name} ${resp.data.last_name}` : resp.data.hero_name
            res.render('pages/heroSingle', {
                title: heroName,
                name: heroName,
                data: resp.data,
                asideData: heroAsideData
            })
        })
})

module.exports = router