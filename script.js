function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return array[i];
}
 let playerScore = 0;
 let compScore = 0;

const compChoice = getComputerChoice();
const playerChoice = prompt("Chose Rock, Paper, or Scissors.");

function game() {
  while (playerScore < 5 || compScore < 5);
  playRound();
  
}


function playRound(playerChoice, compChoice) {
      if (playerChoice.toLowerCase() == "rock" && compChoice == "scissors") {
        playerScore ++;
        return "You Win! Rock beats scissors!"; 
    } else if (playerChoice.toLowerCase() == "paper" && compChoice == "rock") {
        playerScore++;
        return "You Win! Paper beats rock!";
    } else if (playerChoice.toLowerCase() == "scissors" && compChoice == "paper") { 
        playerScore++;
        return "You Win! Scissors beats paper!"; 
    } else if (playerChoice.toLowerCase() == "scissors" && compChoice == "rock") {
        compScore++;
        return "You Lose! Rock beats scissors!";
    } else if (playerChoice.toLowerCase() == "rock" && compChoice == "paper") {
        compScore++;
        return "You Lose! Paper beats rock!";
    } else if (playerChoice.toLowerCase() == "paper" && compChoice == "scissors") { 
        compScore++;
        return "You Lose! Scissors beats paper!";
    } else if (playerChoice.toLowerCase() == compChoice) { 
        return "I'ts a tie! try again!"; 
    } else {
        return "Enter valid selection! Refresh page.";
    }
} 

console.log(playRound(playerChoice, compChoice));
console.log(playerScore);