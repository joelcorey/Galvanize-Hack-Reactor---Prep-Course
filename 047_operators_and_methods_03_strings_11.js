/*
Using Escape Characters

Complete a function that takes in three string parameters (the first, 
second, and third lines of a haiku), and returns a string that when 
logged to the console, outputs the haiku in traditional format - see 
example above. Your function should create a haiku variable and 
assign it to an expression which will create one "printable onto 
three lines" string out of the three input strings, and return the 
haiku variable.
*/

function generateHaiku(firstLine, secondLine, thirdLine) {
    // create a haiku variable
    // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
    // return the haiku variable

    let haiku = `${firstLine}\n${secondLine}\n${thirdLine}`;
    return haiku;
}

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n', resultHaiku2);