# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?

static

- How does setting `position: relative` on an element affect document flow?

It does not

- How does setting `position: relative` on an element affect where it appears on the page?

It doesn't unless used in conjunction with offset properties based on the values assigned to those offset properties. By setting the offset property of top, it pushes the element away from the top of it's own containing block down, a distance of the value assigned to that property.

- How does setting `position: absolute` on an element affect document flow?

by removing that element from the normal document flow and positioning it based on its nearest positioned ancestor with a position property that isn't static (if not it will be contained in the initial containing block)

- How does setting `position: absolute` on an element affect where it appears on the page?

makes it appear in it's nearest positioned ancestor's containing block or if none the initial containing block.

- How do you constrain an absolutely positioned element to a containing block?

by assigning the containing block a position property of relative.

- What are the four box offset properties?

top | right | bottom | left

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
