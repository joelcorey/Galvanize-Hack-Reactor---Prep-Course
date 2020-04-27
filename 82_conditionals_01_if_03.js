/*
IF statement with a string

Complete a function that takes in one parameter, a string representing a 
password, determines if the string is both longer than 4, and less than 15, 
characters long, and if it is returns a specific string. Your function should 
use an if statement to determine if the input string is both long enough, and 
not too long, and if it is, should return the string 'Password length is valid'.
*/

function validLengthPassword(password) {
    // if password length is greater than 4 and less than 15
    // return 'Password length is valid'
    
    if (password.length > 4 && password.length < 15) return 'Password length is valid';
}

var result1 = validLengthPassword('passwordyfurdy');
console.log('should log "Password length is valid":', result1);

var result2 = validLengthPassword('pass');
console.log('Should log undefined, because function returned nothing:', result2);

var result3 = validLengthPassword('this is clearly too long of a password');
console.log('Should log undefined, because function returned nothing:', result3);