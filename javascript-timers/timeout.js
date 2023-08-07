const $h1 = document.querySelector('h1');
function whatever() {
  $h1.textContent = 'Hello There';
}

setTimeout(whatever, 2000);
