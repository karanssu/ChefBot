const express = require("express"); 
const router = express.Router(); 
 
router.get("/", async (req, res) => { 
    const users = { 
        "testuser": { 
            "name": "test", 
            "age": "-1", 
            "gender": "unknown" 
        } 
    }; 
 
    return res.json(users); 
}); 
 
module.exports = router; 
