class Task {
  constructor(title) {
    this.id = Date.now();
    this.isCompleted = false;
    this.title = title;
  }
}

export default Task;
