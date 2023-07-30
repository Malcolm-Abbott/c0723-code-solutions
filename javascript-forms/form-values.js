const $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = $contactForm.elements.name.value;
  const email = $contactForm.elements.email.value;
  const message = $contactForm.elements.message.value;
  const propertyValues = {
    name,
    email,
    message,
  };
  console.log(propertyValues);
  $contactForm.reset();
}
