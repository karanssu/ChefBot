const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
 
require("dotenv").config(); 
const SERVER_PORT = process.env.SERVER_PORT || 8000; 
 
app.use(cors({ origin: "*" })); 
app.use(express.json()); 
 
// user 
app.use("/user", require("./routes/user/users")); 
 
app.listen(SERVER_PORT, (req, res) => { 
    console.log( 
        `Backend Server is running on port ${SERVER_PORT}...` 
    ); 
}); 
