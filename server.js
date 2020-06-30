var express = require('express')
var app = express()

// app.get('/', function(req, res){
//     res.send("Hello world from server.js")
// })

//html, css, js
app.use(express.static(__dirname + '/public'))


app.get('/contactlist', function(req, res){
    console.log("Express received a GET request")
})

app.listen(3000);
console.log("Server running on port 3000")

