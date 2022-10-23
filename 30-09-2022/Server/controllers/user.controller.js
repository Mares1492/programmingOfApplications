const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;




exports.create = async (req, res) => {
    const {username,password,email} = req.body
    const user = await User.findOne({username,email},{_id: 0, __v: 0,password,email})
    if (!user){
        try {
            await bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    const user = User.create({ username,password:hash,email})
                    res.send(`${user} is successfully registered`)
                });
            });

        }catch (err){
            res.status(500).json(err)
        }
    }else {
        res.send(`${username} already exists`)
        console.log(`${username} already exists`)
    }
}

exports.connect = async (req,res,next) =>{
    const {username,controlPassword} = req.body
    try {
        const user = await User.findOne({username},{_id: 0, __v: 0})
        bcrypt.compare(controlPassword, user.password, (err, result) => {
            res.send(result)
        });
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.disconnect = async (req,res,next) => {

}

exports.read = async (req, res) => {
    try {
        const users = await User.find({}, { _id: 0, __v: 0 })
        res.send(users)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.update = async (req,res)=>{
    const {username,password,newPassword}=req.body
    try {
        const user = await User.findOneAndUpdate({username},{password:newPassword})
        res.send(`${username}'s password was altered`)
    }catch(err){
        res.status(500).json(err)
    }

}

exports.delete = async (req, res) => {
    const {username} = req.body
    try {
        const user = await User.findOneAndRemove({username})
        res.send(`${user} was removed`)
    }catch(err){
        res.status(500).json(err)
    }
}