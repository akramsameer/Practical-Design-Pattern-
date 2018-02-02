var Task= function(name){
    this.name = name;
    this.completed = false;
}


Task.prototype.complete = function (){
    console.log('Completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function (){
    console.log('Saving ' + this.name);
}

var myTask = new Task ('Legacy Task');
myTask.complete();
myTask.save();


var UrgentTask = function(name , priorty){
    Task.call(this , name);
    this.priorty = priorty;
}

// here we assign the new prototype from Task to UrgentTask
// by this we can call prototypes from Task.prototype
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function(){
    console.log('notifying important people');
};

UrgentTask.prototype.save = function(){
    console.log('do special things here');
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('this is urgent' , 2);
ut.save();