let input = document.querySelector("#addToDo");
let list = document.querySelector("ul");

function createTaskElement(task) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let trashIcon = document.createElement("i");

    trashIcon.className = "fa fa-trash";
    span.appendChild(trashIcon);

    li.appendChild(span);
    li.appendChild(document.createTextNode(task));

    return li;

}

input.addEventListener("change", (event) => {
    event.preventDefault();
    if (event.key = "enter") {
        if (!input.value) return;
        let task = input.value;
        let taskElement = createTaskElement(task);
        list.appendChild(taskElement);
        console.log(input.value);
        input.value = "";
    }
});

list.addEventListener("click", (evento) => {
    if (evento.target.tagName === "LI") {
        evento.target.classList.toggle("clicked");
    } else if (evento.target.tagName === "I") {
        evento.target.parentElement.parentElement.remove();
    }
});