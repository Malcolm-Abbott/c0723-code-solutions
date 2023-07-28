const $tabContainer = document.querySelector('.tab-container');
const $viewElements = document.querySelectorAll('.view');
const $tabElements = document.querySelectorAll('.tab');
$tabContainer.addEventListener('click', tabContainerHandler);
function tabContainerHandler(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        event.target.className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
    const $targetDataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewElements.length; i++) {
      if ($targetDataView === $viewElements[i].getAttribute('data-view')) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
    }
  }
}
