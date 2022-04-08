//5 rounded rock-paper-Scissor game. My first JS app...
//to play type in Console: game();

let playerScore;
let computerScore;

// computer's choice
function computerPlay() {
    const compNum = Math.floor(Math.random() * 3) + 1;
    switch (compNum) {
        case 1: {
            return "rock";
            break;
        }
        case 2: {
            return "paper";
            break;
        }
        case 3: {
            return "scissors";
            break;
        }
    }
}

// playing 1 round
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return "Draw";
    }
    else if ((player === "rock" && computerSelection === "paper") || (player === "paper" && computerSelection === "scissors") || (player === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${player}`;
    }
    else {
        playerScore++;
        return `You Win! ${player} beats ${computerSelection}`;
    }
}
// request player selection
function playerChoice() {
    let choice = "";
    while (true) {
        if ((choice.toLowerCase() === "rock") || (choice.toLowerCase() === "scissors") || (choice.toLowerCase() === "paper")) {
            return choice;
        }
        else {
            if (choice != "") alert("Wrong answer!");
            choice = prompt("Please choose stone, paper or scissors?");
        }
    }
}

//game playing 
function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`player score: ${playerScore} computer score: ${computerScore}`);
        console.log(playRound(playerChoice(), computerPlay()));
        
    }

    if (computerScore===playerScore) {
        return `${playerScore} : ${computerScore} - Draw. Nobody win.`;
    }
    else if (computerScore>playerScore) {
        return `${playerScore} : ${computerScore} - Computer Win!`;
    }
    else {
        return `${playerScore} : ${computerScore} - You Win!`;
    }
}
