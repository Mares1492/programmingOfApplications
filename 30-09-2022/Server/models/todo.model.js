const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {type:String,required: true},
    date: String,
    importance: Number,
    completed: Boolean
})

module.exports = mongoose.model('TODO', todoSchema)