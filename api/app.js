var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

var app = express();

app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next(); 
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3001, function () {
    console.log("Server app running on port", server.address().port);
});