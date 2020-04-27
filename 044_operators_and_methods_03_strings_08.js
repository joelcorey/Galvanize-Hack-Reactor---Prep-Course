/*
Apply substring Method

Complete a function that takes in three parameters 
(string, start, end -> where start and end are numerical indexes), 
and returns a portion of the string from before start, up to, but not 
including, end. Your function should create a subString variable and 
assign it to a call of the substring() method on the string, starting 
from before start, up to, but not including, end, and return the 
subString variable.
*/

function applySubString(string, start, end) {
    // create a subString variable
    // assign it to a portion of the string from before start, up to, but not including end
    // return the subString variable

    return string.substring(start, end);
}

var string1 = 'Queue';
var resultSubString1 = applySubString(string1, 1, 4);
console.log('should log "ueu":', resultSubString1);

var string2 = 'Stack Trace';
var resultSubString2 = applySubString(string2, 2, 10);
console.log('should log "ack Trac":', resultSubString2);