const router = require('express').Router()
const Class = require('./class-model')

//Get all classes
router.get('/', async (req, res, next) => {
    try {
        const classes = await Class.getAll()
        res.status(200).json(classes)
    } catch (err) {
        next(err)
    }
})


//Create a class
router.post('/instructor', async (req, res, next) => {
    try {
        const postClass = req.body
        const newClass = await Class.addClass(postClass)
        res.status(201).json(newClass)
    } catch (err) {
        next(err)
    }
})

router.post('/client', async (req, res, next) =>{
    try {
        const postClass = req.body
        const newClass = await Class.addClass(postClass)
        res.status(201).json(newClass)
    } catch (err) {
        next(err)
    }
})

module.exports = router;