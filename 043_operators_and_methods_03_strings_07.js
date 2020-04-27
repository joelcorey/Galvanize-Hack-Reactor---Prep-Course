/*
Get last character of string

Complete a function that takes in one parameter, a string, and returns 
the input string's last character. Your function should determine the 
length of the input string minus 1, and assign it to a lastIndex 
variable. Your function should also create a lastCharacter variable and 
assign it to an expression which uses lastIndex to access the last 
character in the string, and return the lastCharacter variable.
*/

function getLastCharacter(string) {
    // create a lastIndex variable
    // assign it to the last index in the string
    // create a lastCharacter variable
    // assign it to the last character in the string (make use of lastIndex)
    // return the lastCharacter variable

    //   let lastIndex = string[string.length - 1]
    //   let lastCharacter = string[lastIndex]
    //   return lastCharacter

    return string[string.length - 1];
}

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);