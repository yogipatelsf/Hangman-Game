

var alphaEl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']

//word list
var wordList = [
  'tokyo', 'mumbai', 'bakersfield', 'oakland', 'osaka',
  'london', 'auckland', 'kobe', 'kyoto', 'san francisco',
  'los angeles', 'paris', 'hong kong', 'new delhi', 'new york', 'lusaka',
   'chicago', 'cape town', 'rome', 'moscow', 'cairo',
  'kabul', 'shanghai',  'santiago'
  ];

//choose random word for each game
var activeWord = wordList[Math.floor(Math.random() * wordList.length)];

//info that will need to be temporarily stored
var count = 0;
var guessLetter = [];
var s;

//function to run when filling the underscore
function gamePlay() {
	for (var i = 0; i < wordList.length; i++) {
		guessLetter[i] = "_";
	}
	s = guessLetter.join(" ");
	document.getElementById("answer").innerHTML = s;
};

//function to get the letter pressed by User

function keyedLetter() {
	var letterGuessed = document.getElementById("letter").value;
	if (keyedLetter.length > 0) {
		for (var i = 0; i < activeWord.length; i++) {
			activeWord[i]
		}
	}

};


















//Display spaces subject to word

//Get key stroke

 function guessLetter(){
     
     document.getElementById("hangman").innerHTML = letterGuessed;
      };

 //If letter is in the word; if letter is not in word

function checkLetter() { 
var boolean = activeWord.includes(letterGuessed);
document.getElementById("hangman2").innerHTML = boolean;
};
 //If losses

 //If wins


 //Number of wins

//Number of losses
document.getElementById("hangman").innerHTML = activeWord;
