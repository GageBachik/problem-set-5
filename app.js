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

var coinDeterminer = function(coins, num){
	var coins = coins.sort(function(a,b){ return b - a });
	var originalNum = num;
	var length = coins.length;
	var allPossible = [];
	var getCoins = function(){		
		var results = {};
		var num = originalNum;
		for (var i = 0; i < coins.length; i++) {
			var currentCoin = coins[i];
			// console.log(num, currentCoin);
			if (num / currentCoin >= 1) {
				if (Math.floor(num / currentCoin) === 1 || num / currentCoin === num || num % currentCoin === 0) {
					// console.log('if current coin = num: ', num, currentCoin);
					if (results[String(currentCoin)]) {
						results[String(currentCoin)] += Math.floor(num / currentCoin);
					}else{
						results[String(currentCoin)] = Math.floor(num / currentCoin);
					}
					num = num % currentCoin;
				}else{
					// console.log('if currentCoin > num before', num, currentCoin);
					if (results[String(currentCoin)]) {
						results[String(currentCoin)] += Math.floor(num / currentCoin);
					}else{
						results[String(currentCoin)] = Math.floor(num / currentCoin);
					}
					num = num % currentCoin;
					// console.log('if currentCoin > num', num, currentCoin);

				}
			}
		};

		// console.log(results)
		allPossible.push(results);
		coins.shift();
		if (coins.length > 0) {
			getCoins();
		}
	};
	getCoins();
	// console.log(allPossible);
	var min = Infinity;
	var theSmalliest = allPossible.map(function(value, index){
		var count = 0;
		for (key in value){
			count += value[key];
		}
		if (count < min) {
			min = count;
			return value;
		}
	});

	for (var i = theSmalliest.length - 1; i >= 0; i--) {
		if (theSmalliest[i]) {
			console.log(theSmalliest[i]);
			return theSmalliest[i];
		}
	};
};


coinDeterminer([1,5,10,25], 83);