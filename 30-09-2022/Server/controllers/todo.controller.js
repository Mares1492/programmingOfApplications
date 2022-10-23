const e = require("express");
const TODO = require("../models/todo.model");
const TodoDto = require("../dtos/todo-dtos");

exports.create = async (req, res) => {
    try {
        const {title,date,importance,completed} = req.body
        const todo = await TODO.create({ title,date,importance,completed })
        res.send(todo)
    }catch (e){
        res.status(500).json(e)
    }
}

exports.read = async (req, res) => {
    try {
        const todos = await TODO.find({})
        //const todoDto = new TodoDto(todos)
        res.send(todos)
    }catch(e){
        res.status(500).json(e)
    }
}

exports.changeTitle = async (req, res) => {
    const {title,newTitle} = req.body
    try {
        const todo = await TODO.findOneAndUpdate({ title:title }, {title:newTitle})
        res.send(`${title} is changed to ${newTitle}`)
    }catch(e){
        res.status(500).json(e)
    }
}

exports.changeDate = async (req, res) => {
    const {title,newDate} = req.body
    try {
        const todo = await TODO.findOneAndUpdate({ title:title }, {completed:newDate})
        res.send(`${title} is is set to ${newDate}`)
    }catch(e){
        res.status(500).json(e)
    }
}

exports.delete = async (req, res) => {
    const title = req.body.title
    const todo = await TODO.findOneAndRemove({title:title},)
    res.send(`${title} was removed`)
}