/* exported isVowel */
function isVowel(char) {
  switch (char.toLowerCase()) {
    case 'a'.toLowerCase():
    case 'e'.toLowerCase():
    case 'i'.toLowerCase():
    case 'o'.toLowerCase():
    case 'u'.toLowerCase():
      return true;
    default:
      return false;
  }
}
