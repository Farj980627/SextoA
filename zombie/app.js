var path = require("path");
var express = require ("express");
var http = require("http");

var app= express();
app.set('views', path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname,"public")));

app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("index")
});

http.createServer(app).listen(3000, () =>
console.log('La aplicacion de los zonbis esta corriendo en el puerto 3000 baby')
);