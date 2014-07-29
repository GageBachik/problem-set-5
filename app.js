var alphabetSoup = function(str){
	var letters = str.toLowerCase().split('');
	console.log(letters.sort().join(''));
};

// alphabetSoup('hello');

var vowelCount = function(str){
	var letters = str.toLowerCase().split('');
	var count = 0;
	for (var i = 0; i < letters.length; i++) {
		// console.log(letters[i].charCodeAt());
		if (letters[i].charCodeAt() === 97 || letters[i].charCodeAt() === 101 || letters[i].charCodeAt() === 105|| letters[i].charCodeAt() === 111 || letters[i].charCodeAt() === 117) {
			count++
		}
	}
	console.log(count);
};

// vowelCount('All cows eat grass');

var coinDeterminer = function(){

};