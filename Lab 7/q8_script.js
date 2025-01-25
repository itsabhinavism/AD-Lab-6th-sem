function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskInput}</span>
        <button onclick="deleteTask(this)">Delete</button>
        <input type="checkbox" onchange="toggleComplete(this)">
    `;
    taskList.appendChild(listItem);

    document.getElementById('taskInput').value = '';
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function toggleComplete(checkbox) {
    const listItem = checkbox.parentElement;
    listItem.classList.toggle('completed');
}
