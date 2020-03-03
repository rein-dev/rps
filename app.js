let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
	const choices = ['r', 'p', 's'];
	const randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}

function convert(letter) {
	if (letter === 'r') return "Rock";
	if (letter === 'p') return "Paper";
	return "Scissors";
}

function win(userChoice, compChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = "WIN! " + convert(userChoice) + " beats " + convert(compChoice);
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 600);
	console.log(user);
	console.log(computer);
    console.log(userScore + " - " + compScore);
}

function lose(userChoice, compChoice) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = "LOSE! " + convert(compChoice) + " beats " + convert(userChoice);
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 600);
	console.log("LOSE");
	console.log(userScore + " - " + compScore);
}

function draw(userChoice, compChoice) {
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = "DRAW! " + convert(compChoice) + " & " + convert(userChoice) + " are the same";
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 600);
	console.log("DRAW");
	console.log(userScore + " - " + compScore);
}



function game(userChoice) {
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
		 win(userChoice, compChoice);
		 break;
		case "rp":
		case "ps":
		case "sr":
		 lose(userChoice, compChoice);
		 break;
		case "rr":
		case "pp":
		case "ss":
		 draw(userChoice, compChoice);
		 break;		
 }
}

main();
function main() {
rock_div.addEventListener('click', function() {
	game("r");
})

paper_div.addEventListener('click', function() {
	game("p");
})

scissors_div.addEventListener('click', function() {
	game("s");
})
}

