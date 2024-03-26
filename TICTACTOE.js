const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
const s6 = document.getElementById("s6");
const s7 = document.getElementById("s7");
const s8 = document.getElementById("s8");
const s9 = document.getElementById("s9");
const Responce = document.getElementById("Response");
const winners = document.getElementById("win");
let game = true;
let filled = 0;
let player1 = 0;
let player2 = 0;
let tie = 0;
let player = true;
const cell = document.getElementById("cell");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function clickxy(e) {
  check();
  if (!game) {
    console.log(game);
    console.log("Calling Reset");
    winners.innerText = "Player1: " + player1 +" Tie: " +tie+  " Player2: " + player2;
    reset(); 
    return;
  }
  if(allFilled() && game){
    tie+=1;
    winners.innerText = "Player1: " + player1 +" Tie: " +tie+  " Player2: " + player2;
    reset(); 
    return;
  }
  if (e.target.innerText == "") {
    if (player) {
      e.target.innerText = "X";
    } else {
      e.target.innerText = "O";
    }
    player = !player;
    console.log(e.target);
  }
}

/*
function winner(){
   if(player && !allFilled()) {
    Responce.innerText = "X wins";
   }
   else{
    Responce.innerText = "O wins";
   }
}*/
function allFilled() {
  if (
    s1.innerText != "" &&
    s2.innerText != "" &&
    s3.innerText != "" &&
    s4.innerText != "" &&
    s5.innerText != "" &&
    s6.innerText != "" &&
    s7.innerText != "" &&
    s8.innerText != "" &&
    s9.innerText != ""
  ) {
    console.log("Allfilled");
    return true;
  } else {
    return false;
  }
}
function reset() {
  filled = 0;
  game = true;
  s1.innerText = "";
  s2.innerText = "";
  s3.innerText = "";
  s4.innerText = "";
  s5.innerText = "";
  s6.innerText = "";
  s7.innerText = "";
  s8.innerText = "";
  s9.innerText = "";
}
function check() {
  if (s1.innerText == "X" && s2.innerText == "X" && s3.innerText == "X") {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s4.innerText == "X" &&
    s5.innerText == "X" &&
    s6.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s7.innerText == "X" &&
    s8.innerText == "X" &&
    s9.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s1.innerText == "X" &&
    s4.innerText == "X" &&
    s7.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s2.innerText == "X" &&
    s5.innerText == "X" &&
    s8.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s3.innerText == "X" &&
    s6.innerText == "X" &&
    s9.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s1.innerText == "X" &&
    s5.innerText == "X" &&
    s9.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    s3.innerText == "X" &&
    s5.innerText == "X" &&
    s7.innerText == "X"
  ) {
    console.log("Check");
    player1 +=1;
    game = false;
  } else if (
    /* Time for O*/
    s1.innerText == "O" &&
    s2.innerText == "O" &&
    s3.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s4.innerText == "O" &&
    s5.innerText == "O" &&
    s6.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s7.innerText == "O" &&
    s8.innerText == "O" &&
    s9.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s1.innerText == "O" &&
    s4.innerText == "O" &&
    s7.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s2.innerText == "O" &&
    s5.innerText == "O" &&
    s8.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s3.innerText == "O" &&
    s6.innerText == "O" &&
    s9.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s1.innerText == "O" &&
    s5.innerText == "O" &&
    s9.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  } else if (
    s3.innerText == "O" &&
    s5.innerText == "O" &&
    s7.innerText == "O"
  ) {
    console.log("Check");
    player2 +=1;
    game = false;
  }
  if (game == false) {
    console.log("Game Over!");
  }
}
restartButton.addEventListener("click", reset);
s1.addEventListener("click", clickxy);
s2.addEventListener("click", clickxy);
s3.addEventListener("click", clickxy);
s4.addEventListener("click", clickxy);
s5.addEventListener("click", clickxy);
s6.addEventListener("click", clickxy);
s7.addEventListener("click", clickxy);
s8.addEventListener("click", clickxy);
s9.addEventListener("click", clickxy);
