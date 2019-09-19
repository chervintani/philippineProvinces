var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
app.set('view engine', 'pug');
app.set('views', 'view');



app.use(express.static(path.resolve('./public')));

// respond the index.pug when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render('index');
})
app.get('/provinces/:name', function (req, res) {
    var provinceName = req.params.name + ".json";
    console.log(provinceName) //pathname like bohol.json

    fs.readFile("./provinces/" + provinceName, function (err, data) {
        if (err) throw err
        var obj = JSON.parse(data);
        res.render('index', {
            img1: obj.images[0],
            img2: obj.images[1],
            img3: obj.images[2],
            obj: obj
        })//display data in the index

    });
})
app.listen(8081);