/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const result = string.split('');
  const swapper = result[firstIndex];
  result[firstIndex] = result[secondIndex];
  result[secondIndex] = swapper;
  return result.join('');
}
