const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// register
router.post('/', async (req, res) => {
    try {
        const { email, password, repeatPassword } = req.body
        // check validation
        if (!(email && password && repeatPassword)) {
            return res.status(400)
                .json({ message: 'Please fill in all fields!' })
        }

        if (password.length < 6) {
            return res.status(400)
                .json({ message: "Please enter a password of at least 6 characters!" })
        }
        if (password !== repeatPassword) {
            return res.status(400)
                .json({ message: "Please repeat password!" })
        }
        //check if user exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400)
                .json({ message: 'Account with this email already exists!' })
        }
        // hash the password
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)

        // create user
        const newUser = new User({ email, hashPassword })
        const createdUser = await newUser.save()

        // sign the token
        const token = jwt.sign(
            { user: createdUser._id, email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        )
        
        // send the token in a HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        }).send()

    } catch (e) {
        console.log(e.message);
        res.status(500).send();
    }
})

// Log In
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            return res
                .status(400)
                .send({ message: "Please fill in all required fields!" });
        }
        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            return res.status(403)
                .send({ message: 'Wrong email or password!' })
        }
        const validPassword = await bcrypt.compare(
            password, existingUser.hashPassword
        )
        if (!validPassword) {
            return res.status(403)
                .send({ message: 'Incorrect email or password!' })
        }
        // sign the token
        const token = jwt.sign(
            { user: existingUser._id, email },
            process.env.JWT_SECRET,
            { expiresIn: "3h"}
        )

        // send the token in a HTTP-only cookie
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).send();

    } catch (e) {
        console.log(e.message);
        res.status(500).send();
    }
})
// GET all Users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json(allUsers)
    } catch (e) {
        console.log(e.message);
        res.status(500).send();
    }
})

// Log Out
router.get('/logout', async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
    }).send({message:"you are logged out!"})
})
// Logged In
router.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);
        const loggedUser= jwt.verify(token, process.env.JWT_SECRET);
       
        res.json(loggedUser.email);
    } catch (e) {
        console.log(e.message)
        res.json(false);
    }
})

module.exports = router