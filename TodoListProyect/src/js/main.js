//Global variables-----------------------------------------------------------------------------------------------------
// const title = document.createElement('title')
const container = document.createElement('todoList-container')
const inputItems = document.createElement('div-items');
const buttonAddItem = document.createElement('btn-addTask');
const listContainer =document.createElement('list-container');
const ul = document.createElement('ul');
const clearItems = document.createElement('clearItems');
// const item = document.createElement('item')

// Global variables ----------------------------------------------------------------------------------------------------

//innerHTML
inputItems.innerHTML = `<input type="text" placeholder="Write a task!" id="inputItem">`;
buttonAddItem.innerHTML = '<button>Add Items</button>';
clearItems.innerHTML = 'Clear Items'

// add class name
clearItems.className ="clear-items"
container.className = "todoList-container"
inputItems.className ="div-items"
buttonAddItem.className="buttonAddItem"
listContainer.className ="list-container"
ul.className = "ul-list"

// append element "ul" to the listContainer
listContainer.appendChild(ul);
listContainer.appendChild(clearItems);

// append elements to the container
container.appendChild(inputItems);
container.appendChild(buttonAddItem);
container.appendChild(listContainer);

//append elements to body
document.body.appendChild(container);

// Events---------------------------------------------------------------------------------------------------------------------
buttonAddItem.addEventListener("click", addItem2);

// buttonEditItem.addEventListener("click", editItem);
// Events---------------------------------------------------------------------------------------------------------------------


// functions -----------------------------------------------------------------------------------------------------------------
function validationInput() {
  const inputBox = document.getElementById('inputItem').value;
  if (!inputBox ) {
    alert('Empty Value')
    return true
  }else if(!isNaN(inputBox) ){
    alert('Not a String')
    return true
  }
  return false
}

// function addItems() {
//   const inputBox = document.getElementById('inputItem').value;
//   if (!validationInput()) {
//     const prueba =
//     `<ul class="list-group">
//         <li class="list-group-item">
//         <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio"  >
//         <label >${inputBox} </label>
//         <button type="button" class="btn btn-outline-warning">Warning</button>
//         <button type="button" class="btn btn-outline-danger">Danger</button>
//         </li>
//      </ul>`; 
//      console.log(prueba.textContent);
//      item.innerHTML = prueba;
     
//      item.classList.add('item');
  
//      //apend to the container list
//      console.log(item);
//      listContainer.appendChild(item.textContent);    
//     }
    
//   }
  
  function addItem2(){
    const inputBox = document.getElementById('inputItem').value;
    if (!validationInput()) {
        const newItem = document.createElement('li');
        newItem.innerHTML =   
        `<li class="list-group-item">
        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio"  >
        <p >${inputBox} </p>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        </li>`;
        //set id
        var id = Date.now().toString(36) + Math.random().toString(36);
        const attr = document.createAttribute('id');
        attr.value = id;
        console.log(attr.value);
        newItem.setAttributeNode(attr);
        // set id
        ul.appendChild(newItem);        
      }
    }
    // console.log(ul.children);

    // const buttonEditItem = document.getElementById('btn-edit');
    function editItem(){
      console.log('Hola esroytaatat');
    }

  // functions ---------------------------------------------------------------------------------------------------------------------
  