/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
    const firstInitialOfPerson = person.firstName[0];
    const lastInitialOfPerson = person.lastName[0];
    const initialsOfPerson = `${firstInitialOfPerson}${lastInitialOfPerson}`;
    return initialsOfPerson;
}