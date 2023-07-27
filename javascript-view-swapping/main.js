const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

function tabContainerHandler(event) {
  for (let i = 0; i < $tabElements.length; i++) {
    if (event.target.matches('.tab') && event.target === $tabElements[i]) {
      event.target.className = 'tab active';
    } else if (
      event.target.matches('.tab') &&
      event.target !== $tabElements[i]
    ) {
      $tabElements[i].className = 'tab';
    }
  }
  const $targetDataView = event.target.getAttribute('data-view');
  for (let i = 0; i < $viewElements.length; i++) {
    if (
      event.target.matches('.tab') &&
      $viewElements[i].getAttribute('data-view') === $targetDataView
    ) {
      $viewElements[i].className = 'view';
    } else if (
      event.target.matches('.tab') &&
      $viewElements[i].getAttribute('data-view') !== $targetDataView
    ) {
      $viewElements[i].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', tabContainerHandler);
