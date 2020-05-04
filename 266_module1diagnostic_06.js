/*
Convert Object To Array 3

Write a function called "convertObjectToArray" which converts an object literal 
into an array of arrays, like this:

Argument:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

function convertObjectToArray(object) {
    let container = [];

    for (const key in object) {
        let innerArray = [key, object[key]]
        container.push(innerArray);
    }
    return container;
}

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
};
console.log(convertObjectToArray(input))