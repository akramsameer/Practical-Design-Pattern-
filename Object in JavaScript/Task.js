//var task= {};
var task = Object.create(Object.prototype);

task.title = 'My Task';
task.description ='My Description';

Object.defineProperty(task, 'toString' ,{
    value : function (){
        return this.title + ' ' +this.description;
    },
    writable : true,
    enumerable : true,
    configurable : true
});
task.toString = 'hi' ;


//Object.create ==> for inheritance 

var urgentTask = Object.create(task);


console.log(task.title);

