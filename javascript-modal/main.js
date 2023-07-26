const $buttonOpenModal = document.querySelector('.button-open-modal');
const $buttonCloseModal = document.querySelector('.button-close-modal');
const $modalActivater = document.querySelector('.modal');

function activateModal(event) {
  $modalActivater.style.display = 'inline-block';
}

$buttonOpenModal.addEventListener('click', activateModal);

function deactivateModal(event) {
  $modalActivater.style.display = 'none';
}

$buttonCloseModal.addEventListener('click', deactivateModal);
