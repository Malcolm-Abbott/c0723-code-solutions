/* exported capitalizeWords */
function capitalizeWords(string) {
  const arrayToString = string.split(' ');
  for (let i = 0; i < arrayToString.length; i++) {
    const word = arrayToString[i];
    arrayToString[i] =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  const finalAnswer = arrayToString.join(' ');
  return finalAnswer;
}
