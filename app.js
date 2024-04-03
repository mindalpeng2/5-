document.getElementById('add-todo').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const categorySelect = document.getElementById('todo-category');
    const newTodoText = todoInput.value;
    const category = categorySelect.value;

    if (newTodoText !== "") {
        const newLi = document.createElement('li');
        // 카테고리에 따른 클래스 추가
        newLi.classList.add(`category-${category}`);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const textSpan = document.createElement('span');
        textSpan.textContent = `${newTodoText} (${category})`;

        newLi.appendChild(checkbox);
        newLi.appendChild(textSpan);
        todoList.insertBefore(newLi, todoList.firstChild); // 새 할 일 항목을 목록의 맨 위에 추가
        todoInput.value = ""; // 텍스트 필드를 비웁니다.

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                textSpan.classList.add('completed');
                todoList.appendChild(newLi); // 체크된 항목을 목록의 끝으로 이동
            } else {
                textSpan.classList.remove('completed');
                todoList.insertBefore(newLi, todoList.firstChild); // 체크가 해제된 항목을 목록의 맨 위로 이동
            }
        });
    }
});
