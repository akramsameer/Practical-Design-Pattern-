var Task = require('./Task')

var task1 = new Task ('Create a demo for constructor');
var task2 = new Task ('Create a demo for modules');
var task3 = new Task ('Create a demo for singlton');
var task4 = new Task ('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();