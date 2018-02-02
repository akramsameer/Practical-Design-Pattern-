(function(){
    var app =  angular.module('taskManager');

    var taskRepo =function ($http){
        var db = {};

        var get = function(id){
            console.log('Getting Task  ' + id);
            return {
                name : 'new task from db'
            };
        };

        var save = function (task) {
            console.log('Saving ' + task.name + ' to the db');
        }

        return {
            get : get , 
            save : save
        }
    
    }

    app.service('TaskRepository' , taskRepo);
}())