let humanChoice = "";

// Get a random string from the computer (rock, paper or string)
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length); 
    return choices[randomNumber];
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("p");

// Get the human choice
function getHumanChoice(buttonClicked) {
    humanChoice = buttonClicked.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound (humanChoice, computerChoice);
    humanChoice = "";
}

rockButton.addEventListener("click", getHumanChoice);
paperButton.addEventListener("click", getHumanChoice);
scissorsButton.addEventListener("click", getHumanChoice);

// Compare the choice from the computer and from the human, who wins the round.
function playRound(humanChoice, computerChoice) {
    switch (true) {
        case humanChoice === computerChoice:
            result.textContent = "It's a tie! You both picked the same one.";
            break;
        case (humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper"):
            result.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
            break;
        default:
            result.textContent = `You lost, ${computerChoice} beats ${humanChoice}!`;
    }
}



