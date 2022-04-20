//server/models/SCHEMA.models.js
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {            //With Validation
        type:String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} needs to be at least 3 characters long"]
    },
    content: {          //Just a field
        type:String,
    },
    isImportant:{       //Default Values
        type:Boolean,
        default: false
    }
},{timestamps: true})   //Gets the timestamp

//Create the schema and export it
    //Two Lines
const Note = mongoose.model("Note", NoteSchema)
module.exports = Note
    //One Line
module.exports.Note = new mongoose.model("Notes", NoteSchema)