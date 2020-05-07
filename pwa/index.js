var express = require('express');
var app = express();  
app.use(express.static('public'));
app.get('/api/getMovie', function(req, res) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(parseInt(10 * Math.random()))
    }
    res.send(arr);
});
var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port; 
    console.log('Example app listening at http://%s:%s', host, port);
});
// var server = require("./mock/server.js");