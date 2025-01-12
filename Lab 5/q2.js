let choices = ["Rock", "Paper", "Scissors"];
let computerChoiceIndex = Math.floor(Math.random() * 3);
// let playerChoice = choices[playerChoiceIndex];
let computerChoice = choices[computerChoiceIndex];
let resultMessage;
function game(playerChoice){
if (playerChoice === computerChoice) {
  resultMessage = "It's a tie!";
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Paper" && computerChoice === "Rock") ||
  (playerChoice === "Scissors" && computerChoice === "Paper")
) {
  resultMessage = "You win!";
} else {
  resultMessage = "Computer wins!";
}
console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(resultMessage);}