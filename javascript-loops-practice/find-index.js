/* exported findIndex */
function findIndex(array, value) {
  let answer = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      answer = i;
      break;
    }
  }
  return answer;
}
