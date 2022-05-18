import Task from "../Models/Task.js";
import TodoList from "../Models/ToDoList.js";

const list = document.getElementById("todo");

const todoList = new TodoList(list);

console.log(todoList);

function addTaskElement(task, list) {
  const taskNode = document.createElement("li");
  taskNode.innerHTML = `
      <span>${task.title}</span>
      <div class="buttons">
        <button class="far fa-check-circle complete"></button>
        <button class="far fa-trash-alt remove"></button>
      </div>
    `;
  list.appendChild(taskNode);
}

function addTask() {
  const title = document.getElementById("newTask");
  const task = todoList.addTask(title.value.trim());
  console.log(typeof task);
  console.log(todoList.tasks);
  addTaskElement(task, todoList.list);
  title.value = "";
  title.focus();
}

document.getElementById("addItem").addEventListener("click", addTask);
