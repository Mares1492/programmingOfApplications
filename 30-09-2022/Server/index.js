const express = require('express')
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const cats = require('./routes/cats.routes')
const dogs = require('./routes/dogs.routes')
const todo = require('./routes/todo.routes')
const user = require('./routes/user.routes')
const errorMiddleware = require('./middlewares/error-middleware')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL
}))
app.use(cookieParser())
app.use('/user', user)
app.use('/dogs', dogs)
app.use('/todo', todo)
app.get('*', (req, res) => {
    res.send('404')
})
app.use(errorMiddleware)

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nv56mas.mongodb.net/?retryWrites=true&w=majority`

const main = async () => {
    try{
        await mongoose.connect(uri)
        console.log('Database connection established')
    }catch (err){
        console.log(err)
    }

}
main()//.then(()=>console.log('Database connection established')).catch(err => console.log(err))

app.use('/cats', cats)


app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
    console.log(`Working in ${process.env.NODE_ENV}`)
})