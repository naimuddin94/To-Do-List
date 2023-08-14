let count = 0;
const display = document.getElementById("content-container");

document.getElementById("task-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value");
  // console.log(inputValue.value);

  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${count}</td>
        <td>${inputValue.value}</td>
    `;
  const td = document.createElement("td");
  const btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("btn", "btn-error", "btn-xs", "text-gray-200", "delete");
  td.appendChild(btn);
  tr.appendChild(td);
  if (!(inputValue.value === "")) {
    display.appendChild(tr);
  }
  inputValue.value = "";
});

display.addEventListener("click", function (event) {
    console.log(event.target)
    if (event.target.tagName === "BUTTON") {
        event.target.parentNode.parentNode.remove();
    }
})
