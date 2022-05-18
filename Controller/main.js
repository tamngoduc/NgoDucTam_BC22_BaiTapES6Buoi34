import Task from "../Models/Task.js";
import TodoList from "../Models/ToDoList.js";

const list = document.getElementById("todo");

const todoList = new TodoList(list);

console.log(todoList);

function addTask() {
  const title = document.getElementById("newTask");
  const task = todoList.addTask(title.value.trim());
  console.log(typeof task);
  console.log(todoList.tasks);
  todoList.addTaskElement(task);
  title.value = "";
  title.focus();
}

document.getElementById("addItem").addEventListener("click", addTask);
