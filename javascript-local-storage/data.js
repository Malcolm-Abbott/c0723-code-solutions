/* exported todos */

let todos = [];

function todosHandler(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', todosHandler);

const previousTodosJSON = localStorage.getItem('previous-local-storage');

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
