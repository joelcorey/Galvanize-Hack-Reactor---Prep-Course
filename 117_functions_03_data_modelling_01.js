/*
Use an object to count words in a sentence

Write a function called "countWords".

Given a string (words separated by spaces), "countWords" returns an object where each 
key is a word in the given string, with its value being how many times that word 
appeared in the given string. If given an empty string, your function should return an 
empty object.
*/

function countWords(stringOfWords) {
	if (stringOfWords.length === 0) {
		return {};
    }
    
    let count = {};
	let words = stringOfWords.split(' ');

	for (let i = 0; i < words.length; i++) {
		const element = words[i];
		if (count[words[i]] === undefined) {
			count[words[i]] = 1;
		}
		else{
			count[words[i]] += 1;
		}
	}
	return count;
}

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);