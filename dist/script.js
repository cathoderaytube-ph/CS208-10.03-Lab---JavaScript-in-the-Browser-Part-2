function domLoaded() {
    const addBtn = document.querySelector("#add-btn");
    const textBox = document.querySelector("#task-input");
    const doneBtns = document.querySelectorAll(".done-btn");

    /* Add a task when the Add button is clicked*/
    addBtn.addEventListener("click", addBtnClick);
    
    /* Add a task when Enter is pressed in the texbox */
    textBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    /* Make initial tasks removable*/
    for (const doneBtn of doneBtns) {
        doneBtn.addEventListener("click", removeTask);
    }
}

function addBtnClick() {
    const textBox = document.querySelector("#task-input");
    const newTask = textBox.value;

    /* Prevent empty tasks from being added */
    if (newTask.trim() !== "") {
        addTask(newTask);

        /* Clear textbox after adding task */
        textBox.value = "";
    }

    /* Return keyboard focus to textbox */
    textBox.focus();
}

function addTask(newTask) {
    const newListItem = document.createElement("li");

    newListItem.innerHTML =
        `<span class="task-text">${newTask}</span>` +
        `<button class="done-btn" type="button">&#10006;</button>`;

    const orderedList = document.querySelector("ol");
    orderedList.appendChild(newListItem);

    /* Select every done button and register final button */
    const doneBtns = document.querySelectorAll(".done-btn");
    const lastDoneBtn = doneBtns[doneBtns.length - 1];
    lastDoneBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
    const listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
}

document.addEventListener("DOMContentLoaded", domLoaded);