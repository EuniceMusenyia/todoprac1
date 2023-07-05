// const todoContainer = document.getElementById("pending");
// const completedContainer = document.getElementById("completed");
// const newTaskInput = document.getElementById("new-task");
// let todos = [];

// const getTodos = () => {
//   return fetch('https://dummyjson.com/todos?')
//     .then(response => response.json())
//     .then(response => response)
//     .catch(error => error);
// }

// const displayTodos = async () => {
//   todoContainer.innerHTML = "";
//   completedContainer.innerHTML = "";

//   const todos = await getTodos();
//   console.log(todos);

//   todos.todos.forEach((item) => {
//     let li = document.createElement('li');
//     let todo = document.createElement('span');
//     let completeBtn = document.createElement('button');
//     let deleteBtn = document.createElement('button');

//     todo.textContent = item.todo;
//     completeBtn.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
//     deleteBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

//     li.appendChild(todo);
//     li.appendChild(completeBtn);
//     li.appendChild(deleteBtn);
//     li.setAttribute('data-key', item.id);

//     deleteBtn.addEventListener('click', () => {
//       deleteTodoItem(item.id);
//     });

//     completeBtn.addEventListener('click', () => {
//       markTodoAsCompleted(item.id);
//     });

//     if (item.completed) {
//       li.classList.add('completed-task');
//       completedContainer.appendChild(li);
//     } else {
//       todoContainer.appendChild(li);
//     }
//   });
// }

// const addTodo = () => {
//   const todo = newTaskInput.value.trim();
//   if (todo !== '') {
//     fetch('https://dummyjson.com/todos/add', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         todo: todo,
//         completed: false,
//         userId: 17,
//       })
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Failed to add todo.');
//       })
//       .then(response => {
//         todos.push(response);
//         displayTodos();
//         newTaskInput.value = '';
//       })
//       .catch(error => {
//         console.error('Error adding todo:', error);
//       });
//   }
// };

// const markTodoAsCompleted = (taskId) => {
//   fetch(`https://dummyjson.com/todos/${taskId}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       completed: true
//     })
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log(`Task ${taskId} marked as completed.`);
//       displayTodos();
//     })
//     .catch(error => console.error(error));
// };

// const deleteTodoItem = (taskId) => {
//   fetch(`https://dummyjson.com/todos/${taskId}`, {
//     method: 'DELETE'
//   })
//     .then(response => {
//       console.log(`Task ${taskId} deleted successfully.`);
//       todos = todos.filter(item => item.id !== taskId);
//       displayTodos();
//     })
//     .catch(error => console.error(error));
// };

// document.addEventListener('DOMContentLoaded', () => {
//   displayTodos();
// });

// document.getElementById('myform').addEventListener('submit', event => {
//   event.preventDefault();
//   addTodo();
// });
// *** 





// const todoContainer = document.getElementById("pending");
// const completedContainer = document.getElementById("completed");
// const newTaskInput = document.getElementById("new-task");
// let todos = [];

// const getTodos = () => {
//   return fetch('https://dummyjson.com/todos?/')
//     .then(response => response.json())
//     .then(response => response)
//     .catch(error => error);
// }

// const displayTodos = async () => {
//   todoContainer.innerHTML = "";
//   completedContainer.innerHTML = "";

//   const todos = await getTodos();
//   console.log(todos);
  
//   todos.todos.forEach((item) => {
//     let li = document.createElement('li');
//     let todo = document.createElement('span');
//     let completeBtn = document.createElement('button');
//     let deleteBtn = document.createElement('button');
    
//     todo.textContent = item.todo;
//     completeBtn.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
//     deleteBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    
//     li.appendChild(todo);
//     li.appendChild(completeBtn);
//     li.appendChild(deleteBtn);
//     li.setAttribute('data-key', item.id);
    
//     deleteBtn.addEventListener('click', () => {
//       deleteTodoItem(item.id);
//     });
    
//     completeBtn.addEventListener('click', () => {
//       markTodoAsCompleted(item.id);
//     });
    
//     if (item.completed) {
//       li.classList.add('completed-task');
//       completedContainer.appendChild(li);
//     } else {
//       todoContainer.appendChild(li);
//     }
//   });
// }

// const addTodo = () => {
//   const todo = newTaskInput.value.trim();
//   if (todo !== '') {
//     fetch('https://dummyjson.com/todos/add', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         todo: todo,
//         completed: false,
//         userId: 17,
//       })
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Failed to add todo.');
//       })
//       .then(response => {
//         todos.push(response);
//         displayTodos();
//         newTaskInput.value = '';
//       })
//       .catch(error => {
//         console.error('Error adding todo:', error);
//       });
//   }
// };

// const markTodoAsCompleted = (taskId) => {
//   fetch(`https://dummyjson.com/todos/${taskId}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       completed: true
//     })
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log(`Task ${taskId} marked as completed.`);
//       displayTodos();
//     })
//     .catch(error => console.error(error));
// };

// const deleteTodoItem = (taskId) => {
//   fetch(`https://dummyjson.com/todos/${taskId}`, {
//     method: 'DELETE'
//   })
//     .then(response => {
//       console.log(`Task ${taskId} deleted successfully.`);
//       todos = todos.filter(item => item.id !== taskId);
//       displayTodos();
//     })
//     .catch(error => console.error(error));
// };

// document.addEventListener('DOMContentLoaded', () => {
//   displayTodos();
// });

// document.getElementById('myform').addEventListener('submit', event => {
//   event.preventDefault();
//   addTodo();
// });





// 






// const todoContainer = document.getElementById('todos');
// const addTodoForm = document.getElementById('addTodoForm');
// const todoInput = document.getElementById('new-task');
// let todos = [];

// const getTodos = () => {
//   return fetch('https://dummyjson.com/todos/user/5')
//     .then(response => response.json())
//     .then(response => {
//       todos = response.todos;
//       return todos;
//     });
// };

// const displayTodos = () => {
//   todoContainer.innerHTML = '';

//   todos.forEach(item => {
//     const div = document.createElement('div');
//     const todo = document.createElement('h2');
//     const completed = document.createElement('p');
//     const checkbox = document.createElement('input');
//     const deleteButton = document.createElement('button');

//     todo.innerHTML = item.todo;
//     completed.innerHTML = `Completed: ${item.completed}`;
//     checkbox.type = 'checkbox';
//     checkbox.checked = item.completed;
//     deleteButton.textContent = 'Delete';

//     checkbox.addEventListener('change', () => updateTodo(item.id, checkbox.checked));
//     deleteButton.addEventListener('click', () => deleteTodo(item.id));

//     div.appendChild(todo);
//     div.appendChild(completed);
//     div.appendChild(checkbox);
//     div.appendChild(deleteButton);
//     div.setAttribute('key', item.id);
//     div.setAttribute('class', 'todo');

//     if (item.completed) {
//       div.style.backgroundColor = 'green';
//     } else {
//       div.style.backgroundColor = 'yellow';
//     }

//     todoContainer.appendChild(div);
//   });
// };

// const addTodo = () => {
//   const todo = todoInput.value;

//   fetch('https://dummyjson.com/todos/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       todo,
//       completed: false,
//       userId: 5,
//     }),
//   })
//     .then(response => response.json())
//     .then(response => {
//       if (response.completed) {
//         updateTodo(response.id, true);
//       }
//       todos.push(response);
//       displayTodos();
//       todoInput.value = '';
//     })
//     .catch(error => {
//       console.error('Error adding todo:', error);
//     });
// };

// const updateTodo = (todoId, completed) => {
//   const updatedTodo = todos.find(item => item.id === todoId);
//   if (updatedTodo) {
//     updatedTodo.completed = completed;

//     fetch(`https://dummyjson.com/todos/1`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedTodo)
//     })
//       .then(response => {
//         const updatedIndex = todos.findIndex(item => item.id === todoId);
//         if (updatedIndex !== -1) {
//           todos[updatedIndex] = updatedTodo; // Update the todo object in the array
//         }
//         displayTodos();
//       })
//       .catch(error => {
//         console.error('Error updating todo:', error);
//       });
//   }
// };

// const deleteTodo = todoId => {
//   fetch(`https://dummyjson.com/todos/1`, {
//     method: 'DELETE',
//   })
//     .then(() => {
//       todos = todos.filter(item => item.id !== todoId);
//       displayTodos();
//     })
//     .catch(error => {
//       console.error('Error deleting todo:', error);
//     });
// };

// addTodoForm.addEventListener('submit', event => {
//   event.preventDefault();
//   addTodo();
// });

// getTodos()
//   .then(() => {
//     displayTodos();
//   });


// ************************************************
//   // fetching todos
// fetch('https://dummyjson.com/todos/user/17')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const todos = data.todos;

//     // itterate through each task and  sort the task as either completed or pending
//     todos.forEach(todo => {
//       const todoId = todo.id;
//       const todoTitle = todo.todo;
//       const todoElement = createNewTaskElement(todoId, todoTitle, todo.completed);
//       const todoList = todo.completed ? document.getElementById('completed') : document.getElementById('pending');
//       todoList.appendChild(todoElement);
//       bindTaskEvents(todoElement);// editing and deleting
//     });
//   })
//   .catch(error => {
//     console.error('Error', error);
//   });

//   //delete and edit a specific task
// var taskInput = document.getElementById("new-task");
// var addButton = document.getElementsByTagName("button")[0];
// var incompleteTaskHolder = document.getElementById("pending");
// var completedTasksHolder = document.getElementById("completed");

// var createNewTaskElement = function (taskId, taskString, completed) {
//   var listItem = document.createElement("li");
//   var checkBox = document.createElement("input");
//   var label = document.createElement("label");
//   var editInput = document.createElement("input");
//   var editButton = document.createElement("button");
//   var deleteButton = document.createElement("button");
//   label.innerText = taskString;
//   checkBox.type = "checkbox";
//   checkBox.dataset.taskId = taskId;
//   checkBox.checked = completed;
//   editInput.type = "text";
//   editButton.innerText = "Edit";
//   editButton.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";
//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);
//   return listItem;
// };

// //adding a new to do
// var addTask = function () {
//   console.log("Add Task...");
//   var taskString = taskInput.value;
//   if (taskString.trim() === "") {
//     return;
//   }
//   taskInput.value = "";

//   fetch("https://dummyjson.com/todos", {
//     method: "POST",
//     body: JSON.stringify({
//       title: taskString,
//       completed: false,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const taskId = data.id;
//       const todoElement = createNewTaskElement(taskId, taskString, false);
//       incompleteTaskHolder.appendChild(todoElement);
//       bindTaskEvents(todoElement);
//     })
//     .catch((error) => {
//       console.error("Error", error);
//     });
// };

// // edit to do 
// var editTask = function () {
//   console.log("Edit Task...");
//   console.log("Change 'edit' to 'save'");
//   var listItem = this.parentNode;
//   var editInput = listItem.querySelector("input[type=text]");
//   var label = listItem.querySelector("label");
//   var containsClass = listItem.classList.contains("editMode");
//   if (containsClass) {
//     label.innerText = editInput.value;
//   } else {
//     editInput.value = label.innerText;
//   }
//   listItem.classList.toggle("editMode");
// };

// var deleteTask = function () {
//   console.log("Delete Task...");
//   var listItem = this.parentNode;
//   var ul = listItem.parentNode;
//   ul.removeChild(listItem);
// };

// var taskCompleted = function () {
//   console.log("Complete Task...");
//   var listItem = this.parentNode;
//   completedTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem);
// };

// var taskIncomplete = function () {
//   console.log("Incomplete Task...");
//   var listItem = this.parentNode;
//   incompleteTaskHolder.appendChild(listItem);
//   bindTaskEvents(listItem);
// };


// var bindTaskEvents = function (taskListItem) {
//   console.log("bind list item events");
//   var checkBox = taskListItem.querySelector("input[type=checkbox]");
//   var editButton = taskListItem.querySelector("button.edit");
//   var deleteButton = taskListItem.querySelector("button.delete");
//   editButton.onclick = editTask;
//   deleteButton.onclick = deleteTask;
//   checkBox.onchange = checkBox.checked ? taskCompleted : taskIncomplete;
// };

// for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
//   bindTaskEvents(incompleteTaskHolder.children[i]);
// }

// for (var i = 0; i < completedTasksHolder.children.length; i++) {
//   bindTaskEvents(completedTasksHolder.children[i]);
// }


// // // **************
// // const closest = (element, selector) => {
// //   while (element && !element.matches(selector)) {
// //     element = element.parentElement;
// //   }
// //   return element;
// // };

// // const handleTaskItemEvent = (event) => {
// //   const taskListItem = closest(event.target, 'li');
// //   if (!taskListItem) return;

// //   const checkBox = taskListItem.querySelector("input[type=checkbox]");
// //   const editButton = taskListItem.querySelector("button.edit");
// //   const deleteButton = taskListItem.querySelector("button.delete");

// //   if (event.target === editButton) {
// //     editTask.call(editButton, event);
// //   } else if (event.target === deleteButton) {
// //     deleteTask.call(deleteButton, event);
// //   } else if (event.target === checkBox) {
// //     checkBox.checked ? taskCompleted.call(checkBox, event) : taskIncomplete.call(checkBox, event);
// //   }
// // };

// // const handleAddButtonClick = () => {
// //   const taskString = taskInput.value.trim();
// //   if (taskString === "") return;
// //   taskInput.value = "";

// //   const taskId = Date.now(); // Generate a unique ID for the task
// //   const todoElement = createNewTaskElement(taskId, taskString, false);
// //   incompleteTaskHolder.appendChild(todoElement);
// //   bindTaskEvents(todoElement);

// //   fetch("https://dummyjson.com/todos", {
// //     method: "POST",
// //     body: JSON.stringify({
// //       id: taskId,
// //       todo: taskString,
// //       completed: false,
// //     }),
// //     headers: {
// //       "Content-type": "application/json; charset=UTF-8",
// //     },
// //   })
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log("Task saved:", data);
// //     })
// //     .catch((error) => {
// //       console.error("Error", error);
// //     });
// // };

// // document.addEventListener('click', handleTaskItemEvent);
// // addButton.addEventListener('click', handleAddButtonClick);

// // const taskItems = [...incompleteTaskHolder.children, ...completedTasksHolder.children];
// // taskItems.forEach(bindTaskEvents);


// // *********************

// // update to do
// var taskInput = document.getElementById("new-task");
// var addButton = document.getElementsByTagName("button")[0];
// var incompleteTaskHolder = document.getElementById("pending");
// var completedTasksHolder = document.getElementById("completed");


// var addTask = function () {
//   console.log("Add Task...");
//   var taskString = taskInput.value;
//   if (taskString.trim() === "") {
//     return;
//   }
//   taskInput.value = "";

//   // creating a new to do
//   var taskId = Date.now(); // Generate a unique ID for the task
//   var todoElement = createNewTaskElement(taskId, taskString, false);
//   incompleteTaskHolder.appendChild(todoElement);
//   bindTaskEvents(todoElement);

//   // Optional: You can also send a request to a server to save the task
//   fetch("https://dummyjson.com/todos", {
//     method: "POST",
//     body: JSON.stringify({
//       id: taskId,
//       todo: taskString,
//       completed: false,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Task saved:", data);
//     })
//     .catch((error) => {
//       console.error("Error", error);
//     });
// };

// // ...

// addButton.onclick = addTask;
// addButton.addEventListener("click", addTask);

const todoContainer = document.getElementById("pending");
const completedContainer = document.getElementById("completed");
const newTaskInput = document.getElementById("new-task");
let todos = [];

const getTodos = () => {
  return fetch('https://dummyjson.com/todos?')
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
}

const displayTodos = async () => {
  todoContainer.innerHTML = "";
  completedContainer.innerHTML = "";

  const todos = await getTodos();
  console.log(todos);

  todos.todos.forEach((item) => {
    let li = document.createElement('li');
    let todo = document.createElement('span');
    let completeBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    todo.textContent = item.todo;
    completeBtn.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
    deleteBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

    li.appendChild(todo);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    li.setAttribute('data-key', item.id);

    deleteBtn.addEventListener('click', () => {
      const taskId = li.getAttribute('data-key');
      deleteTodoItem(taskId);
    });

    completeBtn.addEventListener('click', () => {
      const taskId = li.getAttribute('data-key');
      markTodoAsCompleted(taskId);
    });

    if (item.completed) {
      li.classList.add('completed-task');
      completedContainer.appendChild(li);
    } else {
      todoContainer.appendChild(li);
    }
  });
}

const addTodo = () => {
  const todo = newTaskInput.value.trim();
  if (todo !== '') {
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: todo,
        completed: false,
        userId: 17,
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to add todo.');
      })
      .then(response => {
        todos.push(response);
        displayTodos();
        newTaskInput.value = '';
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  }
};

const markTodoAsCompleted = (taskId) => {
  fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: true
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(`Task ${taskId} marked as completed.`);
      todos.todos = todos.todos.map(item => {
        if (item.id === taskId) {
          item.completed = true;
        }
        return item;
      });
      displayTodos();
    })
    .catch(error => console.error(error));
};

const deleteTodoItem = (taskId) => {
  fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'DELETE'
  })
    .then(response => {
      console.log(`Task ${taskId} deleted successfully.`);
      todos.todos = todos.todos.filter(item => item.id !== taskId);
      displayTodos();
    })
    .catch(error => console.error(error));
};

document.getElementById("myform").addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

getTodos().then(() => {
  displayTodos();
});