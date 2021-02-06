document.addEventListener("DOMContentLoaded", function () {
  // add btn, <ul> container & task <input> field
  let addBtn = document.getElementById("addBtn");
  let taskList = document.getElementById("tasksContainer");
  let taskInputField = document.getElementById("addTaskInputField");
  let modal = document.getElementById("modal");



  addBtn.addEventListener("click", function () {
    // EMPTY <li> & contents added as created one by one
    let addedTask = document.createElement("li");
    addedTask.className = "task-items";
    let binIcon = document.createElement("i");
    binIcon.className = "far fa-trash-alt";
    let divider = document.createElement("hr");

    if (taskInputField.value !== "") {
      // TEXT, <li> & contents created
      addedTask.innerText = taskInputField.value;
      taskList.appendChild(addedTask);
      addedTask.appendChild(binIcon);
      addedTask.appendChild(divider);
      // clears task <input> field once task's added
      taskInputField.value = "";
    }

    // crosses out tasks
    addedTask.addEventListener("click", function () {
      if (this.style.textDecoration === "line-through") {
        addedTask.style.textDecoration = "none";
      } else {
        addedTask.style.textDecoration = "line-through";
      }
    });

    // deletes tasks individually
    binIcon.addEventListener("click", function () {
      // confirmation modal
      modal.style.display = "block";
      // taskList.removeChild(addedTask);
    });
  });
});
