
// step 1
const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

// step 3
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    cressOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "http: data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// step 4
server.get('/api', (requestAnimationFrame, res)=> {
    res.json({
        'All Heroes': `http://localhost:${PORT}/api/hero`,
        'All Franchises': `http://localhost:${PORT}/api/franchise`,
        'All Teams': `http://localhost:${PORT}/api/team`,
        'All Species': `http://localhost:${PORT}/api/species`,
        'All Powers': `http://localhost:${PORT}/api/power`,
    })
})

// step 5
server.use('/', router)
server.set('view engine', 'ejs')



// step 2
server.listen(PORT, ()=> console.log(`Port is working...${PORT}`))


//    ／\、
//   （ﾟ､ ｡ ７
//   ⠀ |、ﾞ ~ヽ
//     じしf_, )ノ