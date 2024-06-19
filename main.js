document.getElementById('add-button').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.addEventListener('click', () => {
        checkButton.classList.toggle('completed');
        todoItem.classList.toggle('completed');
    });

    const todoTextSpan = document.createElement('span');
    todoTextSpan.classList.add('text');
    todoTextSpan.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '❌';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(checkButton);
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = '';
}

