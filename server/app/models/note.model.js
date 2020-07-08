const mongoose = require('mongoose');

const schema = mongoose.Schema({
    brf: String,
    lghAntal: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', schema);