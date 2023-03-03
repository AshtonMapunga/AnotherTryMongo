const express = require('express')
const ash = require('../models/ash')
const router = express.Router()
const Ashtable = require('../models/ash')

router.post('/post/ash', async(req, res) => {
    // an abject wc can accept all the 
    // data from req.body
    const saveAsh = Ashtable(req.body)
    try {
        // save data
        const addAsh = await saveAsh.save()
        if (!addAsh) throw error
        res.send('the data have been sent to the database')
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/get/ash', async(req, res) => {
    // an abject wc can accept all the 
    // data from req.body
    try {
        // save data
        const addAsh = await Ashtable.find()
        if (!addAsh) throw error
        res.json(addAsh)
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router