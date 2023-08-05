let tasks = [];

function renderTasks() {
  const pendingList = document.getElementById('pendingList');
  const completedList = document.getElementById('completedList');

  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p>${task.task}</p>
      <span id="date">${task.date}</span>
      <div class="actions">
        <button id="done" onclick="completeTask(${index})"></button>
        <button id="edit"onclick="editTask(${index})"></button>
        <button id="delete" onclick="deleteTask(${index})"></button>
      </div>
    `;

    if (task.completed) {
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  renderTasks();
}

function editTask(index) {
  const editedTask = prompt('Edit task:', tasks[index]?.task || '');
  if (editedTask !== null && editedTask.trim() !== '') {
    tasks[index].task = editedTask;
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

document.addEventListener('DOMContentLoaded', function () {
  const todoForm = document.getElementById('todoForm');
  const taskInput = document.getElementById('taskInput');

  todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task !== '') {
      const date = new Date().toLocaleString();
      tasks.push({ task, date, completed: false });
      renderTasks();
      taskInput.value = '';
     
    }

  });

  // Initial rendering of tasks
  renderTasks();
});

