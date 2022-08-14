const express = require('express');
const User = require('../models/User');
const router = express.Router();

const user = User
// create a user using :POST"/api/auth". Doesn't require auth
router.get('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);

})

module.exports = router 