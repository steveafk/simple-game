let gameBox = document.getElementById("gameBox");
let timeDisplay = document.getElementById("time");
let restartBtn = document.getElementById("restartBtn");

let startTime;
let clickable = false;
let timeout;

startGame();

function startGame() {
    gameBox.textContent = "Wait for green...";
    gameBox.style.background = "#a51a1a";
    timeDisplay.textContent = "--";
    clickable = false;

    // Random time before turning green (1–3 seconds)
    timeout = setTimeout(() => {
        gameBox.style.background = "#2ecc71";
        gameBox.textContent = "CLICK!";
        startTime = Date.now();
        clickable = true;
    }, Math.random() * 2000 + 1000);
}

gameBox.addEventListener("click", () => {
    if (!clickable) {
        // clicked too early
        clearTimeout(timeout);
        gameBox.textContent = "Too early!";
        gameBox.style.background = "#e74c3c";
        return;
    }
    
    let reactionTime = Date.now() - startTime;
    timeDisplay.textContent = reactionTime;
    clickable = false;
    gameBox.textContent = "Nice!";
});

restartBtn.addEventListener("click", startGame);
