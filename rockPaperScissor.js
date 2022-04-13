//5 rounded rock-paper-Scissor game. My first JS app...
//to play type in Console: game();



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
function playRound(playerSelection) {
    const player = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    if (player === computerSelection) {
        return 'Draw';
    }
    else if ((player === "rock" && computerSelection === "paper") || (player === "paper" && computerSelection === "scissors") || (player === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return `You Lose! ${computerSelection.toUpperCase()} beats ${player.toUpperCase()}!`;
    }
    else {
        playerScore++;
        return `You Win! ${player.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
    }
    console.log(this);
}
// request player selection 
// OLD STUFF... can be deleted
/*
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
} */

//game playing 
function whoWin() {

    if (computerScore === playerScore) {
        return `${playerScore} : ${computerScore} - Draw. Nobody win.`;
    }
    else if (computerScore > playerScore) {
        return `${playerScore} : ${computerScore} - Computer Win!`;
    }
    else {
        return `${playerScore} : ${computerScore} - You Win!`;
    }
}
//finished 5 round
function finished() {



}

//new game
function newGame() {
    sumRound = 0;
    playerScore = 0;
    computerScore = 0;
    p1.style.display = 'none';
    btn_newGame.style.display = 'none';
}
let playerScore = 0;
let computerScore = 0;

let container = document.querySelector('.container');
let p_score = document.querySelector('.scores');  //p
p_score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

let p_roundResult = document.querySelector('.roundResult');
p_roundResult.style.visibility = 'hidden';

let p1 = document.createElement('p');
container.appendChild(p1);

let btn_newGame = document.createElement('button');
btn_newGame.textContent = 'New Game';
container.appendChild(btn_newGame);
btn_newGame.addEventListener('click', () => newGame());


newGame();
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        p_roundResult.textContent = playRound(button.id);
        p_score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        p_roundResult.style.visibility = 'visible';
        sumRound++;
        if (sumRound === 5) {
            p1.textContent = whoWin();
            p1.style.display = 'block';
            btn_newGame.setAttribute('style', 'display: inline-block; width:200px; background-image: linear-gradient(-180deg, #e23737 0%, #c81e1e 100%);');

        }
    });
});


/*let btn_rock = document.querySelector('#rock');
btn_rock.addEventListener('click', () => playRound(btn_rock.id));

console.log(btn_rock);
*/