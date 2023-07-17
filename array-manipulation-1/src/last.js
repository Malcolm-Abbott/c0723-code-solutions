/* exported last */
function last(array) {
  let lastElement;
  if (array[array.length - 1] !== undefined) {
    lastElement = array[array.length - 1];
  }
  return lastElement;
}
