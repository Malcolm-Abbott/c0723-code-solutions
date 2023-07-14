/* exported isUpperCased */
function isUpperCased(word) {
  let answer = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      answer = false;
    }
  }
  return answer;
}
