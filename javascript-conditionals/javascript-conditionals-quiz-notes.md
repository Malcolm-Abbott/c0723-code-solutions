# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Give 6 examples of comparison operators.

1. Strictly equal (===) operator
2. Greater than (>) operator
3. Greater than or equal (>=) operator
4. Less than operator (<)
5. Less than or equal (<=) operator
6. Strict not equal (!==) operator


```javascript
const user1 = {
  name: 'Jimmy',
  age: 41
}
function strictlyEqualTo(age) {
  if (number === user1.age) {
    return 'The age you have entered is correct!';
  } else if (number > 0 && number < user1.age) {
    return 'You\'re below the mark.';
  } else if (number <= 0 || number >=125) {
    return 'Enter a real age dude...';
  } else {
    return 'Invalid Input';
  }
}
```

- What data type do comparison expressions evaluate to?

boolean data type.

- What is the purpose of an `if` statement?

To execute different actions (statements/expressions: a.k.a lines of code) based on whether one or more conditions are met or not met. 

- Is `else` required in order to use an `if` statement?

No. Else provides an opportunity to perform an action if the specified conditions aren't met, but is by no means necessary. It is very useful though.

- Describe the syntax (structure) of an `if` statement.

1. if keyword: to initiate the if statement
2. parenthesis with conditional expression (expression that leads to a boolean value)
3. Curly brackets, the code block.
4. return statement to return the value you wish to get from your function. Optional but very useful.
5. else if keywords. This is optional. This is for whether you want the computer to loop through the argument more than once to check what actions to perform based on what conditions or lack of.
6. 

```javascript
if (variable conditionalOperator element) {
  /// code block
  return valueYouWantReturnedFromYourFunction;
}
```

- What are the three logical operators?

1. and (&&)
2. or (||)
3. not (!)

- How do you compare two different expressions in the same condition?

By the use of logical operators.

```javascript
if (myArray.length > 0 && myArray.length < 21) {
  return 'You have remained within the acceptable length boundaries of arrays for this exercise.';
} else {
  return 'Read the instructions carefully and give it another try.';
}
```

- What is the purpose of a `switch` statement?

switch statements are useful when a single expression is compared with multiple cases and you want to perform different actions based on the case the argument falls into.
When in this scenario, switch statements are more succinct and readable than if and if else statements.

- Is a `default` clause required in order to use a `switch` statement?

It is not required, it is optional.

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
