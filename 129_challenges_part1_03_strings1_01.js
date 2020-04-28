/*
getFullName

Write a function called "getFullName". Given a first and a last name, 
"getFullName" returns a single string with the given first and last names 
separated by a single space.
*/

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'