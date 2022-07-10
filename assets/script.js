// player vaaiable
let player = '';

// stats object
const stats = {
  wins: 0,
  losses: 0,
  ties: 0,
}
// player presses shhot button and the game starts
document.getElementById('startButton').addEventListener('click', playerChooses);

// keeps stats updated on the mainpage
showStats();

// function for player input
function playerChooses() {
  let playerInput = prompt('Rock, Paper, or Scissors? Enter R, P, or S');
  player = playerInput.toUpperCase();
  console.log('playerInput', playerInput);
  console.log("player:", player);  
if ((player === 'R') || (player ==='P') || (player==='S')) {
  compChooses ();
}
else {
  alert('Choose a valid weapon!');
}
}

// function for the computer to make a random choise
function compChooses() {
  let compOptions=['R', 'P', 'S'];
  let rando = Math.floor(Math.random() * compOptions.length);
  let computer = compOptions[rando]
  console.log("compChooses:", computer);
  alert ("Computer chooses " + computer)

// let player know if they won and update the stats
if (player === computer) {
  alert('Tie game!');
  stats.ties++;
}
else if ((player === 'R' && computer === 'S') || (player=== 'P' && computer === 'R') || (player ==='S' && computer ==='P')) {
  alert('Player wins');
  stats.wins++
}
else {
  alert('Computer wins!');
  stats.losses++
}
console.log(stats);
createStats();
showStats();
}
 
// These two function create and update the stats from local storage
function createStats() {
  localStorage.setItem('wins', stats.wins);
  localStorage.setItem('losses', stats.losses);
  localStorage.setItem('ties', stats.ties);
}

function showStats() {
    stats.wins = localStorage.getItem("wins") ?? 0;
    document.getElementById("wins").innerHTML = 'Wins: ' + stats.wins;
    stats.losses = localStorage.getItem("losses") ?? 0;
    document.getElementById("losses").innerHTML = 'Losses: ' + stats.losses;
    stats.ties = localStorage.getItem("ties") ?? 0;
    document.getElementById("ties").innerHTML = 'Ties: ' + stats.ties;
  }