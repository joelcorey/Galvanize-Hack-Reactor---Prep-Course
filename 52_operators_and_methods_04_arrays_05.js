/*
Get last element of array

Complete a function that takes in one parameter, an array, and returns 
the input array's last element. Your function should determine the length 
of the input array minus 1, and assign it to a lastIndex variable. Your 
function should also create a lastElement variable and assign it to an 
expression which uses lastIndex to access the last element in the array, 
and return the lastElement variable.
*/

function getLastElement(array) {
    // create a lastIndex variable
    // assign it to the last index in the array
    // create a lastElement variable
    // assign it to the last element in the string (make use of lastIndex)
    // return the lastElement variable

    return array[array.length - 1];
}

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);