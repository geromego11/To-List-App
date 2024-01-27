// script.js

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskContainer = document.getElementById("taskContainer");
    var successMessage = document.getElementById("successMessage");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var taskItem = document.createElement("div");
    taskItem.className = "task-item";

    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        var newTaskText = prompt("Edit task:", taskText.textContent);
        if (newTaskText !== null) {
            taskText.textContent = newTaskText;
            showSuccessMessage("Task updated successfully!");
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        var confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            taskItem.remove();
            showSuccessMessage("Task deleted successfully!");
        }
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskContainer.appendChild(taskItem);

    taskInput.value = "";
    showSuccessMessage("Task added successfully!");
}

function showSuccessMessage(message) {
    var successMessage = document.getElementById("successMessage");
    successMessage.textContent = message;
    setTimeout(function() {
        successMessage.textContent = "";
    }, 2000);
}
