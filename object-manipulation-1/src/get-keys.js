/* exported getKeys */
function getKeys(object) {
  const theKeys = [];
  for (const keys in object) {
    theKeys.push(keys);
  }
  return theKeys;
}
