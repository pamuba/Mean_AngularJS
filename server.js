var express = require('express')
var app = express()

// app.get('/', function(req, res){
//     res.send("Hello world from server.js")
// })

//html, css, js
app.use(express.static(__dirname + '/public'))


app.get('/contactlist', function(req, res){
    console.log("Express received a GET request")

    person1 = {
        name:"Jack",
        email:"jack@gmail.com",
        number:'(111) 111-1111'
    };
    person2 = {
        name:"Emily",
        email:"emily@gmail.com",
        number:'(222) 222-2222'
    };
    person3 = {
        name:"John",
        email:"john@gmail.com",
        number:'(333) 333-3333'
    };

    var contactlist = [person1, person2, person3]

    res.json(contactlist);
})

app.listen(3000);
console.log("Server running on port 3000")

