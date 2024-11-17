const validOptions = ["Paper", "Rock", "Scissor"];
let exit = false;
let playerChoice = "";
let computerChoise = "";
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const btnPlay = document.getElementById("btnPlay");
const result = document.getElementById("result");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

pScore.textContent = `${playerScore}`;
cScore.textContent = `${computerScore}`;

function getComputerChoise() {
  let max = 2;
  let min = 0;
  return validOptions[Math.floor(Math.random() * (max - min + 1) + min)];
}

function play(playerChoice) {
  let computerChoise = getComputerChoise();
  if (
    (playerChoice === "Paper" && computerChoise === "Paper") ||
    (playerChoice === "Rock" && computerChoise === "Rock") ||
    (playerChoice === "Scissor" && computerChoise === "Scissor")
  ) {
    result.textContent = "No winner";
    console.log("No winner");
  }
  if (
    (playerChoice === "Scissor" && computerChoise === "Paper") ||
    (playerChoice === "Rock" && computerChoise === "Scissor") ||
    (playerChoice === "Paper" && computerChoise === "Rock")
  ) {
    result.textContent = "Player wins";
    console.log("Player wins");
    playerScore++;
  }
  if (
    (playerChoice === "Rock" && computerChoise === "Paper") ||
    (playerChoice === "Scissor" && computerChoise === "Rock") ||
    (playerChoice === "Paper" && computerChoise === "Scissor")
  ) {
    result.textContent = "Computer wins";
    console.log("Computer wins");
    computerScore++;
  }
  pScore.textContent = `${playerScore}`;
  cScore.textContent = `${computerScore}`;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerChoice = btn.textContent;
    play(playerChoice);
    playerChoice = "";
  });
});
