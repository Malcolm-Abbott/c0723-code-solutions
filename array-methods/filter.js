const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((element) => element % 2 === 0);
console.log(evens);
const minusDd = names.filter(
  (element) =>
    element.includes('d') === false && element.includes('D') === false
);
console.log(minusDd);
