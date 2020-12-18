let poHeader = { ebeln: 1, werks: "DE01", burks: 1000 };
let poItem = { ebeln: 1, ebelp: "00010", matnr: "MAT1" };

var fs = require('fs');

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
    //Read a file
    fs.readFile("C:/Users/singhvij/Desktop/workspace/node/demo1/mynewfile.json", function(err, data) {
        console.log(data);
        res.send(JSON.stringify(JSON.parse(data)));
        return res.end();
      });
     ////end of read a file 
    
});
app.post('/ekpo',jsonParser, function(req, res){
    var obj = req.body;
    obj.CreatedBy = "Vijay Singh";
    //files
    fs.readFile("C:/Users/singhvij/Desktop/workspace/node/demo1/mynewfile.json", function(err, data) {
        // console.log(data);
        var fileArray = JSON.parse(data);
        fileArray[fileArray.length] = req.body;
        res.send(JSON.stringify(fileArray));
        //over write existing file
        fs.writeFile("C:/Users/singhvij/Desktop/workspace/node/demo1/mynewfile.json", JSON.stringify(fileArray), function (err) {
            if (err) throw err;
            console.log('Replaced!');
          });
        return res.end();
      });
    // fs.appendFile('./workspace/node/demo1/mynewfile.json', ","+JSON.stringify(obj), function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
    // ///
    // res.type("json");
    // res.send(JSON.stringify(obj));
    // res.end();
});
app.listen(4040);

