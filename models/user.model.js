const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    score: Number,
    category: String,
}, {
    versionKey: false
});

const UserModel = new mongoose.model('user', userSchema);

module.exports = {
    UserModel
}