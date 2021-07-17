const router = require('express').Router()
const Link = require('../models/Link')
const User = require('../models/User')
const auth = require('../middleware/auth')

router.get('/:code', auth, async (req, res) => {
    try {
        const link = await Link.findOne({ code: req.params.code })
        if (link) {
            let visitor = await User.findOne({ _id: req.user })
            link.visited++
            if (!link.visitors.includes(visitor.email)) {
                link.visitors.push(visitor.email)
            }
            if (!visitor.links.includes(link.to)) {
                visitor.links.push(link.to)
            }
            await link.save()
            await visitor.save()
            return res.redirect(link.from)
        }
        res.status(404).json({ message: 'Requested link not found!' })

    } catch (e) {
        console.log(e.message)
        res.status(500)
            .json({ message: 'Can not redirect to the related link ...  ' })
    }
})

module.exports = router