// Get a random string from the computer (rock, paper or string)
let computerChoice;
let humanChoice;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); 

    if (randomNumber === 0) {
        return "rock";
        }
    if (randomNumber === 1) {
        return "paper";
    }
    if (randomNumber === 2) {
        return "scissors";
    }
}

// Get the human choice
function getHumanChoice() {
    return prompt("Pick your choice: rock, paper or scissors?");
}

// Compare the choice from the computer and from the human, who wins the round.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore ++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore ++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost! Paper beats rock.");
        computerScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost! Scissors beats paper.");
        computerScore ++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost! Paper beats rock.");
        computerScore ++;
    }
    else if (humanChoice ===computerChoice) {
        console.log("It's a tie! You both picked the same one.")
    }
    else {
        console.log("Invalid choice.")
    } 
}

playGame();


