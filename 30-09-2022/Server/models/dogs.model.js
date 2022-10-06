const mongoose = require("mongoose");

const doggieSchema = new mongoose.Schema({
    name: String,
    hungry: Boolean,
    happy: Boolean
})

doggieSchema.methods.getHungry = ()=>{
    this.hungry = true
    this.happy = false
    console.log(`${this.name} is now hungry`)
}
doggieSchema.methods.getFed = ()=>{
    this.hungry = false
    this.happy = true
    console.log(`${this.name} is now well-fed`)
}

module.exports = mongoose.model('Doggie', doggieSchema)
