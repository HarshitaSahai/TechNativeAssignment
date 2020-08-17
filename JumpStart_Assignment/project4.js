// Reading the contents in task and then sorting wrt to different options such if completed or not or priority

var tasks,printArray;
// Created some new tasks wrt to project 1,2....
// Changed the priority
tasks = [ {  text: "Pay phone bill",complete: false,priority: 5 }, { text: "Write best-selling novel",complete: true, priority: 5},{text: "Walk the dog",complete: false, priority: 7} ,{text:"Do project 1", complete: true , priority: 1},{text:"Do project 2", complete: true , priority: 2},{text:"Do project 3", complete: true , priority: 3},{text:"Do project 4", complete: false, priority: 4 }];


function countComplete(tasks)
 {
    return tasks.filter(function(task) {
    return task.complete;
    }).length;
}

// Calling the function
var completedTasks = countComplete(tasks)
// Printing the value 
console.log("Completed task")
console.log(completedTasks)

// Sorting wrt priority in low to high 
var sortByLowHigh = function(tasks) 
{
    return tasks.sort(function(task1, task2)
    {
         return task2.priority - task1.priority;
    });

};
// Sorting wrt priority in high to low
var sortByHighLow = function(tasks)
{
    return tasks.sort(function(task1, task2) 
    {
        return task1.priority - task2.priority;
    });
};
// Sorting wrt name (lex order)
var sortByName = function(tasks) 
{
    return tasks.sort(function(task1, task2)
    {
         return task1.text > task2.text;
    });
}; 
// Print array function 
printArray = function(task) 
{ 
    
   for(var i in task)
   {
        console.log(task[i])
        for(var j in task[i])
        {
           console.log(task[i][j] + " ") 
        }
   }
  
}; 

var sortLTH = sortByLowHigh(tasks)
console.log("LOW TO HIGH")
//print the resulting array 
printArray(sortLTH)
var sortHTL = sortByHighLow(tasks)
console.log("HIGH TO LOW")
// print the resulting array 
printArray(sortHTL)
var sortName = sortByName(tasks)
console.log("NAME")
// print the resulting array 
printArray(sortName)
