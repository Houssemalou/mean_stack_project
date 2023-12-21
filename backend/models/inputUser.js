const mongoose = require('mongoose');

const localSchema = new mongoose.Schema({
    ref : {
        type: Number,
        required: [true, "Please provide a reference"],
        unique: true,
    },
    name : String,
    phone : String,
    email : String,
    numberOfPers : Number,
    date : String,
});

const userInput = mongoose.model("requests", localSchema);

module.exports = userInput;