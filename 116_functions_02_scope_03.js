/*
Debugging (3)

Debug a function that takes in an array of strings, representing words in a sentence. 
This function should iterate over the input array and should create, and return, a 
resulting sentence from the words therein.
*/

function createSentence(words) {
    var sentence = "";
    
  	for (var i = 0; i < words.length; i++) {
		if (i === words.length - 1) {
			sentence += words[i] + '.';
		}
		else {
			sentence += words[i] + ' ';
		}
	}
	return sentence;
}

var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);