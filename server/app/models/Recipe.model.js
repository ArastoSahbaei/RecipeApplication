const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = Schema({
    title: String,
    duration: Number,
    ingrediens: String,
    description: String,
    originCountry: String,
    language: String,
    views: Number,
    leUsers: [{
        type: Schema.Types.ObjectId,
        red: "User"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('recipe', schema);