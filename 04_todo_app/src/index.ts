// TODO Status Enum
enum TodoStatus {
    Pending = "pending",
    Completed = "completed",
}

// TODO Type
type Todo = {
    readonly id: number;
    title: string;
    status: TodoStatus;
    description?: string;
}

// In-Memory Todo List
const todos: Todo[] = [];
let nextId = 1;


const input = document.getElementById("todoInput") as HTMLInputElement
const addBtn = document.getElementById("addBtn") as HTMLButtonElement
const list = document.getElementById("todoList") as HTMLUListElement


// Function for Complete Todo

function completeTodo(id: number): void {
    const todo = todos.find( item => item.id === id)

    if (!todo) {
        return;
    }

    todo.status = TodoStatus.Completed;
    renderTodos()
}

// Function to render todos
function renderTodos(): void {
    list.innerHTML = ""

    todos.forEach( todo => {
        const li = document.createElement("li")
        li.innerText = `${todo.title} - ${todo.status}`

        if (todo.status === TodoStatus.Pending) {
            const btn: HTMLButtonElement = document.createElement("button")
            btn.innerText = "Complete";
            btn.onclick = () => completeTodo(todo.id)

            li.appendChild(btn) 
        }

        list.appendChild(li)
    })
    
}

// Function to add a new Todo
function addTodo(title: string): void {
    
    const newTodo: Todo = {
        id: nextId++,
        title: title,
        status: TodoStatus.Pending
    };

    todos.push(newTodo)

    renderTodos()
}


addBtn.onclick = () => {
    const value = input.value.trim()

    if(!value) return;

    addTodo(value);
    input.value = "";
}