const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.dody)
    res.send("Hello Satish!");

})

module.exports = router 