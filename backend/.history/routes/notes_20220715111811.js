const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: 'Patil',
        number: 72
    }
    res.json(obj);
})

module.exports = router 