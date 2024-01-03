const todos = [];
const RENDER_EVENT = 'render-todo';

document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("form");
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const textTodo = document.getElementById("title").value;
        const timestamp = document.getElementById("date").value;

        const generateID = generateId();
        const todoObject = generateTodoObject(generateID, textTodo, timestamp, false);
        todos.push(todoObject);

        document.dispatchEvent(new Event(RENDER_EVENT));
    };

    // implementasi fungsi untuk menampilkan beberapa todo yang tersimpan pada array
    document.addEventListener(RENDER_EVENT, function () {
        // console.log(todos);
        const uncompletedTODOList = document.getElementById("todos");
        uncompletedTODOList.innerHTML = "";

        // ketika todo sudah masuk dalam status selesai (isCompleted == true) akan ditampilkan pada tampilan web.
        const completedTODOList = document.getElementById("completed-todos");
        completedTODOList.innerHTML = "";

        // memodifikasi event listener render, agar menampilkan data yang sesuai
        for (const todoItem of todos) {
            const todoElement = makeTodo(todoItem);
            // uncompletedTODOList.append(todoElement);

            // kondisi if statement untuk mem-filter hanya todo “Yang harus dibaca” saja lah yang perlu ditampilkan.
            if (!todoItem.isCompleted)
                uncompletedTODOList.append(todoElement);
            else
                completedTODOList.append(todoElement);
        }
    });

    function generateId() {
        return +new Date();
    };

    function generateTodoObject(id, task, timestamp, isCompleted) {
        return {
            id, task, timestamp, isCompleted
        };
    };
});

// membuat fungsi bernama makeTodo
function makeTodo(todoObject) {
    // document.createElement() berfungsi untuk membuat objek DOM, yakni elemen HTML
    const textTitle = document.createElement("h2");
    textTitle.innerText = todoObject.task; // Jika berhasil dibuat, elemen baru ini akan memiliki properti innerText

    const textTimeStamp = document.createElement("p");
    textTimeStamp.innerText = todoObject.textTimeStamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(textTitle, textTimeStamp);

    const container = document.createElement("div");
    container.classList.add("item", "shadow");
    container.append(textContainer);
    container.setAttribute("id", `todo-${todoObject.id}`);

    // implementasi fungsi untuk menampilkan beberapa todo yang tersimpan pada array
    if (todoObject.isCompleted) {
        const undoButton = document.createElement("button");
        undoButton.classList.add("undo-button");

        undoButton.addEventListener("click", function () {
            undoTaskFromCompleted(todoObject.id);
        });

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");

        trashButton.addEventListener("click", function () {
            removeTaskFromCompleted(todoObject.id);
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement("button");
        checkButton.classList.add("check-button");

        checkButton.addEventListener("click", function () {
            addTaskToCompleted(todoObject.id);
        });

        container.append(checkButton);
    }
    return container;
}

function addTaskToCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

// findTodo berfungsi untuk mencari todo dengan ID yang sesuai pada array todos
function findTodo(todoId) {
    for (const todoItem of todos) {
        if (todoItem.id === todoId) {
            return todoItem;
        }
    }
    return null;
}

// fungsi ini akan menghapus Todo berdasarkan index yang didapat dari pencarian Todo menggunakan findTodoIndx()
function removeTaskFromCompleted(todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodoIndex(todoId) {
    for (const index in todos) {
        if (todos[index].id === todoId) {
            return index;
        }
    }

    return -1;
}
