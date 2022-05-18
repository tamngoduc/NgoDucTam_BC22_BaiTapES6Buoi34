import Task from "./Task.js";
import TodoList from "./ToDoList.js";

const list = document.getElementById("todo");

const todoList = new TodoList(list);

console.log(todoList);

function addTask() {
  const title = document.getElementById("newTask").value;
  console.log(title);
}

document.getElementById("addItem").addEventListener("click", addTask);
