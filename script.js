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

let getComputerChoice = ['rock', 'paper', 'scissors']; 
let randomComputerChoice = Math.floor(Math.random() * getComputerChoice.length);
console.log(getComputerChoice[randomComputerChoice]);

let getUserChoice = prompt("Rock, Paper or Scissors?");
let cleanUserChoice = getUserChoice.toLowerCase();
console.log(cleanUserChoice);

