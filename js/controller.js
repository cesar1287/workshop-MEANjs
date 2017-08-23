app.controller("controller", function($scope){
	$scope.name = "Aberoval"

	$scope.tasks = [
		{text: "Task 1", done: true},
		{text: "Task 2" , done: false},
		{text: "Task 3" , done: false},
		{text: "Task 4" , done: false},
		{text: "Task 5" , done: false},
		{text: "Task 6" , done: false},
		{text: "Task 7" , done: false}
	]

	$scope.add = function(){
		console.log($scope.task)
		$scope.tasks.push({
			text: $scope.task.text,
			done : false
		})

		$scope.task.text = ""
	}

	$scope.change = function(task){
		task.done = true
	}

	$scope.remove = function(task, index){
		$scope.tasks.splice(index, 1)
	}
})