const router = require('express').Router()
const Link = require('../models/Link')
const User = require('../models/User')
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
    try {      
        const links = await Link.find()  
        res.json(links)
        console.log(links)
    } catch (e) {
        console.log(e.message)
        res.status(500)
            .json({ message: 'Can not get all links' })
    }
})
module.exports = router