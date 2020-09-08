const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({

    email: {
        type: String,
       /*  unique: true, */
        allowNull: false,
        lowercase: true,
       /*  required: [true, "can't be blank"], */
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    createdRecipes: [{
        type: Schema.Types.ObjectId,
        ref: "recipe"
    }],
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    bio: String,
    image: String,
    hash: String,
    salt: String
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);