/* exported initial */
function initial(array) {
  const frontHalf = [];
  for (let i = 0; i < array.length - 1; i++) {
    frontHalf.push(array[i]);
  }
  return frontHalf;
}
