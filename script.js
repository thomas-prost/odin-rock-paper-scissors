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

const roundResult = document.querySelector(".roundResult");
const roundPara = document.querySelector(".roundPara");

roundResult.style.cssText = "background-color: black; display: block;";
roundPara.style.cssText = "color: white";
roundPara.textContent = "Please select one of the options.";

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
    
    let getComputerChoice = ['rock', 'paper', 'scissors']; 
    let randomComputerChoice = String(Math.floor(Math.random() * getComputerChoice.length));
    let computerSelection = getComputerChoice[randomComputerChoice];
    
    if (computerSelection == playerSelection) {
        roundResult.style.cssText = "background-color: grey; display: block;";
        roundPara.style.cssText = "color: white";
        roundPara.textContent = "Equality! You both chose " + computerSelection;
        roundNumber += 1;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper") {
        computerScore += 1 ;
        roundResult.style.cssText = "background-color: brown; display: block;";
        roundPara.style.cssText = "color: white";
        roundPara.textContent = "You lost... " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + "...";
        roundNumber += 1;
    }
    else {
        roundResult.style.cssText = "background-color: green; display: block;";
        roundPara.style.cssText = "color: white";
        roundPara.textContent = "You won! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + "!";
        playerScore += 1;
        roundNumber += 1;
    }
    
    updateScores();
    
    function resetScore() {
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
        matchNumber += 1;
    };
    
    const matchResult = document.querySelector(".matchResult");
    const matchPara = document.querySelector(".matchPara");

    const matchHistory = document.createElement("div");
    
    if (playerScore == 5) {
        matchPara.classList.add("victory");
        matchPara.textContent = "Match " + matchNumber + ": You won " + playerScore + " to " + computerScore + "!";
        matchResult.style.cssText = "display: block";
        matchHistory.classList.add("matchPara", "counter");
        matchResult.insertBefore(matchHistory, matchPara);
        resetScore();
    } else if (computerScore == 5) {
        matchPara.classList.add("defeat");
        matchPara.textContent = "Match " + matchNumber + ": You lost " + playerScore + " to " + computerScore + "...";
        matchResult.style.cssText = "display: block";
        matchHistory.classList.add("matchPara", "counter");
        matchResult.insertBefore(matchHistory, matchPara);
        resetScore();
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