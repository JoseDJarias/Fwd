//Global variables-----------------------------------------------------------------------------------------------------
const container = document.querySelector('.todoList-container')
const firstBox = document.createElement('first-box')
const inputItems = document.querySelector('.div-items');
const buttonAddItem = document.querySelector('.buttonAddItem');
const counterBox = document.querySelector('.counter-box')
const listContainer = document.querySelector('.list-container');
const divItem = document.querySelector('.ul-list');
const btnClearItems = document.querySelector('.clear-items');
// Global variables ----------------------------------------------------------------------------------------------------


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
  if (!inputBox || inputBox.trim() === '') {
    alert('Valor vacio')
    return true
  } else if (!isNaN(inputBox)) {
    alert('No,el valor es un numero')
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
    const personalAlert = document.createElement('alert')
    const alertDiv = document.createElement('div')
    
    // set date
    // let small = document.createElement('small');
    // // let date = new Date();
    // small.textContent = 0;
    // let parseSmall = parseInt(small.textContent);
    // let daysAgo = daysAgo++;
    // small.textContent = daysAgo;
    // date = date.getDate();
    // console.log(date);
    // small.textContent = date;
    // document.querySelector(".small").innerHTML = date;
    
    
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
    personalAlert.className = 'alert';
    alertDiv.className = 'alert-div'
    
    // append elements to the div
    div.appendChild(checkbox)
    div.appendChild(p);
    // where the alert its placed
    alertDiv.appendChild(personalAlert)
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);
    
    // append element div to the div
    divItem.appendChild(div);
    listContainer.appendChild(alertDiv)
    
    // item added
    alerts('success', 'Item Añadido')
    
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
      alerts('danger', 'Tarea  eliminada')
    })
    // edit
    btnEdit.addEventListener('click', function (e) {
      let edit = prompt("Edita tu tarea aqui!")
      // In case that edid is null that show if the user press cancel, otherwise the user press accept 
      if (edit !== null) {
        p.textContent = edit;
      }
    })
    // counter
    checkbox.addEventListener('click', function () {
      var counterNum = parseInt(document.querySelector('.counterNum').textContent);
      if (checkbox.checked) {
        counterNum++;
      } else {
        counterNum--
      }
      document.querySelector('.counterNum').textContent = counterNum;
      
    })
    // alerts
    function alerts(style, text) {
      personalAlert.classList.add(`alert-${style}`);
      personalAlert.textContent = text;
      setTimeout(function () {
        personalAlert.classList.remove(`alert-${style}`);
        personalAlert.textContent = '';
      }, 2000)
    }
    // remove alert
    
    // clear input
    inputItems.innerHTML = `<input type="text" placeholder="Escribe una tarea!" id="inputItem">`;
    
  }
}
// end addItems2

function clearList() {
  let result = confirm('estas seguro que quieres vaciar la lista');
  if (result) {
    divItem.textContent = "";
    listContainer.style.visibility = "hidden";
    btnClearItems.style.visibility = "hidden"
    document.querySelector('.counterNum').textContent = 0;
  }
}

    // functions ---------------------------------------------------------------------------------------------------------------------


