const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
var filled = 0;
let player = true;
const cell = document.getElementById('cell');


function clickxy(e){
    var whichcell = e.target;
    if (player) {
        whichcell.innerText = "X";
        }
        else {
            whichcell.innerText= "O";
        }
        player = !player; 
        if (filled == 9){
            alert("Game Over");
        } 
}

s1.addEventListener("click", clickxy)

s2.addEventListener("click", clickxy)

s3.addEventListener("click", clickxy)

s4.addEventListener("click", clickxy)

s5.addEventListener("click", clickxy)

s6.addEventListener("click", clickxy)

s7.addEventListener("click", clickxy)

s8.addEventListener("click", clickxy)

s9.addEventListener("click", clickxy)





