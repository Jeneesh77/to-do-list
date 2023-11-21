function addTask() {
    // Get the input value
    var taskInput = document.getElementById("input");
    var taskText = taskInput.value;

    if(taskText == ""){
        alert("Please enter something...")
        return;
    }

    // Create a new task element
    var taskElement = document.createElement("ul");
    taskElement.appendChild(document.createTextNode(taskText));

    // Add edit and remove buttons
    var editButton = document.createElement("button");
    editButton.innerHTML = 'Edit Task';
    editButton.style.outline = 'none';  // Set outline to none
    editButton.className = 'btn bg-warning';  // Add margin class
    editButton.style.marginLeft = '400px'; 
    editButton.onclick = function() {
        editTask(taskElement);
    };
    
    var removeButton = document.createElement("button");
    removeButton.innerHTML = 'Delete Task';
    removeButton.style.outline = 'none';  // Set outline to none
    removeButton.style.marginLeft = '10px'; 
    removeButton.className = 'btn btn-danger';  // Add margin class

    removeButton.onclick = function() {
        removeTask(taskElement);
    };

    taskElement.appendChild(editButton);
    taskElement.appendChild(removeButton);

    // Append the new element to the task list
    var taskList = document.getElementById("taskList");
    taskList.appendChild(taskElement);

    // Clear the input field after adding the task
    taskInput.value = "";
}

function editTask(taskElement) {
    var newTaskText = prompt("Edit Task:", taskElement.firstChild.nodeValue);
    
    if (newTaskText !== null) {
        taskElement.firstChild.nodeValue = newTaskText;
    }
}

function removeTask(taskElement) {
    var confirmRemove = confirm("Are you sure to remove this task?");
    
    if (confirmRemove) {
        taskElement.parentNode.removeChild(taskElement);
    }
}
