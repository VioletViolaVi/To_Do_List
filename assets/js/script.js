document.addEventListener("DOMContentLoaded", function () {
  // add btn, <ul> container & task <input> field
  let addBtn = document.getElementById("addBtn");
  let taskList = document.getElementById("tasksContainer");
  let taskInputField = document.getElementById("addTaskInputField");

  addBtn.addEventListener("click", function () {
    // EMPTY <li>, <input> & bin icons added as created one by one
    let addedTask = document.createElement("li");
    let addedTickBox = document.createElement("input");
    addedTickBox.setAttribute("type", "checkbox");
    let binIcon = document.createElement("i");
    binIcon.className = "far fa-trash-alt";

    // TEXT, check boxes & bin icons created
    addedTask.innerText = taskInputField.value;
    taskList.appendChild(addedTask);
    taskList.appendChild(addedTickBox);
    taskList.appendChild(binIcon);

    // clears task <input> field once task's added
    taskInputField.value = "";

    // crosses out tasks
    addedTickBox.addEventListener("click", function () {
      if (this.checked === true) {
        addedTask.style.textDecoration = "line-through";
      } else {
        addedTask.style.textDecoration = "none";
      }
    });

    // deletes tasks individually
    binIcon.addEventListener("click", function () {
      taskList.removeChild(addedTask);
      taskList.removeChild(addedTickBox);
      taskList.removeChild(binIcon);
    });
  });
});
