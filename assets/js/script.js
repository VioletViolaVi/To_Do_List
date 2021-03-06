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
    textAlone.style.marginRight = "1em";
    let tickIcon = document.createElement("i");
    tickIcon.className = "far fa-check-square";
    tickIcon.style.marginRight = "0.5em";
    let binIcon = document.createElement("i");
    binIcon.className = "far fa-trash-alt";
    let divider = document.createElement("hr");

    if (taskInputField.value !== "") {
      // TEXT, <li>, <span> & contents created
      taskList.appendChild(addedTask);
      addedTask.appendChild(textAlone);
      textAlone.innerText = taskInputField.value;
      addedTask.appendChild(tickIcon);
      addedTask.appendChild(binIcon);
      addedTask.appendChild(divider);
      // clears task <input> field once task's added
      taskInputField.value = "";
    }

    // crosses out tasks
    tickIcon.addEventListener("click", function () {
      if (textAlone.style.textDecoration === "line-through") {
        textAlone.style.textDecoration = "none";
      } else {
        textAlone.style.textDecoration = "line-through";
      }
    });

    // confirmation modal
    binIcon.addEventListener("click", function () {
      modal.style.display = "block";
      yesBtn();
    });

    // no btn
    no.addEventListener("click", function () {
      // remove modal
      modal.style.display = "none";
    });

    function yesBtn() {
      // yes btn
      yes.addEventListener("click", function () {
        // delete item
        modal.style.display = "none";
        taskList.removeChild(addedTask);
      });
    }
  });
});
