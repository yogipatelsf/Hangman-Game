

var alphaEl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']

var wordList = [
  'tokyo', 'mumbai', 'bakersfield', 'oakland', 'osaka',
  'london', 'auckland', 'kobe', 'kyoto', 'san francisco',
  'los angeles', 'paris', 'hong kong', 'new delhi', 'new york', 'lusaka',
   'chicago', 'cape town', 'rome', 'moscow', 'cairo',
  'kabul', 'shanghai',  'santiago'
  ];

//random word
var activeWord = wordList[Math.floor(Math.random() * wordList.length)];

document.getElementById("hangman").innerHTML = activeWord;

//Display spaces subject to word

//Get key stroke

 function guessLetter(){
     var letterGuessed = document.getElementById("letter").value;
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

