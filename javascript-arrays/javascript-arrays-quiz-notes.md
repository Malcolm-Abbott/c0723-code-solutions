# javascript-arrays-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are arrays used for?

Storing organized data.

- Describe array literal notation.

Declare and initialize a variable and assign it a value of brackets with elements inside, each seperated by commas.

- How are arrays different from "plain" objects?

They are ordered collections of values and each value can be accessed through their index number.
Indexing is used to access, store and manipulate data.
They have a built-in length property which automatically updates everytime there's a change in the array.
Arrays have various built-in methods and are mutable.
They are easily iterated through using loops.

- What number represents the first index of an array?

zero. 
Example.)
```javascript
const myArray = [1, 2, 3];
console.log(myArray[0]); 
/// Output: 1
```

- What is the `length` property of an array?

A built-in property that represents the number of elements in an array.

- How do you calculate the last index of an array?

There are 2 ways:
Using length notation
Using the .at method
Example Length Notation.)
```javascript
const array1 = [1, 2, 3];
const lastIndex1 = array1[array1.length - 1];
console.log('value of lastIndex1: ', lastIndex1);
/// output: value of lastIndex1: 3
```
Example .at method.)
```javascript
const array2 = [4, 5, 6];
const lastIndex2 = array2.at(-1);
console.log(`value of lastIndex2: ${lastIndex2}.`);
/// output: value of lastIndex2: 6
```

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
