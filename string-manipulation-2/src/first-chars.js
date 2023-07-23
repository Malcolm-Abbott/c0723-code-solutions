/* exported firstChars */
function firstChars(length, string) {
  let answer = '';
  for (let i = 0; i < length && i < string.length; i++) {
    answer += string[i];
  }
  return answer;
}
