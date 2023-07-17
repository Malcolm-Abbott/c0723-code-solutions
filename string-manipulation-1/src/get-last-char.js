/* exported getLastChar */
function getLastChar(string) {
  let lastChar;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1]) {
      lastChar = string[i];
    }
  }
  return lastChar;
}
