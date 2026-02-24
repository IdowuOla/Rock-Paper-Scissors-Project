
//Logic for computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
  
    if (randomNum === 0) return "rock";
    if (randomNum === 1) return "paper";
    return "scissors";
  }
  
  // Logic for human choice
  function getHumanChoice(choice) {
    return choice.toLowerCase();
  }
  
//Score Variabled
    let humanScore = 0;
    let computerScore = 0;
  
    //Logic to play a single round
    function playRound(humanChoice, computerChoice) {

      const resultDiv = document.getElementById("result");
      const scoreDiv = document.getElementById("score");
      const winnerDiv = document.getElementById("winner");

      humanChoice = humanChoice.toLowerCase();
  
      if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a draw! You both chose ${humanChoice}.`;
        return;
      }
  
      const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");
  
      if (humanWins) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      } else {
        computerScore++;
        resultDiv = `You lose! ${computerChoice} beats ${humanChoice}.`;
      }

      scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

      if (humanScore === 5) {
        winnerDiv.textContent = "You win the game!";
        disableButtons();
      } else if (computerScore === 5) {
        winnerDiv.textContent = "Computer win the game!";
        disableButtons();
      }
    }

    function disableButtons() {
      document.getElementById("btn-rock").disabled = true;
      document.getElementById("btn-paper").disabled = true;
      document.getElementById("btn-scissors").disabled = true;
    }
    document.getElementById("btn-rock").addEventListener("click",function() {
      playRound(getHumanChoice("rock"), getComputerChoice());
    });
    document.getElementById("btn-paper").addEventListener("click", function() {
      playRound(getHumanChoice("paper"), getComputerChoice());
    });
    document.getElementById("btn-scissors").addEventListener("click", function() {
      playRound(getHumanChoice("scissors"), getComputerChoice());
   });

   //Reset

   function resetGame() {
    humanScore = 0;
    computerScore = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "You: 0 | Computer: 0";
    document.getElementById("winner").textContent = "";

    document.getElementById("btn-rock").disabled = false;
    document.getElementById("btn-paper").disabled = false;
    document.getElementById("btn-scissors").disabled = false;
   }
   document.getElementById("btn-reset").addEventListener("click", resetGame)
  
    // Play 5 rounds
    //for (let round = 1; round <= 5; round++) {
      //console.log(`--- Round ${round} ---`);
  
     // const humanSelection = getHumanChoice();
     // const computerSelection = getComputerChoice();
  
     // playRound(humanSelection, computerSelection);
  
      //console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    //}
  
    // Final Answer 
    //console.log("--- Final Answer ---");
    //if (humanScore > computerScore) {
     // console.log("You win the game!");
   // } else if (humanScore < computerScore) {
      //console.log("Computer wins the game!");
   // } else {
    //  console.log("The game is a tie!");
   // }
  //}
  
  // start the game
  //playGame();
  