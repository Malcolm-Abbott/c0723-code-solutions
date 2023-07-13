/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
    let numbers = [];
    let currentNumber = 1;
    while (currentNumber < 11) {
        numbers.push(currentNumber);
        currentNumber++;
    } return numbers;
}

function getEvenNumbersToTwenty() {
    let evenNumbers = [];
    let currentNumber = 2;
    while (currentNumber <= 20) {
        evenNumbers.push(currentNumber);
        currentNumber += 2;
    } return evenNumbers;
}

function repeatWord(word, times) {
    let count = 1;
    let repeated = '';
    while (count <= times) {
        repeated += word;
        count++;
    } return repeated;
}

function logEachCharacter(string) {
    for (i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

function doubleAll(numbers) {
    let doubled = [];
    for (i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    } return doubled;
}

function getKeys(object) {
    let keys = [];
    for (let key in object) {
        keys.push(key);
    } return keys;
}

function getValues(object) {
    let values = [];
    for (let key in object) {
        let value = object[key];
        values.push(value);
    } return values;
}