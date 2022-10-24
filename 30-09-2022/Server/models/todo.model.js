const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {type:String,required: true},
    date: String,
    importance: Number,
    completed: {type:Boolean,default:false}
})

module.exports = mongoose.model('TODO', todoSchema)