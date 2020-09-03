const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    recipe: [{
        type: Schema.Types.ObjectId,
        ref: "recipe"
    }],
    password: String,
    bio: String,
    image: String,
    hash: String,
    salt: String
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);