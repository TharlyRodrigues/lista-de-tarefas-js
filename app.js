const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Você deve digitar uma tarefa!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // criação do botão de fechar
    // ao clicar no botão, a tarefa é removida
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; // simbolo de fechar (x)
    li.appendChild(span);
    // Create a delete button for the task
  }
  inputBox.value = ""; // limpa o input é deixa sem valor
  salvaData();
}

// função de tarefa concluída ou apaga tarefa

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      salvaData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      salvaData();
    }
  },
  false
);

// salva dados da lista no navegador
function salvaData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
