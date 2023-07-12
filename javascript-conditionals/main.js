/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
    if (number < 5) {
        return true;
    } else {
        return false;
    }
}
isUnderFive(4);
isUnderFive(10);
isUnderFive(5);

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function startsWithJ(string) {
    if (string[0] === 'J') {
        return true;
    } else {
        return false;
    }
}

function isOldEnoughToDrink(person) {
    if (person.age >= 21) {
        return true;
    } else {
        return false;
    }
}

function isOldEnoughToDrive(person) {
    if (person.age >= 16) {
        return true;
    } else {
        return false;
    }
}

function isOldEnoughToDrinkAndDrive(person) {
    if (person) {
        return false;
    }
}

function categorizeAcidity(pH) {
    if (pH < 7 && pH >= 0) {
        return 'acid';
    } else if (pH === 7) {
        return 'neutral';
    } else if (pH <= 14 && pH > 7) {
        return 'base';
    } else {
        return 'invalid pH level';
    }
}

function introduceWarnerBro(name) {
    switch (name) {
        case 'yakko':
        case 'wakko':
            return 'We\'re the warner brothers!';
            break;
        case 'dot':
            return 'I\'m cute~';
            break;
        default: 
            return 'Goodnight everybody!';
    }
}

function recommendMovie(genre) {
    switch (genre) {
        case 'action':
            return 'action movie1';
        case 'comedy':
            return 'The Big Lebowski';
        case 'horror':
            return 'Insidious';
        case 'drama':
            return 'drama movie1';
        case 'musical':
            return 'Pippin';
        case 'sci-fi':
            return 'Ender\'s Game';
        default:
            return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
    }
}