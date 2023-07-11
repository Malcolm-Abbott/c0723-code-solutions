function convertMinutesToSeconds(minutes) {
    const seconds = minutes * 60;
    return seconds;
}
console.log('the value of convertMinutesToSeconds(3) in seconds: ', convertMinutesToSeconds(3));

function greet(name) {
    const greeting = `Hello, ${name}. It is great to see you!`;
    return greeting;
}
console.log('the value of the function greet(\'Malcolm\'): ', greet('Malcolm'));

function getArea(width, height) {
    const area = width * height;
    return area;
}
console.log('the value of getArea(5, 7): The Area is==>', getArea(5, 7));

function getFirstName(person) {
    const firstName = person.firstName;
    return firstName;
}

const everyName = {
    firstName: 'Malcolm',
    lastName: 'Abbott'
}
console.log('the value of getFirstName(everyName) is:', getFirstName(everyName));

function getLastElement(array) {
    const lastElement = array.at(-1);
    return lastElement;
}

// This can also be achieves using the .length method.
// function getLastElement(array) {
//     const lastElement = array[array.length - 1];
//     return lastElement;
// }


const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('the value of getLastElement(array) is:', getLastElement(array1));