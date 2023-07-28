//Global variables-----------------------------------------------------------------------------------------------------
const container = document.createElement('todoList-container')
const inputItems = document.createElement('div-items');
const buttonAddItem = document.createElement('btn-addTask');
const listContainer = document.createElement('list-container');
const ul = document.createElement('ul');
const btnClearItems = document.createElement('clearItems');
const counterBox = document.createElement('counter-box')
const firstBox = document.createElement('div')
// Global variables ----------------------------------------------------------------------------------------------------

//innerHTML
inputItems.innerHTML = `<input type="text" placeholder="Write a task!" id="inputItem">`;
buttonAddItem.innerHTML = '<button>Add Items</button>';
btnClearItems.innerHTML = '<button>Clear Items</button>';
counterBox.innerHTML = `<span>Tareas Completadas</span> <p class="counterNum">0</p>`

// add class name
container.className = "todoList-container"
firstBox.className = "first-box"
inputItems.className = "div-items"
buttonAddItem.className = "buttonAddItem"
counterBox.className = 'counter-box';
btnClearItems.className = "clear-items"
listContainer.className = "list-container"
ul.className = "ul-list"

// append elements such as inputItems, buttonAddItems and counter to the first box
firstBox.appendChild(inputItems);
firstBox.appendChild(buttonAddItem);
firstBox.appendChild(counterBox);

// append element "ul" to the listContainer 
listContainer.appendChild(ul);
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
    alert('Empty Value')
    return true
  } else if (!isNaN(inputBox)) {
    alert('Not a String')
    return true
  }
  return false
}
// add item when a user press click in the buttonAddItem and append to a dinamic list wich also creates the button 
// for edit and delete and the checkbox for the counter
function addItem2() {
  if (!validationInput()) {
    // Global variables 
    const inputBox = document.getElementById('inputItem').value;
    // const newItem = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btnEdit = document.createElement('button');
    const btnDelete = document.createElement('button');
    const checkbox = document.createElement('input');

  
    p.textContent = inputBox;
    btnEdit.textContent = 'Edit';
    btnDelete.textContent = 'Delete';
    // newItem.innerHTML = `<li></li>`;

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
    ul.appendChild(div);

    // functions
    btnDelete.addEventListener('click', function () {
      console.log('click')
      div.remove();
    })
    btnEdit.addEventListener('click', function (e) {

      let edit = prompt("Edita tu tarea aqui!")
      if (edit != null) {
        p.textContent = edit;

      }
    })
    checkbox.addEventListener('click', function () {
      var counterNum = parseInt(document.querySelector('.counterNum').textContent);
      counterNum++;
      let counter = "Press a button!\nEither OK or Cancel.";
      if (confirm(counter) == true) {
        text = "You pressed OK!";
      } else {
        text = "You canceled!";
      }
      confirm('Press ok to confirm')
      document.querySelector('.counterNum').textContent = counterNum;
    })
    // show de the listContainer
    listContainer.style.visibility = "visible";
  }
}

function clearList() {
  ul.textContent = "";
  listContainer.style.visibility = "hidden";
}

    // functions ---------------------------------------------------------------------------------------------------------------------


