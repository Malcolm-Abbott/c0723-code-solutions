/* exported isLowerCased */
function isLowerCased(word) {
  let answer = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      answer = false;
    }
  }
  return answer;
}
