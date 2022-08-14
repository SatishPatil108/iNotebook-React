const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body)l
    res.send("Hello Satish!");

})

module.exports = router 