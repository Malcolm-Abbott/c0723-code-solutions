/* exported getWords */
function getWords(string) {
  let newString;
  const altString = [];
  if (string !== '') {
    newString = string.split(' ');
    return newString;
  } else {
    return altString;
  }
}
