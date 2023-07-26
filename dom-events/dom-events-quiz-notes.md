# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

To find bugs | troubleshooting | to see that our code is producing what we want it to produce and performing the actions we want it to.

- What is the purpose of events and event handling?

Perform an action whenever a specified event occurs.

- Are all possible parameters required to use a JavaScript method or function?

No.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

the .addEventListener() method

- What is a callback function?

A function that is entered into another function as an argument.

- What object is passed into an event listener callback when the event fires?

an object representing the event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The target property of the event.
You can always log it to the console

```javascript
console.log(event.target);
```

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  a callback function should be entered without the ().

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
