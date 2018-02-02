var Task = function(data){
    this.flyweight = FlywieghtFactory.get(data.project , data.priority , data.user , data.completed);
    this.name = data.name;
}

function Flyweight (project , priority , user , completed){
    this.priority = data.priority ;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var FlywieghtFactory = function (){
    var flyweights = {};
    var get= function (project , priority , user , completed){
        if(!flyweights[project + priority +user + completed]){
            flyweights[project + priority +user + completed] = new flyweights(project , priority , user , completed);
        }
    }; 
    var getCount = function (){
        var count = 0 ;
        for(var i  in flyweights)count++;
        return count;
    }
    return {
        get : get ,
        getCount: getCount
    }
}();


function TaskCollection(){
    var tasks = {};
    var count = 0;
    var add = function (data){
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function (name){
        return tasks[name];
    }
    var getCount = function (){
        return count;
    }
    return {
        add : add,
        get : get ,
        getCount : getCount
    };
}

var tasks = new TaskCollection();


var projects = ['none' , 'courses' , 'training' , 'project'];
var priorities = [1 , 2 , 3 , 4 ,5];
var users = ['Jon' , 'Erica' , 'Amanda' , 'Nathan'];
var completed = [true , false];


var intialMemory = process.memoryUsage().heapUsed;


for(var i = 0 ; i < 10000 ; i++){
    tasks.add({
        name : 'task ' + i,
        priority:priorities[Math.floor(Math.random() * 5)],
        project:projects[Math.floor(Math.random*4)],
        user : users[Math.floor(Math.random * 4)],
        completed : completed[Math.floor(Math.random * 2)]
    });
}

var afterMemory = process.memoryUsage().heapUsed;
console.log('Memory used '+ (afterMemory - intialMemory) / 1000000 + ' MB');
console.log('tasks: '+tasks.getCount());
console.log('tasks: '+flyweights.getCount());
