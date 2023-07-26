const $lightBulb = document.querySelector('.col-only');
const $body = document.querySelector('body');

function dayToNight(event) {
  $lightBulb.classList.toggle('night');
  $lightBulb.classList.toggle('day');
  $body.classList.toggle('night-time');
  $body.classList.toggle('day-time');
}

$lightBulb.addEventListener('click', dayToNight);
