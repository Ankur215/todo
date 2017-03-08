angular.module('todoapp',[])
	.controller('todoctrl',function($scope){
		$scope.todolist = [{todo:'Prepare Resume', done:false}];
			$scope.add=function(){
				$scope.todolist.unshift({todo:$scope.lst, done:false});
				$scope.lst='';
			}

			$scope.remove=function(){
				 for (var i = 0; i < $scope.todolist.length; i++) {   
		              if ($scope.todolist[i].done == true) {
		                  $scope.todolist.splice(i, 1);
		                  i--; 
		              	}
				 }      
			}

			$scope.count=function(){
				var count = 0;
				angular.forEach($scope.todolist,function(todo){
					if (todo.done == true){
						count++;
					}	
				});
					return count;
			}

			$scope.markall=function(){
				angular.forEach($scope.todolist,function(todo){
					todo.done =$scope.allcheck;
				});
					
			}



});
	/*$scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
  };*/