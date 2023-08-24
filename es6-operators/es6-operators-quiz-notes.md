# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

Logical AND (&&): Returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
Logical OR (||): if the operand of the left hand side is truthy, returns the non-boolean value of that operand (if not a boolean value). If it isn't, returns the non-boolean value on the right hand side (if not a boolean value) regardless of its truthy or falsy status.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Once an expression results meets a specified conditional logic criteria, that expression is returned and no other expressions following that expression will be evaluated and checked to see if they meet the specified conditional logic criteria.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

A logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
The OR operator only checks for truthy and falsy operands, the nullish coalescing (??) operator checks to see if an expression results in a value that is undefined or null.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:) , and finally the epxression to execute if the condition is falsy.

- What is the `?.` (optional chaining) operator? When would you use it?

Accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
You would want to use it when trying to access a property from an object but want to make sure the object has a value that is not undefined or null as to avoid throwing errors

- What is `...` (spread) syntax? How do you use it with arrays and objects?

Allows an iterable, such as an array or string, to be expeanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
In an object literal, the spread syntax enumeratores the properties of an object and adds the key-value pairts to the object being created.

- What data types can be spread into an array? Into an object?

Only iterable objects (like Array) can be spread in array and function parameters.

- How does spread syntax differ from rest syntax?

Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
