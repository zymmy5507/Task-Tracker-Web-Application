// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const progress = document.getElementById("progress");

// Task array to store task objects
let tasks = [];

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText && tasks.length < 3) {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

// Function to toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to render tasks and update progress
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})">
    `;
    taskList.appendChild(li);
  });
  
  const completedCount = tasks.filter(task => task.completed).length;
  progress.textContent = `Completed: ${completedCount}/3`;
}

// Event listener for adding tasks
addTaskBtn.addEventListener("click", addTask);
