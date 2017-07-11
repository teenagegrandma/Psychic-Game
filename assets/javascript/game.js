var choices = ['p', 's', 'y', 'c', 'h', 'i', 'g', 'a', 'm', 'e'];
var playerChoice = '';
var computerchoice = getRandomInt(0, 9);
var totalWins = 0;
var totalLosses = 0;
var guessesLeft = 3;

var choiceLetters = ["p", "s", "y", "c", "h", "i", "g", "a", "m", "e"];

var yourChoices = [];

function getRandomInt(min, max) {
	var random = Math.floor(Math.random() * (max - min)) + min;
	var letter = choiceLetters[random];
	return letter  
}

function didPlayerWin(player, computer) {
	if(player === computer) {
		totalWins += 1;
		return "Win";
	}
	if(player)
	return "Invalid Choice";
}

var computerHTML = document.getElementById("computer-choice-insert");
var playerHTML = document.getElementById ("player-choice-insert");
var result = document.getElementById("game-result-insert");
var totalLosses = document.getElementById("loss-total-insert");
var totalWins = document.getElementById("win-total-inserts");



document.onkeyup = function(event) {
	var playerChoice = event.key;
	if(yourChoices.indexOf(playerChoice) === -1) {
		if(playerChoice === computerChoice) {
			totalWins ++;
			guessesLeft = 3;
		}else {
			guessesLeft--;
			yourChoices.push(playerChoice);
		}
		if( guessesLeft === 0){
			totalLosses++
			guessesLeft = 3;
		}
	}


	document.getElementById('totalWins').innerHTML = "Wins: " + wins;
	document.getElementById('totalLosses').innerHTML = "Losses: " + losses;
	document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
}