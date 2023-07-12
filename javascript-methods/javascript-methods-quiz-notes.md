# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

Logging to the console is important for debugging.
Every programmer runs into bugs while they are writing code.
Logging to the console helps us identify what's causing the area and where exactly it is.

- What is a method?

A function which is a property of an object. 
There are 2 types of methods: instance methods and static methods.
Instance methods are built-in tasks which are performed by an object instance.
Static methods are tasks that are called directly on an object constructor. 

- How is a method different from any other function?

Methods are functions that are associated with an object and can be called to perform specific tasks or operations on that object.

- How do you remove the last element from an array?

using the .pop() method.

- How do you round a number down to the nearest integer?

using the Math.floor() method.

- How do you generate a random number?

using the Math.random() method.

- How do you delete an element from an array?

Using the splice() method.

- How do you append an element to an array?

using the .push() method.

- How do you break a string up into an array?

using the .split() method.

- Do string methods change the original string? How would you check if you weren't sure?

Most of them do not modify the string in place but rather generate a new string and apply the manipulations as new memory, new data. 
There are methods however which do modify the string in place, such as the splice() method.
You can check by logging to the console the string under the previous variable and the string under the new variable.
The most reliable way of checking is of course checking documentation.

- Roughly how many string methods are there according to the MDN Web docs?

Around 25 string methods.

- Is the return value of a function or method useful in every situation?

Not necessarily.
Although very useful in many situations, there are situations where a value doesn't need to be returned to perform a specified function.
If you create a function that performs a task and doesn't need to return a value in order to do so, the return value then wouldn't be very useful.

Essentially, it's situational. In many cases yes, in some other cases no.

- Roughly how many array methods are there according to the MDN Web docs?

Around 20 array methods.

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?

Either MDN or W3C.

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
