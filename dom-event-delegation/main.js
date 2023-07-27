const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskListHandler);

function taskListHandler(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $itemAncestor = event.target.closest('.task-list-item');
    console.log('event.target.closest(".task-list-item")', $itemAncestor);
    $itemAncestor.remove();
  }
}
