//Keep the score
let humanScore = 0;
let computerScore = 0;

// Get a random string from the computer (rock, paper or string)
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length); 
    return choices[randomNumber];
}

const buttons = document.querySelector(".buttons");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");
const humanScoreText = document.querySelector(".human-score #points");
const computerScoreText = document.querySelector(".computer-score #points");

// Create a function to reset the game.
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = "0";
    computerScoreText.textContent = "0";
    roundResult.textContent = "";
    gameResult.textContent = "";
}


// Get the human choice and play the round
function playGame(buttonClicked) {
    let humanChoice = buttonClicked.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound (humanChoice, computerChoice);
    humanChoice = "";
    
    if (humanScore === 5) {
        gameResult.textContent = "YOU'RE THE ABSOLUTE WINNER!!!";
        resetGame();
    }
    else if (computerScore === 5) {
        gameResult.textContent = "COMPUTER WON! BEST LUCK NEXT TIME!";
        resetGame();
    }
}
        

buttons.addEventListener("click", function(event) {
    if (event.target.matches ("#rock, #paper, #scissors")) {
        playGame(event);
    }
});

// Compare the choice from the computer and from the human, who wins the round.
function playRound(humanChoice, computerChoice) {
    switch (true) {
        case humanChoice === computerChoice:
            roundResult.textContent = "Nobody won the round! You both picked the same choice.";
            break;
        case (humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper"):
            roundResult.textContent = `You win the round, ${humanChoice} beats ${computerChoice}!`;
            humanScore++;
            humanScoreText.textContent = humanScore;
            break;
        default:
            roundResult.textContent = `You lost the round, ${computerChoice} beats ${humanChoice}!`;
            computerScore ++;
            computerScoreText.textContent = computerScore;
    }
}



