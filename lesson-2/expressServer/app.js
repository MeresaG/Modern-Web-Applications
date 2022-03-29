const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({path : ".env"});

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.post('/', function(req, res) {
    res.status(200).send("Received POST REQUEST")
});

app.listen(process.env.PORT, () => {
    console.log(process.env.SERVER_MESSAGE + ` ${process.env.PORT}`);
})