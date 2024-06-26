console.log("Hello world!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3);

  // console.log(choices + " number");

  if (choices == 0) {
    return "Rock";
  } else if (choices == 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

// getComputerChoice();

function getHumanChoice() {
  let humanInput = prompt("Enter your choice, Rock, Paper or Scissor");

  if (humanInput.toLowerCase() === "rock") {
    return "Rock";
  } else if (humanInput.toLowerCase() === "paper") {
    return "Paper";
  } else if (humanInput.toLowerCase() === "scissor") {
    return "Scissor";
  } else {
    return "Invalid Input";
  }
}

// getHumanChoice();
// console.log(getComputerChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    humanScore++;
    computerScore++;
    console.log(humanScore, computerScore + " humanScore & computerScore");

    return `It's a tie, ${humanChoice} and ${computerChoice} are same`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissor") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissor" && computerChoice === "Paper")
  ) {
    humanScore++;
    // console.log(humanScore + " humanScore");
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    // console.log(computerScore + " computerScore");
    return `You loose! ${computerChoice} beats ${humanChoice}`;
  }
}

let humanSelection;
let computerSelection;

function playGame() {
  // alert(playRound(humanSelection, computerSelection));

  for (let i = 1; i <= 5; i++) {
    alert(`Round ${i} begins`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    alert(playRound(humanSelection, computerSelection));
    alert(
      `Human score is : ${humanScore}` +
        "\n" +
        `Computer Score is : ${computerScore}`
    );
  }

  let finalScore =
    humanScore == computerScore
      ? `No one wins! human score ${humanScore} and computer score ${computerScore} are same`
      : humanScore > computerScore
      ? `Human wins! with a score of ${humanScore}`
      : `Computer wins! with a score of ${computerScore}`;
  // // alert("Total human score : " + humanScore  );
  // // alert("Total computer score : " + computerScore);

  alert(finalScore);

  console.log(humanSelection + " human selection");
  console.log(computerSelection + " computer selection");
}

playGame();
