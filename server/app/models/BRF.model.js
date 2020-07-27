const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = Schema({
    brf: String,
    lghAntal: Number,
    orgNr: Number,
    grundat: Number,
    leUsers: [{
        type: Schema.Types.ObjectId,
        red: "User"
    }],
    kommun: String
}, {
    timestamps: true
});

module.exports = mongoose.model('brf', schema);