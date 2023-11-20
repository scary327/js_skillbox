(function() {
    function createAppTitle(title) {
        let titleElement = document.createElement('h2');
        titleElement.textContent = title;
        return titleElement;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Новое дело...';
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить';

        form.append(input);
        form.append(button);

        return {
            form,
            input,
            button
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton
        };
    }

    function loadTasks(user) {
        let localStorageElement = localStorage.getItem(user);
        if (localStorageElement) {
            tasks = JSON.parse(localStorageElement);
            for (let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                let todoItem = createTodoItem(task.name);

                todoItem.doneButton.addEventListener('click', function() {
                    todoItem.item.classList.toggle('list-group-item-success');
                    saveTasks(user);
                });
                todoItem.deleteButton.addEventListener('click', function() {
                    if (confirm('Вы уверены?')) {
                        todoItem.item.remove();
                        saveTasks(user);
                    }
                });

                todoList.append(todoItem.item);
            }
        }
    }

    function saveTasks(user) {
        localStorage.setItem(user, JSON.stringify(tasks));
    }

    let tasks = [];

    function createTodoApp(object, user) {
        let localStorageElement = localStorage.getItem(user);
        if (localStorageElement) {
            tasks = (JSON.parse(localStorageElement));
        }
        let todoAppTitle = createAppTitle(object.name);
        let todoItemFrom = createTodoItemForm();
        let todoList = createTodoList();
        loadTasks(user);

        object.done.append(todoAppTitle);
        object.done.append(todoItemFrom.form);
        object.done.append(todoList);

        todoItemFrom.form.addEventListener('submit', function(e) {
            e.preventDefault();
            saveTasks(user);

            if (!todoItemFrom.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemFrom.input.value);

            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
                saveTasks(user);
            });
            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                    saveTasks(user);
                }
            });

            todoList.append(todoItem.item);
            todoItemFrom.input.value = '';
        });
    }

    window.createTodoApp = createTodoApp;
})();