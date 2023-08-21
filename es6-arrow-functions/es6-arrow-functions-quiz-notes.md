# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

const funcName = (params) => expression;
const funcName = (params) => {statements};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

It automatically returns the the result of the expression.

- When using _concise body syntax_, how do you return an object literal?

Surroung it in parenthesis
const funcName = (params) => ({object literal})

- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function

The function inside of the parentheses

- How many arguments does the arrow function take?

zero

- What value does it return?

42

- How many arguments are passed to the function `foo`?

one

- What type of argument is passed to the function `foo`?

an arrow callback function

- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function

the function inside of the parentheses

    - How many arguments does the arrow function take?

one

    - What value does it return?

It doesn't return a value, it simply logs a value to the console (`4y = ${4 * y}`)

    - How many arguments are passed to the function `bar`?

one

    - What type of argument is passed to the function `bar`?

an arrow callback function

    - When does the arrow function's code get executed?

When it is invoked or called upon.

- How does the value of `this` differ between standard functions and arrow functions?

They are lexical. This means taht the arrow function uses these variables (on constructs) from the enclosing lexical scope.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
