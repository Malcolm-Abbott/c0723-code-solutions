const books = [
  {
    isbn: 4001,
    title: 'A New Way',
    author: 'Silvestre Clemmington',
  },
  {
    isbn: 4002,
    title: 'A New Day',
    author: 'Robert DeFaunt',
  },
  {
    isbn: 4003,
    title: 'On The Path',
    author: 'Josephus Sphynx',
  },
];

console.log('value of books: ', books);
console.log('typeof books: ', typeof books);

const booksJson = JSON.stringify(books);
console.log('value of booksJson: ', booksJson);
console.log('typeof booksJson: ', typeof booksJson);

const stringJson = '{"id":4007,"name":"Matthew Stevenson"}';
console.log('value of stringJson: ', stringJson);
console.log('typeof stringJson: ', typeof stringJson);

const objectJs = JSON.parse(stringJson);
console.log('value of objectJs: ', objectJs);
console.log('typeof objectJs: ', typeof objectJs);
