const express = require('express')
const app = express()
const mongoose = require('mongoose')
const courseRoutes = require('./route/courseRouter')
const Course = require('./model/courses')
require('dotenv').config()
// mongodb using mongoose
// we will send data to mongodb.com
// Schema
const dbUri = process.env.DBURI
mongoose.connect(dbUri)
.then((result) => console.log('DB is connected'))
.catch((err) => console.log(err))

// partials which reuse ejs code

app.set('view engine', 'ejs')
app.listen(3000)
// middleware
app.use(express.static('public'))
app.use(express.urlencoded())



app.use((req, res, next) => {
    console.log('new request made')
     console.log('host:', req.hostname)
     console.log('method:', req.method)
     next()
})

app.get('/add-course', (req,res) => {
    const course = new Course({
        title: 'Adding something',
        course: 'I added something',
        body: 'Recording data'
    })
    course.save()
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        console.error(err)
    })

})

app.use(courseRoutes)

app.use((req, res) => {
    res.status(404).render('404')
})





















// app.get('/', (req, res)=> {
//     const blogs = [
//         {title: 'Ask and it will be given to you', verse: 'Matthew 7: 5'},
//         {title: 'Judge not that you be not judged', verse: 'Matthew 7: 1'}
//     ]
//     res.render('index', {title: 'Home', blogs})
// })







