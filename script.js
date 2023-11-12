// ask computer what it selects
// ask user what they select
// transform user select in lowercase
// IF compare computer and user select for computer win
//   display you loose
// IFELSE compare computer and user select for user win
//   display you win
// ELSE compare computer and user select for equality
//   display equality
// re-run

function game() {

    let roundCounter = 1;
    let playerScore = 0;
    let computerScore = 0;

    console.log("!! Match " + matchCounter + " !!")

    for (let i = 5; i >= roundCounter; roundCounter++) {

        function compareChoices() {
            
            let getComputerChoice = ['rock', 'paper', 'scissors']; 
            let randomComputerChoice = String(Math.floor(Math.random() * getComputerChoice.length));
            let computerSelection = getComputerChoice[randomComputerChoice];
            
            let getUserChoice = prompt("Rock, Paper or Scissors?") || "";
            let playerSelection = getUserChoice.toLowerCase();
            
            if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                alert('Your choice "' + playerSelection + '" does not exist');
                alert("This round doesn't count.");
                roundCounter -= 1;
            }
            else if (computerSelection == playerSelection) {
                alert("Equality! You both chose " + computerSelection);
            }
            else if (computerSelection == "rock" && playerSelection == "scissors" ||
                     computerSelection == "paper" && playerSelection == "rock" ||
                     computerSelection == "scissors" && playerSelection == "paper") {
                computerScore += 1 ;
                alert("You lost... " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + "...");
            }
            else {
                alert("You won! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + "!");
                playerScore += 1;
            }
        }
        compareChoices();
        console.log("Round "+ roundCounter + " — Player: "+ playerScore + " points — Computer: " + computerScore + " points.");
    }

    if (computerScore > playerScore) {
        console.log("The computer won " + computerScore + " to " + playerScore)
        alert("Unfortunately, you lost this match " + playerScore + " to " + computerScore + "...")
    }
    else if (playerScore > computerScore) {
        console.log("You won " + playerScore + " to " + computerScore)
        alert("Congratulations! You won this match " + playerScore + " to " + computerScore + "!")
    }
    else {
        console.log("Equality " + computerScore + " to " + playerScore)
        alert("This match ended with an equality: " + playerScore + " to " + computerScore + ".")
    }
}

let rematch = true;
let matchCounter = 1;
game();

while (rematch) {
    if (confirm("Do you want a rematch?") == true) {
        matchCounter++ ;
        game();
    }
    else {
        alert("Thank you for playing!");
        rematch = false;
    }
}