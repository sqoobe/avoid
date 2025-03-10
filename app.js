const cells = Array.from(document.querySelectorAll(".cell"));
const enemyCells = cells.slice(0, 30);
const playerCells = cells.slice(30);
const scoreDisplay = document.querySelector(".score");

let dropCount, speed, score;

reset();

document.addEventListener("keydown", (e) => {
  //starts game when you press either left or right
  if (!dropCount) {
    startGame();
  }

  const player = document.querySelector(".player");
  //move right
  if (
    e.key === "ArrowRight" &&
    playerCells.includes(player.parentElement.nextElementSibling)
  ) {
    player.parentElement.nextElementSibling.appendChild(player);
  }
  //move left
  if (
    e.key === "ArrowLeft" &&
    playerCells.includes(player.parentElement.previousElementSibling)
  ) {
    player.parentElement.previousElementSibling.appendChild(player);
  }
});

//reset game
function reset() {
  dropCount = 0;
  speed = 1000;
  score = 0;
  scoreDisplay.innerHTML = "0";

  cells.forEach((cell) => (cell.innerHTML = ""));
  playerCells[1].innerHTML = '<div class="player"></div>';
}

//start game
function startGame() {
  reset();
  loop();
  console.log("starting new game");
}

function loop() {
  let stopGame = false;

  //addiing collision code

  if (stopGame) {
    alert("Your score: " + score + ". Close this window to play again.");
    reset();
  } else {
    dropCount++;
    setTimeout(loop, speed);
  }
}
