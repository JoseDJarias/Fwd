//variables-----------------------------------------------------------------------------------------------------
// const title = document.createElement('title')
const container = document.createElement('todoList-container')
const inputItems = document.createElement('div-items');
const buttonAddItem = document.createElement('btn-addTask');
const listContainer =document.createElement('list-container');
const list = document.createElement('list')
 


inputItems.innerHTML = `<input type="text" placeholder="Write a task!" id="items">`;
buttonAddItem.innerHTML = '<button>Add Items</button>';

// add class list
container.classList.add('todoList-container')
list.classList.add('list')
inputItems.classList.add('div-items');
buttonAddItem.classList.add('buttonAddItem');
listContainer.classList.add('list-container');



// console.log(typeof listContainer.textContent);

// append elements to the container
container.appendChild(inputItems);
container.appendChild(buttonAddItem);
container.appendChild(listContainer);

//append elements to body
document.body.appendChild(container);

// Events---------------------------------------------------------------------------------------------------------------------
buttonAddItem.addEventListener("click", addItems)

// functions -----------------------------------------------------------------------------------------------------------------
function validationInput(){
  const inputBox = document.getElementById('items').value;
  if (!inputBox ) {
    alert('Empty Value')
  }else if(!isNaN(inputBox) ){
    alert('Not a String')
  }
  // console.log('Valor: ', inputBox)
}

function addItems() {
  const item = document.getElementById('items').value;
  
  validationInput();
  
  list.innerHTML =
  `<ul class="list-group">
      <li class="list-group-item">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio"  >
      <label >${item} </label>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      </li>
   </ul>`; 
   list.classList.add('list');
   //apend to the container list
   listContainer.appendChild(list);
    
    }
    
  
  