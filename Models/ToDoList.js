import Task from "./Task.js";

class TodoList {
  constructor(list) {
    this.list = list;
    this.tasks = [];
  }

  addTask(title) {
    const task = new Task(title);
    if (title == "" || title == null) {
      alert("Please enter an activity !");
    } else {
      this.tasks.push(task);
      return task;
    }
  }

  addTaskElement(task) {
    const taskNode = document.createElement("li");
    taskNode.innerHTML = `
      <span>${task.title}</span>
      <div class="buttons">
        <button class="far fa-check-circle complete"></button>
        <button class="far fa-trash-alt remove"></button>
      </div>
    `;
    this.list.appendChild(taskNode);
  }
}

/* 
<button>   
          <input type="checkbox" id="${task.id}" style="display:none">
          <label for="${task.id}" class="far fa-check-circle complete"></label>
          <i class="far fa-trash-alt remove"></i>
        </button>
*/

export default TodoList;
