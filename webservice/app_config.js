var express = require('express')
var bodyParser = require('body-parser')

var app = module.exports = express();

var port = 3000

app.listen(port)
console.log("Server running, port"+port+ " initiate " + new Date())

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.header('Access-Control-Allow-Methods', 'X-Requested-Width, Content-Type')
	next()
})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
	extended:true
}))