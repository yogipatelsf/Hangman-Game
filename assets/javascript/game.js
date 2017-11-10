

// Create a Array of Words
var wordList = [
  'tokyo', 'mumbai', 'bakersfield', 'oakland', 'osaka',
  'london', 'auckland', 'kobe', 'kyoto', 'san francisco',
  'los angeles', 'paris', 'hong kong', 'new delhi', 'new york', 'lusaka',
   'chicago', 'cape town', 'rome', 'moscow', 'cairo',
  'kabul', 'shanghai',  'santiago'
  ];

// Choose Word Randomly
var activeWord = wordList[Math.floor(Math.random() * wordList.length)];

// Create buckets to capture guesses
var underScores = [];
var correctWord = [];
var wrongWord = [];
var wins = 0;
var losses = 0;
var attemptsLeft = 12;

var pageUnderscores = document.getElementsByClassName("underscore");
var pageWins = document.getElementsByClassName("rightLetters");
var pageLosses = document.getElementsByClassName("wrongLetters");

var newGame = () => {
	for (var i = 0; i < activeWord.length; i++) {
		underScores.push("_");
	}
	return underScores;
}

// Get users guess; https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed
document.addEventListener('keypress', (event) => {
	var letter = String.fromCharCode(event.keyCode);
	// If user is correct
	if(activeWord.indexOf(letter) > -1) {
	// add to correctWord
		correctWord.push(letter);
	// replace underscore with letter	
		underScores[activeWord.indexOf(letter)] = letter;
		pageUnderscores[0].innerHTML = underScores.join(" ");
		pageWins[0].innerHTML = correctWord;
	// Check if letter matches guesses
		if(underScores.join("") == activeWord) {
			prompt('you win!');
			resetGame();
		}
	}
	else {
		wrongWord.push(letter);
		pageLosses[0].innerHTML = wrongWord;
}
});

 pageUnderscores[0].innerHTML = newGame().join("");

 function message() {
	document.getElementById("message").innerHTML = "Press any key to continue."
}

function resetGame() {
   underScores = [];
   correctWord = [];
   wrongWord = [];
   attemptsLeft = 12;
   newGame();

};

 



