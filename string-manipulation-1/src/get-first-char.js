/* exported getFirstChar */
function getFirstChar(string) {
  let firstChar;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[0]) {
      firstChar = string[i];
    }
  }
  return firstChar;
}
