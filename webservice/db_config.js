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

//consulta
var getTasks = function(callback){
	model.find({}, callback)
}

//adicionar task
var addTask = function(task, callback){
	model({
		text: task.text,
		done: task.done
	}).save(callback)
}

//atualizar task
var updateTask = function(taskId, callback){
	model.update({"_id":taskId}, {
		done:true
	}, callback)
}

//remover task
var removeTask = function(taskId, callback){
	model.remove({"_id":taskId}, callback)
}

module.exports = {
	"getTasks" : getTasks,
	"addTask" : addTask,
	"updateTask" : updateTask,
	"removeTask" : removeTask
}