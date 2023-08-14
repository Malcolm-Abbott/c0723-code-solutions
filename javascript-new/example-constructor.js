function ExampleConstructor() {}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const childOfConstructor = new ExampleConstructor();
console.log('childOfConstructor:', childOfConstructor);

const descendance = childOfConstructor instanceof ExampleConstructor;
console.log(
  'descendance value: is childOfConstructor instanceof ExampleConstructor?',
  descendance
);
