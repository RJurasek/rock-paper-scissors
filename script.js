

function playRound(playerChoice, compChoice) {
      if (playerChoice == "rock" && compChoice == "scissors") {
        playerScore ++; 
    } else if (playerChoice == "paper" && compChoice == "rock") {
        playerScore++;
    } else if (playerChoice == "scissors" && compChoice == "paper") { 
        playerScore++; 
    } else if (playerChoice == "scissors" && compChoice == "rock") {
        compScore++;
    } else if (playerChoice == "rock" && compChoice == "paper") {
        compScore++;
    } else if (playerChoice == "paper" && compChoice == "scissors") { 
        compScore++;
    } else if (playerChoice == compChoice) { 
        console.log("tie"); 
    } else { 
        console.log("Enter valid selection! Refresh page.");
    }
} 

function game() {
    for (i = 0; i < 5; i++){
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

        playRound(playerChoice, compChoice);
        console.log(`Player:${playerScore}`, `Computer:${compScore}`);
    }
  if (playerScore > compScore){
    return console.log(`You Win!! Score: ${playerScore} to ${compScore}!!`);
  } else if (compScore > playerScore) {
    return console.log(`You lost!! Score: ${playerScore} to ${compScore}!! try again.`);
  } else {
    return console.log(`It's a tie!! ${playerScore} to ${compScore}`)
  }
}

let playerScore = 0;
let compScore = 0;



game();

