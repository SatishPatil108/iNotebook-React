const express = require('express');
const Notes = require('../models/Notes');



const router = express.Router();
var fetchuser = require('../middleware/fetchuser');


// ROUTE 1: Get All the using :GET"/api/notes/fetchallnotes". Login required  
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user });
    res.json([notes]);
})

module.exports = router 