document.getElementById('add-todo').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const newTodoText = todoInput.value;

    if (newTodoText !== "") {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const textSpan = document.createElement('span');
        textSpan.textContent = newTodoText;

        newLi.appendChild(checkbox);
        newLi.appendChild(textSpan);
        todoList.appendChild(newLi);
        todoInput.value = ""; // 텍스트 필드를 비웁니다.

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                textSpan.classList.add('completed');
                todoList.appendChild(newLi); // 체크된 항목을 목록의 끝으로 이동
            } else {
                textSpan.classList.remove('completed');
            }
        });
    }
});
