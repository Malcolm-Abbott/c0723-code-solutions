/* exported capitalizeWord */
function capitalizeWord(word) {
  let capitalized;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      capitalized = word[i].toUpperCase();
    } else if (word[i] === word[4] && word[i].toLowerCase() === 's') {
      capitalized += word[i].toUpperCase();
    } else {
      capitalized += word[i].toLowerCase();
    }
  }
  return capitalized;
}
