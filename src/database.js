const mongoose = require("mongoose");
const userSchema = require("./models/user_schema");
const emailSchema = require("./models/email_schema");

const UserModel = mongoose.model("users", userSchema.UserSchema);
const EmailModel = mongoose.model("emails", emailSchema.EmailSchema);

mongoose.Promise = global.Promise;
mongoose
    .connect("mongodb://localhost/newsletter")
    .then(() => console.log("Deu certo, conectou!"))
    .catch((err) => console.log("Deu esse erro aqui: " + err));

function createEmail(doc) {
    const novo = new EmailModel(doc);
    novo.save();
}

function createUser(doc) {
    const novo = new UserModel(doc);
    novo.save();
}

async function readAllUser() {
    const users = await UserModel.find({}, (err, users) => {
        return users;
    });
    console.log(users);
    return users;
}

async function readUser(id) {
    const user = await UserModel.findById(id, (err, user) => {
        return user;
    });
    return user;
}

async function updateUser(id, doc) {
    const user = await UserModel.findByIdAndUpdate(id, doc, (err, doc) => {
        return doc;
    });
    return user;
}

function deleteUser(id) {
    UserModel.findById({ _id: id }, (err, docs) => {
        docs.remove();
    });
}

function deleteEmail(id) {
    UserModel.findById({ _id: id }, (err, docs) => {
        docs.remove();
    });
}

module.exports = {
    createUser,
    readUser,
    readAllUser,
    updateUser,
    deleteUser,
    createEmail,
    deleteEmail,
};
