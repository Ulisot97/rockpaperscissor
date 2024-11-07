const validOptions = ["Paper", "Rock", "Scissor"];

let exit = false;

let playerChoice;

let playerScore = 0;
let computerScore = 0;

function checkPlayerChoice(playerChoice) {
  for (let i of validOptions) {
    if (i === playerChoice) return true;
  }
  return false;
}

function getComputerChoise() {
  let max = 2;
  let min = 0;
  return validOptions[Math.floor(Math.random() * (max - min + 1) + min)];
}

function playerMove() {
  playerChoice = prompt("Choose Paper Rock or Scissor");
  while (!checkPlayerChoice(playerChoice)) {
    alert("Invalid option");
    playerChoice = prompt("Choose Paper Rock or Scissor");
  }
  return playerChoice;
}

function validPlayAgain() {
  let valid = false;
  let yn;
  while (!valid) {
    yn = prompt("¿Do you want to play again? y/n");
    if (yn === "y" || yn === "n") valid = true;
    else alert("Choose y or n");
  }
  return yn;
}

function play() {
  if (playerChoice === "Paper" && getComputerChoise() === "Paper")
    alert("No winner");
  if (playerChoice === "Rock" && getComputerChoise() === "Paper") {
    alert("¡Computer wins!");
    computerScore++;
  }
  if (playerChoice === "Scissor" && getComputerChoise() === "Paper") {
    alert("¡Player wins!");
    playerScore++;
  }
  if (playerChoice === "Paper" && getComputerChoise() === "Rock") {
    alert("¡Player wins!");
    playerScore++;
  }
  if (playerChoice === "Rock" && getComputerChoise() === "Rock")
    alert("No winner");
  if (playerChoice === "Scissor" && getComputerChoise() === "Rock") {
    alert("¡Computer wins!");
    computerScore++;
  }
  if (playerChoice === "Paper" && getComputerChoise() === "Scissor") {
    alert("¡Computer wins!");
    computerScore++;
  }
  if (playerChoice === "Rock" && getComputerChoise() === "Scissor") {
    alert("¡Player wins!");
    playerScore++;
  }
  if (playerChoice === "Scissor" && getComputerChoise() === "Scissor")
    alert("¡No winner!");
}

playerChoice = playerMove();
play();

while (!exit) {
  if (validPlayAgain() === "y") {
    playerChoice = playerMove();
    play();
  } else exit = true;
}

alert("GoodBye");
