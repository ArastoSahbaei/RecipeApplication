const mongoose = require('mongoose');

const schema = mongoose.Schema({
    brf: String,
    lghAntal: Number,
    orgNr: Number,
    grundat: Number,
    kommun: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', schema);