const express = require("express")
const app = express()
const cors = require('cors')
const path = require("path")
app.use(cors())
app.get("/daten/von/Carsten",(req,res) => {
    
    const absolutePath = path.join(__dirname, '../datenbank/messages/CarstensChat.json');
    console.log(absolutePath)
    res.sendFile(absolutePath);

})
app.listen(3000)
console.log("Server listening on port 3000")