let poHeader = { ebeln: 1, werks: "DE01", burks: 1000 };
let poItem = { ebeln: 1, ebelp: "00010", matnr: "MAT1" };
// console.log(myPo);
let http = require("http");
const express = require('express');
const app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.get('/', function(req, res){
    // res.setHeader("Content-type","JSON");
    res.send('Hello World');
});
app.get('/ekko', function(req, res){
    res.type('json');
    res.send(JSON.stringify(poHeader));
});
app.get('/ekpo', function(req, res){
    res.type('json');
    res.send(JSON.stringify(poItem));
});
app.post('/ekpo',jsonParser, function(req, res){
    var obj = req.body;
    obj.CreatedBy = "Vijay Singh";
    res.type("json");
    res.send(JSON.stringify(obj));
    res.end();
});
app.listen(4040);

