const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(cors({ origin: "*" }));
app.use(express.json());

// ask route
app.use("/ask", require("./routes/ask"));

module.exports = app;
