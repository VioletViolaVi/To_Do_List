document.addEventListener("DOMContentLoaded", function () {
  // add btn, <ul> container & task <input> field
  let addBtn = document.getElementById("addBtn");
  let taskList = document.getElementById("tasksContainer");
  let taskInputField = document.getElementById("addTaskInputField");
  let modal = document.getElementById("modal");
  let no = document.getElementById("no");
  let yes = document.getElementById("yes");

  addBtn.addEventListener("click", function () {
    // EMPTY <li> & contents added as created one by one
    let addedTask = document.createElement("li");
    addedTask.className = "task-items";

    let textAlone = document.createElement("span");

    let binIcon = document.createElement("i");
    binIcon.className = "far fa-trash-alt";

    let divider = document.createElement("hr");

    if (taskInputField.value !== "") {
      // TEXT, <li>, <span> & contents created
      taskList.appendChild(addedTask);
      addedTask.appendChild(textAlone);
      textAlone.innerText = taskInputField.value;
      addedTask.appendChild(binIcon);
      addedTask.appendChild(divider);
      // clears task <input> field once task's added
      taskInputField.value = "";
    }

    // crosses out tasks
    textAlone.addEventListener("click", function () {
      if (this.style.textDecoration === "line-through") {
        textAlone.style.textDecoration = "none";
      } else {
        textAlone.style.textDecoration = "line-through";
      }
    });

    // confirmation modal
    binIcon.addEventListener("click", function () {
      modal.style.display = "block";
    });

    // no btn
    no.addEventListener("click", function () {
      // remove modal
      modal.style.display = "none";
    });

    // yes btn
    yes.addEventListener("click", function () {
      // delete item
      taskList.removeChild(addedTask);
      modal.style.display = "none";
    });
  });
});
