const todos = [];

document.getElementById("task-btn").addEventListener("click", function () {
  const input = document.getElementById("input-value");
  if (input.value.length > 0) {
    todos.push(input.value);
    render();
  }
  input.value = "";
});

const tbody = document.getElementById("content-container");

function render() {
  tbody.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${todos[i]}</td>
    `;
    const td = document.createElement("td");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("btn", "btn-error", "btn-xs", "text-gray-200", "delete");
    td.appendChild(btn);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

tbody.addEventListener("click", function (event) { 
  if (event.target.tagName === "BUTTON") {
    console.log(tbody.children[0]);
  }
});