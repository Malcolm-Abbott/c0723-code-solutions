/* exported includesSeven */
function includesSeven(array) {
  let answer = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      answer = true;
    }
  }
  return answer;
}
