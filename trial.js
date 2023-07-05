const todoContainer = document.getElementById("todos");
const myForm = document.getElementById("myform");
const myInput = document.getElementById("myinput");
let todos = [];
const getTodos = () => {
  return fetch('https://dummyjson.com/todos?')
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
}
const displayTodos = async () => {
  todoContainer.innerHTML = "";
  const todos = await getTodos();
  console.log(todos);
  todos.todos.map((item) => {
    let div = document.createElement('div');
    let todo = document.createElement('p');
    let complete = document.createElement('p');
    let deleted = document.createElement('button');
    let update = document.createElement('button');
    todo.innerHTML = item.todo;
    complete.innerHTML = item.completed;
    deleted.innerHTML = "Delete";
    update.innerHTML = "Update";
    div.appendChild(todo);
    div.appendChild(complete);
    div.appendChild(deleted);
    div.appendChild(update);
    div.setAttribute('key', item.id);
    div.setAttribute('class', 'todos');
    deleted.addEventListener('click', () => {
      deleteTodoItem(item.id);
    });
    update.addEventListener('click', () => {
      const updatedTodo = prompt('Enter updated task:');
      if (updatedTodo) {
        updateTodoItem(item.id, updatedTodo);
      }
    });
    todoContainer.appendChild(div);
  })
}
const addTodo = () => {
  const todo = myInput.value.trim();
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
        myInput.value = '';
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  }
};
const updateTodoItem = (taskId, updatedTodo) => {
  fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: updatedTodo
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(`Task ${taskId} updated successfully.`);
      displayTodos();
    })
    .catch(error => console.error(error));
}
const deleteTodoItem = (taskId) => {
  fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'DELETE'
  })
    .then(response => {
      console.log(`Task ${taskId} deleted successfully.`);
      todos = todos.filter(item => item.id !== taskId);
      displayTodos();
    })
    .catch(error => console.error(error));
}
myForm.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});
getTodos()
  .then(() => {
    displayTodos();
  });




// *********************


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
//       const taskId = li.getAttribute('data-key');
//       deleteTodoItem(taskId);
//     });

//     completeBtn.addEventListener('click', () => {
//       const taskId = li.getAttribute('data-key');
//       markTodoAsCompleted(taskId);
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
//       todos.todos = todos.todos.map(item => {
//         if (item.id === taskId) {
//           item.completed = true;
//         }
//         return item;
//       });
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
//       todos.todos = todos.todos.filter(item => item.id !== taskId);
//       displayTodos();
//     })
//     .catch(error => console.error(error));
// };

// document.getElementById("myform").addEventListener('submit', event => {
//   event.preventDefault();
//   addTodo();
// });

// getTodos().then(() => {
//   displayTodos();
// });


// **


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
//       const taskId = li.getAttribute('data-key');
//       deleteTodoItem(taskId);
//     });

//     completeBtn.addEventListener('click', () => {
//       const taskId = li.getAttribute('data-key');
//       markTodoAsCompleted(taskId);
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
//       todos.todos = todos.todos.map(item => {
//         if (item.id === taskId) {
//           item.completed = true;
//         }
//         return item;
//       });
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
//       todos.todos = todos.todos.filter(item => item.id !== taskId);
//       displayTodos();
//     })
//     .catch(error => console.error(error));
// };

// document.getElementById("myform").addEventListener('submit', event => {
//   event.preventDefault();
//   addTodo();
// });

// getTodos().then(() => {
//   displayTodos();
// });
