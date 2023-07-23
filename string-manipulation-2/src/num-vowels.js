/* exported numVowels */
function numVowels(string) {
  let answer = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i].toLowerCase()) {
      case 'a':
        answer += 1;
        break;
      case 'e':
        answer += 1;
        break;
      case 'i':
        answer += 1;
        break;
      case 'o':
        answer += 1;
        break;
      case 'u':
        answer += 1;
        break;
    }
  }
  return answer;
}
