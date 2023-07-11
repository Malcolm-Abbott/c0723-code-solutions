# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?

A block of reusable code that performs specified actions (specified by the programmer of course) composed of a statements or multiple statements. 
Functions often return a value, but not always as it is optional.
Functions are often used to organize and modularize code.

- Describe the parts of a function **definition**.

1. Function: Keyword used to declare a function
2. functionName: name given to the function (optional, without a name is will be an anonymous function). The functionName follows the same rules as an identifier follows when declaring a variable (camelCase, start with a letter, only letters/numbers/$/_ allowed in name)
3. Parameters: optional as well, but extremely useful. They are essentially placeholders for values that will be introduced into a function's code block. They allow the programmer to pass values into the function. Parameters are created and entered into the function when declaring the function, arguments are entered into the function after the function is declared.
4. Function Body: The block of code enclosed in curly braces that contains the statements that comprises the function body and contains the function's logic. This code is ran everytime the code is called on, which is done by calling on the function and inputting arguments (fillers to fill the empty parameter placeholders).
5. Arguments: Values which are passed into the function in place of the parameters after the function is defined.

- Describe the parts of a function **call**.

1. functionName(arguments): write out the name of the function, followed by the arguments you wish to introduce into the function inside of the parenthesis next to the functionName.
2. arguments: the values which will take the parameters place and be used in the function's code block. These are placed inside of parenthesis directly adjacent to the functionName.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

Function Definition: 
* Contains parameters which do not have values assigned to them.
* Contains the code block with the statements & the function's logic
* Often times has a return statement at the end of the function's code block to make sure that the function stops running once the desired purpose of the function is achieved. 

Function Call:
* Contains only the functionName(arguments) --> Doesn't have the entire code block re-written out again.
* Arguments take the place of parameters. Arguments are actual values which will be inputted into the function and manipulated within the function's code block. 
* Produces an actual value.

- What is the difference between a **parameter** and an **argument**?

Parameters are essentially undefined variables, and arguments are the values which will take the place of the parameter.
Parameters are entered into a function while a function is being declared.
Arguments are entered into a function while a function is being called.
Parameters do not have a defined value.
Arguments have a defined value and will be manipulated in the function's code block.

- Why are function **parameters** useful?

They provide an opening, a spot in which values will be inputted so that actions can be performed on the arguments which take the place of the parameters upon calling on the function.

- What two effects does a `return` statement have on the behavior of a function?

1. Returns a value
2. Ends the code block (stops it from running after the return statement is executed)

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
