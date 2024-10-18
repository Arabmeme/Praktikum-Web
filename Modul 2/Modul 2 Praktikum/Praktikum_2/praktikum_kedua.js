function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    list.appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}