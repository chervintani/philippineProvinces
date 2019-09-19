var express = require('express')
var app = express()
var fs = require('fs')
app.set('view engine', 'pug');
app.set('views', 'view');
// respond the index.pug when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render('index');
})
app.get('/provinces/:name', function (req, res) {
    var provinceName = req.params.name + ".json";
    console.log(provinceName) //pathname like bohol.json

    fs.readFile("./provinces/"+provinceName, function(err, data) {    
        res.render('index', JSON.parse(data))//display data in the index
        var alldata= JSON.parse(data);
        console.log(alldata.data)
        if(err){
        res.sendStatus(404);
        }
    
      });
})
app.listen(8081);