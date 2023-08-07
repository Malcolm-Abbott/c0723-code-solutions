const $countdownDisplay = document.querySelector('.countdown-display');

function again() {
  switch (Number($countdownDisplay.textContent)) {
    case 4:
      $countdownDisplay.textContent = 4;
      $countdownDisplay.textContent--;
      break;
    case 3:
      $countdownDisplay.textContent--;
      break;
    case 2:
      $countdownDisplay.textContent--;
      break;
    case 1:
      $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(again, 1000);
