const express = require('express')
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const cats = require('./routes/cats.routes')
const dogs = require('./routes/dogs.routes')

app.use(morgan('dev'))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nv56mas.mongodb.net/?retryWrites=true&w=majority`

const main = async () => {
    await mongoose.connect(uri)
}
main().then(()=>console.log('Database connection established')).catch(err => console.log(err));

app.use('/cats', cats)
app.use('/dogs', dogs)

app.get('/',(req,res) =>{
    res.send('Hello world!')
})

app.get('/flights/:from-:to', (req, res) => {
    console.log(req.body)

    res.send({
        params: req.params,
        body: req.body,
    })
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
    console.log(`Working in ${process.env.NODE_ENV}`)
})