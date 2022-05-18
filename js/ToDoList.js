import Task from "./Task.js";

class TodoList {
  constructor(list) {
    this.list = list;
    this.tasks = [];
  }

  addTask(title) {
    if (title == "" || title == null) {
      alert("Please enter an activity !");
    } else {
      this.tasks.push(new Task(title));
    }
  }

  addTaskElement(task) {
    const taskNode = document.createElement("li");
    taskNode.innerHTML = `
      <span>${task.title}</span>
      <input type="checkbox" id="${task.id}">   
      <label for="${task.id} class="far fa-check-circle""></label>
    `;
    this.list.appendChild(taskNode);
  }
}

export default TodoList;
