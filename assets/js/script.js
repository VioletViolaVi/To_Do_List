document.addEventListener("DOMContentLoaded", function () {
  let addBtn = document.getElementById("addBtn");
  let addedTask = document.createElement("li");

  // adds task, tick box and bin btn
  addBtn.addEventListener("click", function () {
    let taskList = document.getElementById("tasksContainer");
    let taskInputField = document.getElementById("addTaskInput");

    // adds task
    function addTaskText() {
      addedTask.innerText = taskInputField.value;
      taskList.appendChild(addedTask);
    }
    addTaskText();

    // adds tick box
    function addTickBox() {
      let addTickBox = document.createElement("input");
      addTickBox.className = "to_tick";
      addTickBox.setAttribute("type", "checkbox");
      addedTask.appendChild(addTickBox);
      lineThrough();
    }
    addTickBox();

    // adds bin btn
    function addBinBtn() {
      let binBtn = document.createElement("i");
      binBtn.className = "far fa-trash-alt";
      addedTask.appendChild(binBtn);
    }
    addBinBtn();

    // clears input field
    function clearInputField() {
      taskInputField.value = "";
    }
    clearInputField();
  });

  // crosses out tasks
  function lineThrough() {
    let tickBox = document.querySelector(".to_tick");

    tickBox.addEventListener("click", function () {
      if (tickBox.checked == true) {
        addedTask.style.textDecoration = "line-through";
      } else {
        addedTask.style.textDecoration = "none";
      }
    });
  }





});
