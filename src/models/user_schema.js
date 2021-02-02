const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    name: {
        type: String,
        require: true,
    },
    likedCategories: {
        type: Array,
        required: false,
    },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
