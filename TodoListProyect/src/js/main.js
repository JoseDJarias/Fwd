//Global variables-----------------------------------------------------------------------------------------------------
const container = document.createElement('todoList-container')
const inputItems = document.createElement('div-items');
const buttonAddItem = document.createElement('btn-addTask');
const listContainer = document.createElement('list-container');
const divItem = document.createElement('div');
const btnClearItems = document.createElement('clearItems');
const counterBox = document.createElement('counter-box')
const firstBox = document.createElement('div')
// Global variables ----------------------------------------------------------------------------------------------------

//innerHTML
inputItems.innerHTML = `<input type="text" placeholder="Escribe una tarea!" id="inputItem">`;
buttonAddItem.innerHTML = '<button>Añadir a la lista</button>';
btnClearItems.innerHTML = '<button>Despejar la lista</button>';
counterBox.innerHTML = `<span>Tareas Completadas</span> <p class="counterNum">0</p>`

// add class name
container.className = "todoList-container"
firstBox.className = "first-box"
inputItems.className = "div-items"
buttonAddItem.className = "buttonAddItem"
counterBox.className = 'counter-box';
btnClearItems.className = "clear-items"
listContainer.className = "list-container"
divItem.className = "ul-list"

// append elements such as inputItems, buttonAddItems and counter to the first box
firstBox.appendChild(inputItems);
firstBox.appendChild(buttonAddItem);
firstBox.appendChild(counterBox);

// append element "ul" to the listContainer 
listContainer.appendChild(divItem);
listContainer.appendChild(btnClearItems);

// append elements to the container
container.appendChild(firstBox);
container.appendChild(listContainer);

//append elements to body
document.body.appendChild(container);

// hide the list container where its created in the dom(and also when a user clear the items list),
//  and just visible when a user enter a task
listContainer.style.visibility = "hidden";

// Events---------------------------------------------------------------------------------------------------------------------
buttonAddItem.addEventListener("click", addItem2);
btnClearItems.addEventListener('click', clearList)
// buttonEditItem.addEventListener("click", editItem);
// Events---------------------------------------------------------------------------------------------------------------------

// functions -----------------------------------------------------------------------------------------------------------------
function validationInput() {
  const inputBox = document.getElementById('inputItem').value;
  if (!inputBox) {
    alert('Valor vacio')
    return true
  } else if (!isNaN(inputBox)) {
    alert('No es un numero')
    return true
  }
  return false
}
// add item when a user press click in the buttonAddItem and append to a dinamic list wich also creates the button 
// for edit and delete and the checkbox for the counter
function addItem2() {
  if (!validationInput()) {
    // Global variables 
    let inputBox = document.getElementById('inputItem').value;
    // const newItem = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btnEdit = document.createElement('button');
    const btnDelete = document.createElement('button');
    const checkbox = document.createElement('input');

    // show de the listContainer
    listContainer.style.visibility = "visible";
    btnClearItems.style.visibility = "visible"

    p.textContent = inputBox;
    btnEdit.textContent = 'Editar';
    btnDelete.textContent = 'Eliminar';

    // type checkbox for the buttons
    btnEdit.type = 'checkbox';
    btnDelete.type = 'checkbox';
    checkbox.type = 'checkbox';

    // adding class name to the elements
    btnEdit.className = 'btnBox';
    btnDelete.className = 'btnBox'
    div.className = 'div-box'
    p.className = 'item-p'
    checkbox.className = 'cbo'

    // append elements to the div
    div.appendChild(checkbox)
    // div.appendChild(newItem)
    div.appendChild(p);
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    // append element div to the ul
    divItem.appendChild(div);

    // alert.textContent = 'Tarea agregada a lista';
    // alert.classList.add('alert-success')

    // functions
    // delete
    btnDelete.addEventListener('click', function () {
      div.remove();
      var counterNum = parseInt(document.querySelector('.counterNum').textContent);
      if (counterNum > 0 && checkbox.checked) {
        counterNum--;
        document.querySelector('.counterNum').textContent = counterNum;
      }
      if (divItem.textContent === '') {
        btnClearItems.style.visibility = "hidden";

      }
    })
    // edit
    btnEdit.addEventListener('click', function (e) {

      let edit = prompt("Edita tu tarea aqui!")
      if (edit != ""  ) {
        p.textContent = edit;
      }
    })
    // counter
    checkbox.addEventListener('click', function () {
      var counterNum = parseInt(document.querySelector('.counterNum').textContent);
      confirm('Press ok to confirm')
      let text = '';
      if ( checkbox.checked) {
        counterNum++;
      } else {
        counterNum--
      }
      document.querySelector('.counterNum').textContent = counterNum;
      console.log(checkbox.checked)

    })

    // clear input
    inputItems.innerHTML = `<input type="text" placeholder="Escribe una tarea!" id="inputItem">`;
    
  }
}

function clearList() {
  let result = confirm('estas seguro que quieres vaciar la lista');
  let message = result ? 'Aceptaste vaciar la lista' :
    'Haz cancelado';
    if (result) {
      divItem.textContent = "";
     listContainer.style.visibility = "hidden";
     btnClearItems.style.visibility ="hidden"
     document.querySelector('.counterNum').textContent = 0;
    }
  alert(message); 
}

    // functions ---------------------------------------------------------------------------------------------------------------------


