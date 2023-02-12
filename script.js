function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return array[i];
}
 
const compChoice = getComputerChoice();
const playerChoice = "ROCK";

function playRound(playerChoice, compChoice) {
    return (playerChoice.toLowerCase() == "rock" && compChoice == "scissors") ? "You Win! Rock beats scissors!"
    : (playerChoice.toLowerCase() == "paper" && compChoice == "rock") ? "You Win! Paper beats rock!"
    : (playerChoice.toLowerCase() == "scissors" && compChoice == "paper") ? "You Win! Scissors beats paper!"
    : (playerChoice.toLowerCase() == "scissors" && compChoice == "rock") ? "You Lose! Rock beats scissors!"
    : (playerChoice.toLowerCase() == "rock" && compChoice == "paper") ? "You Lose! Paper beats rock!"
    : (playerChoice.toLowerCase() == "paper" && compChoice == "scissors") ? "You Lose! Scissors beats paper!"
    : "I'ts a tie! try again!";
}

console.log(playRound(playerChoice, compChoice));