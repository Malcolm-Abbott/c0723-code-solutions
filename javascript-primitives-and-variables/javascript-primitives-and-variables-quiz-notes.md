# javascript-primitives-and-variables-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of variables?

To store a value which can be called upon by the given identifier. Using variables to store values allows for quick access to it's assigned value and repeat uses of the assigned value when needed.

- How do you **declare** a variable?

By using the let or const keyword before the identifier. var is also a keyword that can be used to declare a variable, but var is used on older browsers. Use const keyword when you want the value to be assigned to be immutable. Use let keyword if you want to leave the possibility open for the value to be later reassigned.

- How do you initialize (**assign a value to**) a variable?

By using the assignment operator (=) followed by a value.
Example.)
```javascript
const firstName = 'Malcolm';
```

- What characters are allowed in variable names?

Letters, digits, the symbol $ and the symbol +
The first character cannot be a number.

- What does it mean to say that variable names are "case sensitive"?

That means whether the letters are upper case or lower case matters. so const nameTwo = 'Malcolm'; and const nametwo = 'Malcolm'; are two seperate variables.

- What is the purpose of a string?

To store and manipulate data. Can also be used to concatenate other strings together (join other strings together as one string). Data is stored between two quotation symbols (can be single or double).

- What is the purpose of a number?

To store and manipulate data. Also can be used in arithmetic expressions.

- What is the purpose of a boolean?

To assign a value of true or false.

- What does the `=` operator mean in JavaScript?

The assignment operator adds a value to a variable.

- How do you update the value of a variable?

You would reassign a new value to the variable without using the let keyword to declare the variable (being that it has already been declared). 
```javascript
let name = 'Malcolm';
name = 'Abbott';
```

- What is the difference between `null` and `undefined`?

'null' is an explicit value that indicates the intention absence of a value.

'undefined' is the default value assigned to variables that have not been initialized. It's returned by functions that don't return a value. 

So null is a value that is assigned by the developer, whereas undefined indicates an absence of value that was not purposely assigned by the developer. 

- Why is it a good habit to include "labels" when you log values to the browser console?

Cleaner code that's easier to read.

- Give five examples of JavaScript primitives.

1. string
2. number
3. boolean
4. undefined
5. null

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
