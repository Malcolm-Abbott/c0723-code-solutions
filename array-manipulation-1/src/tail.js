/* exported tail */
function tail(array) {
  const backHalf = [];
  for (let i = 1; i < array.length; i++) {
    backHalf.push(array[i]);
  }
  return backHalf;
}
