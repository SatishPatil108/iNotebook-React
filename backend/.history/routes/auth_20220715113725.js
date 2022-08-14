const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.dody)
    req.send("Hello Satish!");
    res.json(obj);
})

module.exports = router 