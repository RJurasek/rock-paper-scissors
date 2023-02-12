function getComputerChoice() {
  let array = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return array[i];
}

console.log(getComputerChoice())