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
    console.log(req.body);
    res.type("json");
    res.send(JSON.stringify(req.body));
    res.end();
});
app.listen(4040);
// http
//   .createServer(function (req, res) {
//     res.setHeader("Content-type","JSON");
//     if (req.method == "GET") {
//       console.log(req);
//       switch (req.url) {
//         case "/ekko":
//           res.write(JSON.stringify(poHeader));
//           res.end();
//           break;
//         case "/ekpo":
//           res.write(JSON.stringify(poItem));
//           res.end();
//           break;
//         default:
//           break;
//       }

//     //   res.end();
//     }
//   })
//   .listen(4040);
