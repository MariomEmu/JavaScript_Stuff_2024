///Steps(Algorithm)
//1. create array to store todos
//2. when we click "add",
//3. get text from textbox
//4. Add it to Array
//5. console.log() the array

/// above steps has done in below but here the array using the display the add element

///when add something through textbox it will display the screen
  //steps(algo)
  //1. Loop through the array
  //2.create some html code for each todo
  //3. put the html on web page

const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},
  {
    name:   'wash dishes',
   dueDate: '2022-11-22'
  }];


renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
   
    //const dueDate = todoObject.dueDate;
    //Destructing shorcut
    const { name, dueDate } = todoObject;

    const html =
      `<p>
      ${name} ${dueDate}
       <button onclick="
       todoList.splice(${i},1);
       renderTodoList();
       
       ">Delete</button>
      </p>`;
    todoListHTML += html;
  }


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });
 

  ///change the value from textbox
  
  inputElement.value = '';

  renderTodoList();


  

}

