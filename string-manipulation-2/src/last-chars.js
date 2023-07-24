/* exported lastChars */
function lastChars(length, string) {
  let answer = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (string[i] !== undefined) {
      answer += string[i];
    }
  }
  return answer;
}
