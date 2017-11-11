

// Create a Array of Words
var wordList = [
  'tokyo', 'mumbai', 'bakersfield', 'oakland', 'osaka','london', 'auckland', 'kobe', 'kyoto', 'san francisco',
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
var counter = 12;

var pageUnderscores = document.getElementsByClassName("underscore");
var pageWins = document.getElementsByClassName("rightLetters");
var pageLosses = document.getElementsByClassName("wrongLetters");

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("counter").innerHTML = counter;


var newGame = () => {
	for (var i = 0; i < activeWord.length; i++) {
		underScores.push(" _ ");
	}
	return underScores;
}
// Get users guess
document.addEventListener('keypress', (event) => {
	var letter = String.fromCharCode(event.keyCode);
	if (event.keyCode >= 48 && event.keyCode <= 57) ;
	
	//  If incorrect
	if (activeWord.indexOf(letter) === -1) {
		counter--;
	}
	document.getElementById("counter").innerHTML = counter;
	// If user is correct
	
	for (var i = 0; i < activeWord.length; i++) {
	  if(activeWord.charAt(i) == letter) {
			correctWord.push(letter);
      underScores[i] = letter;
    }
	} 		

  pageUnderscores[0].innerHTML = underScores.join(" ");
	pageWins[0].innerHTML = correctWord;
	
	// If all letters are filled
		if(underScores.join("") == activeWord) {
			setTimeout(function(){ 
				document.getElementById("alert").innerHTML = "You Won!!";
				// document.getElementById("earth").innerHTML = '<div style="height: 1000px background-image: url(https://www.nasa.gov/sites/default/files/images/115334main_image_feature_329_ys_full.jpg)">earth</div>';
				wins++;
				 document.getElementById("wins").innerHTML = wins ++; 
				 resetGame();
			}, 1000);
		}
		else {
			wrongWord.push(letter);
			pageLosses[0].innerHTML = wrongWord;
		};

		if(counter === 0) {
			document.getElementById("alert").innerHTML = "You Loss!!";
			losses++;
			 document.getElementById("losses").innerHTML = losses ++;
			 resetGame();
		}
});

 pageUnderscores[0].innerHTML = newGame().join("");




function resetGame() {
  underScores = [];
  correctWord = [];
  wrongWord = [];
  counter = 12;
  newGame();
};