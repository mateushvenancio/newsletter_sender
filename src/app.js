const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
const db = require("./database");

app.use(bodyParser.json());

const get = router.get("/", (req, res, next) => {
    res.status(200).send({
        resp: "resposta",
    });
});

const createUser = router.post(
    "/user/create",
    bodyParser.json(),
    async (req, res) => {
        try {
            await db.createUser(req.body);
            return res.status(200).send({
                resp: "criado com sucesso",
            });
        } catch (err) {
            console.log("ERRO: " + err);
            return res.status(400).send({
                resp: err,
            });
        }
    }
);

const readAllUsers = router.get("/user", async (req, res) => {
    try {
        const users = await db.readAllUser();
        return res.status(200).send({
            status: "OK",
            data: users,
        });
    } catch (err) {
        return res.status(400).send({
            status: "error",
            response: err,
        });
    }
});

const readUser = router.get("/user/:id", async (req, res) => {
    try {
        const users = await db.readUser(req.params.id);
        return res.status(200).send({
            status: "OK",
            data: users,
        });
    } catch (err) {
        return res.status(400).send({
            status: "error",
            response: err,
        });
    }
});

const updateUser = router.put("/user/update/:id", async (req, res) => {
    try {
        const users = await db.updateUser(req.params.id, req.body);
        return res.status(200).send({
            status: "OK",
            data: users,
        });
    } catch (err) {
        return res.status(400).send({
            status: "error",
            response: err,
        });
    }
});

const deleteUser = router.delete("/user/delete/:id", (req, res) => {
    try {
        db.deleteUser(req.params.id);
        return res.status(200).send({
            resp: "criado com sucesso",
        });
    } catch (err) {
        console.log("ERRO: " + err);
        return res.status(400).send({
            resp: err,
        });
    }
});

// app.use("/", get);
app.use("/", createUser);
app.use("/:id", readUser);
app.use("/", readAllUsers);
app.use("/:id", updateUser);
app.use("/:id", deleteUser);

module.exports = app;
