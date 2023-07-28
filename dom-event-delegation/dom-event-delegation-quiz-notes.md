# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

The catalyst/trigger | the element where the event was activated on

- Why is it possible to listen for events on one element that actually happen its descendent elements?

The bubbling phase.

- What DOM element property tells you what type of element it is?

the .tagName property

- What does the `element.closest()` method take as its argument and what does it return?

it takes a CSS selector which will represent the closest ancestor element to the specified element.

- How can you remove an element from the DOM?

element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

Use the .addEventListener() method to the parent

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
