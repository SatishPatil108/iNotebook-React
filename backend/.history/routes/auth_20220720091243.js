const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator')


// create a user using :POST"/api/auth/createuser".No Login required 

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors, return Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // check whethere the user with this email exit already 
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        // .then(user => res.json(user))
        //     .catch(err => {
        //         console.log(err)
        //         res.json({ error: 'Please enter a unique value for email', message: err.message })
        //     })
    })

module.exports = router