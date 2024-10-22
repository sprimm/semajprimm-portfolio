const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: 'Name is required'},
    email: { type: String, trim: true, match: [/.+\@.+\..+/, 'Please fill a valid email address'], required: 'Email is required'},
    password: {type: String},
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema);