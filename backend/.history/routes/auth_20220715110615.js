const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
    obj = {
        a: 'Satish',
        number: 72
    }
    res.json(obj);
})

module.exports = router;