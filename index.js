// let poHeader = { ebeln: 1, werks: "DE01", burks: 1000 };
// let poItem = { ebeln: 1, ebelp: "00010", matnr: "MAT1" };

var fs = require("fs");
const dotenv = require('dotenv');
dotenv.config();

let http = require("http");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.get("/", function (req, res) {
  res.type("json");
  switch (req.query.data) {
    case "ekko":
      fs.readFile("./ekko.json", function (err, data) {
        res.send(JSON.stringify(JSON.parse(data)));
        return res.end();
      });
      break;
    case "ekpo":
      fs.readFile("../demo1/ekpo.json", function (err, data) {    
        res.send(JSON.stringify(JSON.parse(data)));
        return res.end();
      });
      break;
    default:
      break;
  }
});


app.post("/", jsonParser, function (req, res) {
  res.type("json");
  var obj = req.body;
  switch (req.query.data) { 
    case "ekko":
      fs.readFile("../demo1/ekko.json", function (err, data) {
        // console.log(data);
        var fileArray = JSON.parse(data);
        fileArray[fileArray.length] = req.body;
        res.send(JSON.stringify(fileArray));
        //over write existing file
        fs.writeFile(
          "../demo1/ekko.json",
          JSON.stringify(fileArray),
          function (err) {
            if (err) throw err;
            console.log("Replaced!");
          }
        );
        return res.end();
      });
      break;
    case "ekpo":
      fs.readFile("../demo1/ekpo.json", function (err, data) {
        // console.log(data);
        var fileArray = JSON.parse(data);
        fileArray[fileArray.length] = req.body;
        res.send(JSON.stringify(fileArray));
        //over write existing file
        fs.writeFile(
          "../demo1/ekpo.json",
          JSON.stringify(fileArray),
          function (err) {
            if (err) throw err;
            console.log("Replaced!");
          }
        );
        return res.end();
      });
      break;
    default:
      break;
  }
});
app.listen(process.env.PORT);
