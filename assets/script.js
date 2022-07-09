let player = '';
document.getElementById('startButton').addEventListener('click', playerChooses);


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
readValue();
}

const stats = {
  wins: 0,
  losses: 0,
  ties: 0,
}
 
function createStats() {
  localStorage.setItem('wins', stats.wins);
  localStorage.setItem('losses', stats.losses);
  localStorage.setItem('ties', stats.ties);
}

function readValue() {
    var x = localStorage.getItem("mytime");
    document.getElementById("stats").innerHTML = x;
    var y = localStorage.getItem("losses");
    document.getElementById("stats").innerHTML = y;
    var z = localStorage.getItem("ties");
    document.getElementById("stats").innerHTML = z;
  }