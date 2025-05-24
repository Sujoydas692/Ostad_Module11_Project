
let todos = [];

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const renderTodos = () => {

    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
    <span>${todo}</span>
    <button onClick="deleteTodo(${index})" class="btn btn-danger btn-sm">Delete</button>
    `;

        todoList.appendChild(li);
    });
};

addButton.addEventListener('click', () => {
    todos.push(todoInput.value);
    renderTodos();
    todoInput.value = '';
});

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}