const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//초기화 하고 갱신되는 것을 막기위해, const -> let

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    //배열 형태로 저장하기 위한 JSON.stringify()
    //중복도 가능
}
function deleteToDo(event) {
     const li = event.target.parentElement;
     li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();     //새로고침 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";       //엔터누르면 사라지게
    
    newTodoObj = {
        text: newTodo,
        id: Date.new(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//localStorage가 비었으면 null 리턴

if(savedToDos) {    //if (savedToDos !== null)
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    
    parsedToDos.forEach(paintToDo);
}