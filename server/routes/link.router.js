const router = require('express').Router()
const Link = require('../models/Link')
const shortid = require('shortid')
const auth = require('../middleware/auth')
const User = require('../models/User')

// generate short url
router.post('/', auth, async (req, res) => {
    try {
        const baseUrl = process.env.BASE_URL
        const { from } = req.body
        const code = shortid.generate()
        const existing = await Link.findOne({ from })
        if (existing) {
            return res.json({ link: existing })
        }

        const to = baseUrl + '/' + code
        const link = new Link({
            from,
            to,
            code          
        })
        await link.save()
        res.status(201).json({ link })
    } catch (e) {
        console.log(e.message)
        res.status(500)
            .json({ message: 'Something went wrong on generating url code' })
    }
})
// get all generated links
router.get('/', auth, async (req, res) => {
    try {
        const owner = await User.findOne({ _id: req.user })
        const links = await Link.find({ owner: req.user })
        res.json({ "links": links, "links_owner": owner.email })
    } catch (e) {
        console.log(e.message)
        res.status(500)
            .json({ message: 'Something went wrong when requesting all links' })
    }
})

module.exports = router