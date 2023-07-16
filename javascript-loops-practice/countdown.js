/* exported countdown */
function countdown(number) {
  const array1 = [];
  for (let i = 0; number >= 0; i++) {
    array1.push(number);
    number--;
  }
  return array1;
}
