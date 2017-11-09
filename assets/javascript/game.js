

// var alphaEl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z']

// //word list
// var wordList = [
//   'tokyo', 'mumbai', 'bakersfield', 'oakland', 'osaka',
//   'london', 'auckland', 'kobe', 'kyoto', 'san francisco',
//   'los angeles', 'paris', 'hong kong', 'new delhi', 'new york', 'lusaka',
//    'chicago', 'cape town', 'rome', 'moscow', 'cairo',
//   'kabul', 'shanghai',  'santiago'
//   ];

// //choose random word for each game
// var activeWord = wordList[Math.floor(Math.random() * wordList.length)];

// //info that will need to be temporarily stored
// var count = 0;
// var guessLetter = [];
// var fillBlank;

//function to run when filling the underscore
// function gamePlay() {
// 	for (var i = 0; i < wordList.length; i++) {
// 		guessLetter[i] = "_";
// 	}
// 	s = guessLetter.join(" ");
// 	document.getElementById("answer").innerHTML = fillBlank;
// };

// //function to get the letter pressed by User

// function keyedLetter() {
// 	var letterGuessed = document.getElementById("letter").value;
// 	if (keyedLetter.length > 0) { //define a guess has been made
// 		for (var i = 0; i < activeWord.length; i++) {
// 			if (activeWord[i] === letter) {// must be exact match
// 				guessLetter[i] = letterGuessed; // give it assigned value
// 				}
// 			}

// 			//define how many guess user has
// 			count++;
// 			document.getElementById("remain").innerHTML = "Number of guesses remaining: " + count;
// 			document.getElementById("used").innerHTML = guessLetter.join(" ");
// 		}

// 		//state how many attempts user gets

// 		if(count>12) {
// 			document.getElementById("end").innerHTML = "Game over!";
// 			location.reload();
// 		}
// 	}



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
// console.log(activeWord);

// Create underscore based on number of words
var underScores = [];
function newGame() {
	for (var i = 0; i < activeWord.length; i++) {
		underScores.push("_");
	}
return underScores;
}
console.log(newGame());

// Get users guess; https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed
document.addEventListener('keypress', function(event) {
	// var keycode = event.keyCode;
	var letter = String.fromCharCode(event.keyCode);
	console.log(letter);
});

// Check if guess is right
// if right put to right list
//if wong put to wrong list



