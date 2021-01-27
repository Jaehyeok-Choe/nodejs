const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use((req, res, next)=>{
    next();
})

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + "/index.html");
})

app.listen(3000,()=>{
    console.log("The server is running on Port 3000");
})