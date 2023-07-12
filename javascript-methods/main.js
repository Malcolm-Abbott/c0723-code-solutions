const num1 = 4;
const num2 = 7;
const num3 = 14;
const maximumValue = Math.max(num1, num2, num3);
console.log('the value of maximumValue is: ', maximumValue);

const heroes = ['hero1', 'hero2', 'hero3', 'hero4'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('the value of randomHero: ', randomHero);

const library = [
    {
        title: 'book1',
        author: 'author1'
    },
    {
        title: 'book2',
        author: 'author2'
    },
    {
        title: 'book3',
        author: 'author3'
    }
];

const lastBook = library.pop();
console.log('the value of lastBook is: ', lastBook);

const firstBook = library.shift();
console.log('the value of firstBook is: ', firstBook);

const js = {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
}

const css = {
    title: 'CSS Secrets',
    author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('the value of library is: ', library);

const fullName = 'Malcolm Abbott';
const firstAndLastName = fullName.split(' ');
console.log('the value of firstAndLastName is: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('the value of sayMyName is: ', sayMyName);