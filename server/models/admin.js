const mongoose = require('mongoose');

const adminSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const admin = mongoose.model('admin',adminSchema)

module.exports = admin