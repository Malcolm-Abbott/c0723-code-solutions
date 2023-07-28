# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

the element on which the event was initialized

- What is the affect of setting an element to `display: none`?

makes it not appear on the web page

- What does the `element.matches()` method take as an argument and what does it return?

Argument: css selector
return value: boolean value indicating whether the argument would select the given selector

- How can you retrieve the value of an element's attribute?

.getAttribute('attribute-name')

- At what steps of the solution would it be helpful to log things to the console?

every step so that you make sure you don't have errors in your code

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?

I would have to add an event listener to every child element which I wanted to possibly serve as an event.target

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?

each element with the class .tab would need to be a handler instead of just the parent, with an .addEventListener('click', callbackFunction). Each .view element would have .view hidden and would toggle on or off when their addEventListener was triggered.

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
