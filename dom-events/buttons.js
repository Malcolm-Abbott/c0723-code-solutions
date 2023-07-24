function handleClick(event) {
  console.log('button clicked');
  console.log('event object: ', event);
  console.log('event.target: ', event.target);
}

const $buttonClick = document.querySelector('button.click-button');
$buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

const $buttonHover = document.querySelector('button.hover-button');
$buttonHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

const $buttonDoubleClick = document.querySelector('button.double-click-button');
$buttonDoubleClick.addEventListener('dblclick', handleDoubleClick);
