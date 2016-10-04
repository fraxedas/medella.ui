var http = require("http");
var express = require("express");
var app = express();

//Set the public static resource folder
app.use(express.static(__dirname + "/app"));

//Create the server
var server = http.createServer(app);

//Start listening
server.listen(process.env.PORT || 9000);
