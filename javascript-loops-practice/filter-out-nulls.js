/* exported filterOutNulls */
function filterOutNulls(values) {
  const newValues = [];
  const valuesLength = values.length;
  for (let i = 0; i < valuesLength; i++) {
    if (values[i] !== null) {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
