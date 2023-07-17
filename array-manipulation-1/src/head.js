/* exported head */
function head(array) {
  let firstElement;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      firstElement = array[i];
    }
  }
  return firstElement;
}
