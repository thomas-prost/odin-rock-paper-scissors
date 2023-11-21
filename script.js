// function game() {

let roundNumber = 1;
let matchNumber = 1;
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

const matchCounter = document.querySelector(".matchCounter");
const roundCounter = document.querySelector(".roundCounter");
const playerScoreCounter = document.querySelector(".playerScoreCounter");
const computerScoreCounter = document.querySelector(".computerScoreCounter");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
});
paper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
});
scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
});

function updateScores() {
    matchCounter.textContent = "Match " + matchNumber;
    roundCounter.textContent = "Round " + roundNumber;
    playerScoreCounter.textContent = "You have " + playerScore + " points.";
    computerScoreCounter.textContent = "The computer has " + computerScore + " points.";
}

updateScores();

// for (let i = 5; i >= roundCounter; roundCounter++) {

function playRound() {
    
    const roundResult = document.querySelector(".roundResult");
    const roundPara = document.querySelector(".roundPara");
    
    const matchResult = document.querySelector(".matchResult");
    const matchPara = document.querySelector(".matchPara");
    
    let getComputerChoice = ['rock', 'paper', 'scissors']; 
    let randomComputerChoice = String(Math.floor(Math.random() * getComputerChoice.length));
    let computerSelection = getComputerChoice[randomComputerChoice];
    
    if (computerSelection == playerSelection) {
        roundResult.style.cssText = "background-color: grey; display: block;";
        roundPara.textContent = "Equality! You both chose " + computerSelection;
        roundNumber += 1;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper") {
        computerScore += 1 ;
        roundResult.style.cssText = "background-color: brown; display: block;";
        roundPara.textContent = "You lost... " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + "...";
        roundNumber += 1;
    }
    else {
        roundResult.style.cssText = "background-color: green; display: block;";
        roundPara.textContent = "You won! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + "!";
        playerScore += 1;
        roundNumber += 1;
    }
    updateScores();
    
    if (playerScore == 5) {
        matchResult.style.cssText = "background-color: green; display: block;";
        matchPara.textContent = "Match " + matchNumber + ": You won " + playerScore + " to " + computerScore + "!";
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1
        matchNumber += 1;
    } else if (computerScore == 5) {
        matchResult.style.cssText = "background-color: brown; display: block;";
        matchPara.textContent = "Match " + matchNumber + ": You lost " + playerScore + " to " + computerScore + "...";
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
        matchNumber += 1;
    }
}








// playRound();
// console.log("Round "+ roundCounter + " — Player: "+ playerScore + " points — Computer: " + computerScore + " points.");


// if (computerScore > playerScore) {
//     console.log("The computer won " + computerScore + " to " + playerScore)
//     alert("Unfortunately, you lost this match " + playerScore + " to " + computerScore + "...")
// }
// else if (playerScore > computerScore) {
//     console.log("You won " + playerScore + " to " + computerScore)
//     alert("Congratulations! You won this match " + playerScore + " to " + computerScore + "!")
// }
// else {
//     console.log("Equality " + computerScore + " to " + playerScore)
//     alert("This match ended with an equality: " + playerScore + " to " + computerScore + ".")
// }


// let rematch = true;
// game();

// while (rematch) {
//     if (confirm("Do you want a rematch?") == true) {
//         matchCounter++ ;
//         game();
//     }
//     else {
//         alert("Thank you for playing!");
//         rematch = false;
//     }
// }