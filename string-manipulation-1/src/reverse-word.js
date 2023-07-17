/* exported reverseWord */
function reverseWord(string) {
  let reverseString = '';
  for (let i = string.length; i > 0; i--) {
    reverseString += string[i - 1];
  }
  return reverseString;
}
