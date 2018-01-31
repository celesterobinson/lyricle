const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
    axios.get(req.body.url)
        .then(response => res.send(response.data));
})

app.listen(8080, () => {
    console.log(`Listening on port ${port}`);
});