function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return array[i];
}

function getPlayerChoice() {
    let playerInput = prompt("Chose rock, paper, or scissors");
    let result = playerInput.toLowerCase();
    return result;
}

const compChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

let playerScore = 0;
let compScore = 0;

function playRound(playerChoice, compChoice) {
    playerChoice.toLowerCase();
      if (playerChoice == "rock" && compChoice == "scissors") {
        playerScore ++;
        return "You Win! Rock beats scissors!"; 
    } else if (playerChoice == "paper" && compChoice == "rock") {
        playerScore++;
        return "You Win! Paper beats rock!";
    } else if (playerChoice == "scissors" && compChoice == "paper") { 
        playerScore++;
        return "You Win! Scissors beats paper!"; 
    } else if (playerChoice == "scissors" && compChoice == "rock") {
        compScore++;
        return "You Lose! Rock beats scissors!";
    } else if (playerChoice == "rock" && compChoice == "paper") {
        compScore++;
        return "You Lose! Paper beats rock!";
    } else if (playerChoice == "paper" && compChoice == "scissors") { 
        compScore++;
        return "You Lose! Scissors beats paper!";
    } else if (playerChoice == compChoice) { 
        return "I'ts a tie! try again!"; 
    } else {
        return "Enter valid selection! Refresh page.";
    }
} 


