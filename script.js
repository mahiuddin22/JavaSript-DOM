//simple to-do project using jabascript dom.


//select Elements and assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


//functions
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

//add task function call when hit the submit button

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    //bin new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function(){
    
}

let bindIncompleteItems = function(taskItem, checkboxClick){
    let checkBox = taskItem.querySelector('input[type = checkbox]');
    checkBox.onchange = checkboxClick;
}