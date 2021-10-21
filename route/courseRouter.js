const express = require('express')
const router = express.Router()
const Course = require('../model/courses')
const courseController = require('../controller/courseController')

router.get('/',courseController.homepage )


router.get('/create', courseController.createpost)

router.post('/', courseController.homepagepost)

router.get('/:id', (req,res) => {
    console.log(req.params.id)
    Course.findById(req.params.id)
    .then((result) => {
        res.render('details', {title: 'Details',course: result})
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    Course.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect:'/'})
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router