let tasks = [];

function addTask(task) {
    tasks.push(task);
}

function showTasks() {
    console.log(tasks);
}

function deleteTask(index) {
    tasks.splice(index, 1);
}

function updateTask(index, newTask) {
    tasks[index] = newTask;
}

addTask("Study");
addTask("Exercise");
showTasks();

updateTask(0, "Study JS");
showTasks();

deleteTask(1);
showTasks();