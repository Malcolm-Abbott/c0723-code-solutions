# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

To get information: could be to find where an element is in a page, or to troubleshoot for errors.

- What is a "model"?

Interface representing the structure and content of a web page as a tree-like structure of nodes.

- Which "document" is being referred to in the phrase Document Object Model?

All web page content (the web page document / HTML).

- What is the word "object" referring to in the phrase Document Object Model?

The representation of the elements and nodes in the web page document as objects in the programming interface provided by the DOM.

- What is a DOM Tree?

Hierarchical representation of the elements and nodes within an HTML or XML document.

- Give two examples of `document` methods that retrieve a single element from the DOM.

```javascript
document.querySelector('p');
document.getElementsByTagName('p');
```

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

```javascript
document.querySelectorAll('#overlook');
```

- Why might you want to assign the return value of a DOM query to a variable?

Efficiency | readability | performance optimization | manipulation/interaction

- What `console` method allows you to inspect the properties of a DOM element object?

the console.dir() method

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

So that the visual aspects of the page do not have to wait to load until after the JavaScript file loads.
Allows the html / css to load without having to wait for the JavaScript to load first.

- What does `document.querySelector()` take as its argument and what does it return?

Takes an element as its argument and returns the first instance of that element appearing in the document.

- What does `document.querySelectorAll()` take as its argument and what does it return?

Takes an element and returns every element matching the argument in the document.

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
