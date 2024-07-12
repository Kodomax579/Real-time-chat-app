const path = require("path")
const express = require("express")
let fs = require('fs')
const app = express()

let usersFilePath = path.join(__dirname, '../datenbank/messages/CarstensChat.json');

app.get("/daten/von/Carsten",(req,res) => {
    
    var readable = fs.createReadStream(usersFilePath);
    readable.pipe(res);
})
app.listen(3000)
console.log("Server listening on port 3000")