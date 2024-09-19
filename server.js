const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const SERVER_PORT = process.env.SERVER_PORT || 8000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// ask
app.use("/ask", require("./routes/ask"));

app.listen(SERVER_PORT, (req, res) => {
  console.log(`Backend Server is running on port ${SERVER_PORT}...`);
});
