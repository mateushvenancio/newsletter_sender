const app = require("./src/app");
const http = require("http");
const bodyParser = require("body-parser");
const debug = require("debug")("nodestr:server");

const port = 3000;
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
