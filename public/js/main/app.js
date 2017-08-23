var app = angular.module('app.todos', ['xeditable'])

app.controller('todoController', ['$scope', 'svTodos', function ($scope, svTodos) {
    $scope.appName = "Todo Dashboard"
    $scope.formData = {}
    
    $scope.todos = []

    // load data from api
    svTodos.get().then(function (data) {
        $scope.todos = data
    })

    $scope.createTodo = function () {
        
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }

        $scope.todos.push(todo)
        $scope.formData.text = ""
    }

    $scope.updateTodo = function (todo) {
        console.log('Upload: ', todo)
    }

    $scope.deleteTodo = function (todo) {
        console.log('Delete', todo)
    }

}])