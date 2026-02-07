const form = document.getElementById("toDoForm");
const list = document.getElementById("list");

form.onsubmit = function(event){
    event.preventDefault();

    const input = document.getElementById("task");
    const text = input.value.trim();

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function(){
        li.classList.toggle("completed");
    };

    li.append(checkbox);

    let span = document.createElement("span");
    span.textContent = text;
    li.append(span);
    if (text === "") return;

    const deleteButton = document.createElement("img");
    deleteButton.src = "trash.png"; 
    deleteButton.className = "delete-btn";
    deleteButton.style.width = "20px";
    deleteButton.style.height = "20px";

    deleteButton.onclick = function(){
        li.remove();
    }
    li.append(deleteButton);

    list.appendChild(li);
    input.value = ""; 
};