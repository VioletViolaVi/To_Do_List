document.addEventListener("DOMContentLoaded", function () {
  let addBtn = document.getElementById("addBtn");
  let taskList = document.getElementById("tasksContainer");
  let taskInputField = document.getElementById("addTaskInput");

  addBtn.addEventListener("click", function () {
      
    let addedTask = document.createElement("li");

    function addTaskText() {
      addedTask.innerText = taskInputField.value;
      taskList.appendChild(addedTask);
    }
    addTaskText();

    function addTickBox() {
      let addTickBox = document.createElement("input");
      addTickBox.setAttribute("type", "checkbox");
      addedTask.appendChild(addTickBox);
    }
    addTickBox();

    function addDeleteBtn() {
        let deleteBtn = document.createElement("i");
        deleteBtn.className = "far fa-trash-alt";
        addedTask.appendChild(deleteBtn);
    }
    addDeleteBtn();

    function clearInputField() {
      taskInputField.value = "";
    }
    clearInputField();
  });









});
