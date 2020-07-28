const express = require('express')
const router = express.Router()
const Financia = require('../models/financia')

//GETTING ALL
router.get('/', async (req,res) => {
    try {
        const financial = await Financia.find()
        res.send(financial)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//GETTING ONE
router.get('/:id', getSubscriber, (req,res) => {
    res.json(res.subscriber)
})
//CREATING ONE
router.post('/', async (req,res) => {
    const financia = new Financia({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
    }) 

    try {
        const newSubscriber = await financia.save()
        res.status(201).json(newSubscriber)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

//UPDATING ONE
router.patch('/:id', getSubscriber, async (req,res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//DELETING ONE
router.delete('/:id', getSubscriber, async (req,res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: "Deleted User" })
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})


async function getSubscriber(req,res, next) {
    let subscriber
    try {
        subscriber = await Financia.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: "Cannot find"})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}


module.exports = router

