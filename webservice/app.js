var db = require('./db_config')

var app = require('./app_config')

app.get('/', function(req, res){
	res.send("Olá")
})

app.get('/tasks', function(req, res){
	db.getTasks(function(err, tasks){
	if(err){
		console.error(err)
		res.json({"error":err})
	}else
		res.json(tasks)
	})
})
	
app.post('/tasks', function(req, res){
	var task = {
		text: req.body.text,
		done: req.body.done == "true"
	}
	 
	db.addTask(task, function(err, task){
	if(err){
		console.error(err)
		res.json({"error":err})
	}else
		res.json({})
	})
})

app.put('/tasks', function(req, res){
	var taskId = req.body.id

	db.updateTask(taskId, function(err){
	if(err){
		console.error(err)
		res.json({"error":err})
	}else
		res.json({})
	})
})

app.delete('/tasks', function(req, res){
	var taskId = req.body.id 

	db.removeTask(taskId, function(err){
	if(err){
		console.error(err)
		res.json({"error":err})
	}else
		res.json({})
	})
})
/*db.getTasks(function(err, tasks){
	if(err)
		console.error(err)
	else
		for(var i in tasks)
			console.log(tasks[i].text)
})

var newTask = {text: "Task nova", done:false}

db.addTask(newTask, function(err, task){
	if(err)
		console.error(err)
	else
		console.log(task.text+" inserida")
})

db.updateTask(id, function(err, task){
	if(err)
		console.error(err)
	else
		console.log(task.text+ "atualizada")
})

db.removeTask(id, function(err, task){
	if(err)
		console.error(err)
	else
		console.log(task.text+ "removida ")
})*/