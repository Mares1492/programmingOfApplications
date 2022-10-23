const mongoose = require("mongoose");

const doggieSchema = new mongoose.Schema({
    name: String,
    hungry: {type: Boolean,default:true},
    happy: {type: Boolean,default:false}
})

doggieSchema.methods.getHungry = function(dog){
    dog.hungry = true
    dog.happy = false
    console.log(`${dog.name} is now hungry`)
    return dog
}
doggieSchema.methods.getFed = function(dog){
    dog.hungry = false
    dog.happy = true
    console.log(`${dog.name} is now well-fed`)
    return dog
}

doggieSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') })
}

module.exports = mongoose.model('Doggie', doggieSchema)
