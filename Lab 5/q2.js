
const choices = ["rock", "paper", "scissors"];
let playerChoice = choices[Math.floor(Math.random() * choices.length)];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
let resultMessage;
if (playerChoice === computerChoice) {
  resultMessage = "It's a tie!";
} else if (
  (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")
) {
  resultMessage = "You win!";
} else {
  resultMessage = "Computer wins!";
}
console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(resultMessage);