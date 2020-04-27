/*
Using Object.values()

Complete a function that takes in one parameter, an object. Your function 
should create a values variable, and assign it to an expression which generates 
an array of all of the values in said object by calling Object.values(), then 
return that values variable.
*/

function getAllValues(obj) {
    // create a values variable
    // assign it to an expression which will generate an array of all of the values in obj
    // return to the values variable

    let values = Object.values(obj);
    return values;
}

var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues);