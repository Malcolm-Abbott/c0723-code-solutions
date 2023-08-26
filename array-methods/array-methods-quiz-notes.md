# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:

  - What does `Array.forEach` do?

    Calls a provided callback function once for each element in an array in ascending-index order. Always returns undefined, discards the return value.

  - What should the callback function do?

    A function to execute for each element in the array. Return value is discarded. Called with the arguments elements | index | array

  - What is `Array.forEach` useful for?

    Iterating over the elements of an array and performing a specified action or operation on each element. Replaces the traditional for loop when not needing a return value.

- `Array.map`:

  - What does `Array.map` do?

    Runs a function on each element and assigns its return value as the element in the array.

  - What should the callback function return?

    A return value which is added as a single element in the new array.

  - What is `Array.map` useful for?

    Creating a new array by applying a transformation function to each element of an existing array.

- `Array.filter`:

  - What does `Array.filter` do?

    Creating a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  - What should the callback function return?

    A truthy or falsy value

  - What is `Array.filter` useful for?

    Creating a new array containting all the elements from an existing array that meet a specific condition.

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
