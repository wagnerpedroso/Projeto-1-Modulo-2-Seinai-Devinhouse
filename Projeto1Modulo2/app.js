// Seleciona no html 
const inserir = document.querySelector(".inserir");
const botao = document.querySelector(".botao");
const lista = document.querySelector(".listaProduto");
const filtro = document.querySelector(".filter-todo");
// Eventos listaProduto 
document.addEventListener('DOMContentLoaded', getTodos);
botao.addEventListener('click', addTodo);
lista.addEventListener('click', deleteCheck);
filtro.addEventListener("click", filterTodo);

// Funções
function addTodo(event) {
  event.preventDefault()
  if (inserir.value == "" || inserir.value.trim() == "" || !isNaN(inserir.value)) {
    alert("Insira seu produto") 
  }
    else { 
    const divList = document.createElement('div');
    divList.classList.add('todo');
    // Criando lista
    const listAdd = document.createElement('li');
    listAdd.innerText = inserir.value;
    listAdd.classList.add('todo-item')
    divList.appendChild(listAdd);

    // ================ Adicionando todos ao LocalStorage ================

    saveLocalTodos(inserir.value);
    // Criando botão valor
    const valorButton = document.createElement('button');
    valorButton.textContent = '$';
    valorButton.classList.add('valor-btn');
    divList.appendChild(valorButton);
    // Criando botão de riscar
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '___';
    completeButton.classList.add('complete-btn');
    divList.appendChild(completeButton);
    // Criando botão deletar
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'DELL';
    trashButton.classList.add('trash-btn');
    divList.appendChild(trashButton)
    // Acrescentar 
    lista.appendChild(divList);
    // Limpa inserir 
    inserir.value = '';
  }
}

function deleteCheck(event) {
  const item = event.target;
  // Delete
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    // ========== Remove LocalStorageTodos ==============================

    removeLocalTodos(todo)
    todo.remove()
  }
  // Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function saveLocalTodos(todo) {
  // Verifica se já existem Todos salvos em localStorage
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  // Adicionando nosso item ao array todos e salvando no localStorage
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  // Verifica se já existem Todos salvos em localStorage
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach((todo) => {
    // Creating Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo);
    // Criando botão valor
    const valorButton = document.createElement('button');
    valorButton.textContent = '$';
    valorButton.classList.add('valor-btn');
    todoDiv.appendChild(valorButton);
    // Criando botão de riscar
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '___';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    // Criando botão deletar
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'Dell';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)
    // Acrescentar 
    lista.appendChild(todoDiv);
  })
}

function removeLocalTodos(todo) {

  let todos;

  // Verifica se já existem Todos salvos em localStorage
  if (localStorage.getItem('todos') === null) {
    // Se não houver, ele iniciará a variárvel todo com um array
    todos = [];
  } else {
    // Se houver, ele buscará os todos que já estão no localStorage
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  // Busca o index do item removido
  const todoIndex = todo.children[0].innerText;
  // Remove o item do array, de acordo com o index recebido 
  todos.splice(todos.indexOf(todoIndex), 1);
  // Atualiza o array no localStorage
  localStorage.setItem('todos', JSON.stringify(todos))
}

function filterTodo(e) {
  const todos = lista.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

//Modo fundo escuro 
const btn = document.querySelector('.btn');
const container = document.querySelector('.container')

btn.onclick = function () {
  this.classList.toggle('active')
  container.classList.toggle('active')
}

// PopUP
function abrir() {
  document.getElementById('popup').style.display = 'block';
}
function fechar() {
  document.getElementById('popup').style.display = 'none';
}