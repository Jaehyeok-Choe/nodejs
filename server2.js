const express = require("express");
const hbs = require('express-handlebars')
const app = express();

app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname + '/views/layouts',
    partialsDir:__dirname+'/views/partials'
}));
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next)=>{
    next();
})

app.get('/',(req,res)=>{
    res.status(200).render('index')
})

app.listen(3000,()=>{
    console.log("The server is running on Port 3000");
})