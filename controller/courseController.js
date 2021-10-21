const Course = require('../model/courses')

const homepage = (req, res) => {
    Course.find()
    .then((result)=> {
       res.render('index', {title: 'Course', courses: result}) 
    })
} 

const createpost = (req,res) => {
    res.render('create', {title: 'Create'})
}

const homepagepost = (req,res)=> {
    console.log(req.body)
    const course = new Course(req.body)
    course.save()
    .then((result) => {
        res.redirect('/')
    })
}

module.exports = {
    homepage,
    createpost,
    homepagepost
}