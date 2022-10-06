
const Doggie = require('../models/dogs.model')
const e = require("express");

exports.create = async (req, res) => {

    const { name } = req.params
    const hungry = true
    const happy = false
    const doggie = await Doggie.create({ name,hungry,happy })

    res.send(doggie)
}
exports.findDog = async (req,res)=>{
    let doggie;
    if (req.params.id){
        doggie = await Doggie.findById(req.params.id)
    }else{
        const {name} = req.params
        doggie = await Doggie.findOne({name:name},{_id: 0, __v: 0})
    }
    res.send(doggie)
}

exports.read = async (req, res) => {
    const doggies = await Doggie.find({}, { _id: 0, __v: 0 })
    res.send(doggies)
}

exports.update = async (req, res) => {
    const {name} = req.params
    const doggie = await Doggie.findOneAndUpdate({ name:name }, {hungry:false,happy:true})
    res.send(`${name} is now well-fed and happy`)
}

exports.delete = async (req, res) => {
    const {name} = req.params
    const doggie = await Doggie.findOneAndRemove({name:name},)
    res.send(`${name} was removed`)
}