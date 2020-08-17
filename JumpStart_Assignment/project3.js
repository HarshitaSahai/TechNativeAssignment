// Using array of objects 
var tasks;

tasks = [ {  text: "Pay phone bill",complete: false,priority: 1 }, { text: "Write best-selling novel",complete: false, priority: 3},{text: "Walk the dog",complete: false, priority: 2} ];

console.log("Before function: ")
console.log(tasks)
//Creating the function 
var tasks, addTask, printArray;
 tasks = [ ];
 addTask = function(task) 
 { 
     
    tasks.push({ text: task, complete: false,  priority: 1});
    // If same priority then not getting added
    tasks.push({ text: "Complete project 3", complete: false,  priority: 3});
 
 }; 

 // Calling a print function to print the contents in task
 printArray = function(task) 
 { 
     
    for(var i in task)
    {
         console.log(task[i])
         for(var j in task[i])
         {
            console.log(task[i][j]) 
         }
    }
   
 
 }; 
 // Calling the function
addTask(tasks)
console.log("After function: ")
console.log(tasks)
// Calling the print function 
printArray(tasks)