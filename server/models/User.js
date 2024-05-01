const {Schema, model} = require("mongoose")

const User = new Schema ({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivate :{type: Boolean, default: false},
    email: {type: String, unique: true, required: true},
    activationLink: {type:String, required:true},
    roles: [{type: String, ref: "Role"}]
})

module.exports = model("User", User);