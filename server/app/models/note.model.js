const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    brf: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);