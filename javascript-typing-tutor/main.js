const $span = document.querySelectorAll('span');
let i = 0;

function spanHandler(event) {
  $span[i].className = 'current';
  if ($span[i].textContent === event.key) {
    $span[i].className = 'go';
    i++;
    $span[i].className = 'current';
  } else {
    $span[i].className = 'current stop';
  }
}

document.addEventListener('keydown', spanHandler);
