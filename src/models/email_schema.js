const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    destinations: {
        type: Array,
        required: false,
    },
    sendDate: {
        type: Date,
        required: false,
    },
});

const Email = mongoose.model("emails", EmailSchema);

module.exports = Email;
