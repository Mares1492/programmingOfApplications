
const Doggie = require('../models/dogs.model')
const e = require("express");

exports.create = async (req, res) => {
    const { name } = req.params
    const doggie = await Doggie.create({ name })

    res.send(doggie)
}
exports.findDog = async (req,res)=>{
    let doggie;
    if (req.params.id){
        doggie = await Doggie.findById(req.params.id)
    }else{
        const {name} = req.params
        doggie = await Doggie.findOne({name},{_id: 0, __v: 0})
    }
    res.send(doggie)
}

exports.read = async (req, res) => {
    try {
        const doggies = await Doggie.find({}, { _id: 0, __v: 0 })
        res.send(doggies)
    }catch (err){
        res.status(500).json(e)
    }

}

exports.update = async (req, res) => {
    const {name} = req.params
    const doggie = await Doggie.findOneAndUpdate({ name:name }, {hungry:false,happy:true})
    res.send(`${name} is now well-fed and happy`)
}

exports.altSearchOne = async (req,res) =>{
    const {dog} = req.body
    Doggie.findOne().byName(dog).exec((err, animal) => {
        console.log(animal);
    });
}

exports.altSearchAll = async (req,res) => {
    const {dog} = req.body
    Doggie.find().byName(dog).exec((err, animals) => {
        console.log(animals);
    });
}

exports.delete = async (req, res) => {
    const {name} = req.params
    const doggie = await Doggie.findOneAndRemove({name:name},)
    res.send(`${name} was removed`)
}