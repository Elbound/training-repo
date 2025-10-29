
function checkWin(){
    const cells = document.querySelectorAll('.ttt-cell');
    const kondisiMenang = [
        [0,1,2], [3,4,5], [6,7,8], // horizontal
        [0,3,6], [1,4,7], [2,5,8], //vertical
        [0,4,8], [2,4,6] //diagonal
    ];
    for (const p of kondisiMenang) {
        const [a, b, c] = p;
        if (cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}
function resetGame(){
    document.querySelectorAll('.ttt-cell').forEach(function(cell){
        cell.textContent = '';
        turn = 'O';
    });
}

document.addEventListener('DOMContentLoaded', function () {
  let turn = 'O';
  // console.log('turn:', turn);

  document.getElementById('ttt-reset-btn').addEventListener('click', function(){
    resetGame();
    turn = 'O';
  });

 
  document.addEventListener('click', function (e) {
    const cell = e.target.closest('.ttt-cell');
    if (!cell) return;                  
    if (cell.textContent.trim() !== '') return; 

    cell.textContent = turn;
    

    if (checkWin()) {
      setTimeout(() => {
        alert('winner : ' + (turn === 'O') ? 'X' : 'O');
        resetGame();
        return;
      });
      // alert('winner : ' + turn);
      // resetGame();
    }
    
    
    turn = (turn === 'O') ? 'X' : 'O';
    console.log('input:', cell, 'next :', turn);
  });
});


const dialog = document.getElementById('rick-roll')
const iframe = document.getElementById('yt-Iframe')
const vidURL = "https://www.youtube.com/embed/fC7oUOUEEi4?si=mY7cHHAmLxNBEfUE&autoplay=1"

document.getElementById('troll').addEventListener('click', function(){
  console.log("im clickin here")
  iframe.src = vidURL;
  dialog.style.visibility = "visible";
  dialog.style.opacity = "1"
});
function closeDialogue(){
  iframe.src = "";
  dialog.style.visibility = "hidden";
  dialog.style.opacity = "0"
}

const spinText = document.getElementById("troll-spin");
console.log(spinText)
spinText.addEventListener('click', function(){
  spinText.classList.toggle('spinning');
});

const flying = document.getElementById("troll-fly");
flying.addEventListener('click', ()=>{
  flying.style.top = Math.random() * 90+ 'vh';
  flying.style.left = Math.random() * 90 + 'vw';
});