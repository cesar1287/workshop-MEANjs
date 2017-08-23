var db_name = "todo"
var db_string = "mongodb://localhost/"+db_name

var mongoose = require('mongoose')

var db = mongoose.connection

db.on("error", console.error.bind(console, "Erro ao abrir o banco"))

mongoose.connect(db_string, {useMongoClient:true})

var taskSchema = mongoose.Schema({
	text: String,
	done: Boolean
})

var model = mongoose.model('tasks', taskSchema)

model.find({}, function(err, tasks){
	if(err)
		console.error(err)
	else
		for(var i in tasks){
			console.log(tasks[i].text, tasks[i].done)
		}
})