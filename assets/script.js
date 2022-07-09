let player = '';

const stats = {
  wins: 0,
  losses: 0,
  ties: 0,
}

document.getElementById('startButton').addEventListener('click', playerChooses);
showStats();

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

function compChooses() {
  let compOptions=['R', 'P', 'S'];
  let rando = Math.floor(Math.random() * compOptions.length);
  let computer = compOptions[rando]
  console.log("compChooses:", computer);
  alert ("Computer chooses " + computer)


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