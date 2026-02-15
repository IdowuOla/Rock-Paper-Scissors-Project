
//Logic for computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
  
    if (randomNum === 0) return "rock";
    if (randomNum === 1) return "paper";
    return "scissors";
  }
  
  // Logic for human choice
  function getHumanChoice() {
    const choice = prompt("Enter Rock, Paper or Scissors:");
    return choice.toLowerCase();
  }
  
//Logic to play entire game
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    //Logic to play a single round
    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
  
      if (humanChoice === computerChoice) {
        console.log(`It's a draw! You both chose ${humanChoice}.`);
        return;
      }
  
      const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");
  
      if (humanWins) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      }
    }
  
    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
      console.log(`--- Round ${round} ---`);
  
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
  
      playRound(humanSelection, computerSelection);
  
      console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
  
    // Final Answer 
    console.log("--- Final Answer ---");
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (humanScore < computerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // start the game
  playGame();
  