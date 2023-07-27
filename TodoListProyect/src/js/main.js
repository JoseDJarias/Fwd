//Global variables-----------------------------------------------------------------------------------------------------
// const title = document.createElement('title')
const container = document.createElement('todoList-container')
const inputItems = document.createElement('div-items');
const buttonAddItem = document.createElement('btn-addTask');
const listContainer =document.createElement('list-container');
const ul = document.createElement('ul');
const btnClearItems = document.createElement('clearItems');
const counterBox = document.createElement('counter-box')
const firstBox = document.createElement('div')
// const item = document.createElement('item')

// Global variables ----------------------------------------------------------------------------------------------------

//innerHTML
inputItems.innerHTML = `<input type="text" placeholder="Write a task!" id="inputItem">`;
buttonAddItem.innerHTML = '<button>Add Items</button>';
btnClearItems.innerHTML = '<button>Clear Items</button>';
counterBox.innerHTML = `<span>Tareas Completadas</span> <p>0</p>`

// add class name
container.className = "todoList-container"
firstBox.className = "first-box"
inputItems.className ="div-items"
buttonAddItem.className="buttonAddItem"
counterBox.className ='counter-box';
btnClearItems.className ="clear-items"
listContainer.className ="list-container"
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

// 
listContainer.style.visibility = "hidden";

// Events---------------------------------------------------------------------------------------------------------------------
buttonAddItem.addEventListener("click", addItem2);
btnClearItems.addEventListener('click',clearList)
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

  function addItem2( ){
    const inputBox = document.getElementById('inputItem').value;
    if (!validationInput()) {
        const newItem = document.createElement('li');
        // var inputID para evitar los mensaje de error en la consola por el id del input en newItem
        var inputId =Date.now().toString(36) + Math.random(7/9).toString(36);
        newItem.innerHTML =   
        // id for input
        `<li class="list-group-item">
        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="${inputId}"  >
        <p >${inputBox} </p>
        <button type="button" class="btn-edit">Edit</button>
        <button type="button" class="btn-delete">Delete</button>
        </li>`;

        ul.appendChild(newItem);  
        
        
        const btnDelete = document.querySelector('.btn-delete');  
        const btnEdit = document.querySelector('.btn-edit');      
        btnEdit.addEventListener('click',editItem );
        btnDelete.addEventListener('click',deleteItem );
        // listContainer.classList.add('show-container')
        listContainer.style.visibility = "visible";
      }
    }

    // edit item
    function editItem(e) {
      console.log('Holaaa');
    }

    // delete item
    function deleteItem(e) {
      const element = e.currentTarget.parentElement.parentElement;
      ul.removeChild(element)
      
      console.log('Holaaaa');
    }

    function clearList(){
      ul.textContent = "";
      let inputBox = document.getElementById('inputItem').value = '';
      
      listContainer.style.visibility = "hidden";
    }
    
    function counter(){

    }
    // functions ---------------------------------------------------------------------------------------------------------------------
    









    //set id
    // var id = Date.now().toString(36) + Math.random(7/9).toString(36);
    // const attr = document.createAttribute('id');
    // attr.value = id;
    // console.log(attr.value);
    // newItem.setAttributeNode(attr);
    // // set id