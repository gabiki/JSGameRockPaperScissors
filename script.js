let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let resultButton = document.getElementById("result");
let randomButton = document.getElementById("random");
let refreshButton = document.getElementById("refresh");
let result;
let possibleResults = [0, 1, 2];
let rockClicked = null;
let paperClicked = null;
let scissorsClicked = null;
let chosenRandomValue;
let chosenRandom = [];

resultButton.disabled = true;

function clickR() {
    rockButton.style.backgroundColor = "white";
    scissorsButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    paperButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    resultButton.disabled = false;
    rockClicked = "R";
    chosenRandom.push(possibleResults[Math.round(Math.random() * 2)]);
    if (chosenRandom[chosenRandom.length - 1] === 0) {
        chosenRandomValue = "ROCK";
    } else if (chosenRandom[chosenRandom.length - 1] === 1) {
        chosenRandomValue = "PAPER";
    } else if (chosenRandom[chosenRandom.length - 1] === 2) {
        chosenRandomValue = "SCISSORS";
    }
    result = chosenRandomValue;
}
function clickP() {
    paperButton.style.backgroundColor = "white";
    scissorsButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    rockButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    resultButton.disabled = false;
    paperClicked = "P";
    chosenRandom.push(possibleResults[Math.round(Math.random() * 2)]);
    if (chosenRandom[chosenRandom.length - 1] === 0) {
        chosenRandomValue = "ROCK";
    } else if (chosenRandom[chosenRandom.length - 1] === 1) {
        chosenRandomValue = "PAPER";
    } else if (chosenRandom[chosenRandom.length - 1] === 2) {
        chosenRandomValue = "SCISSORS";
    }
    result = chosenRandomValue;
}
function clickS() {
    scissorsButton.style.backgroundColor = "white";
    paperButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    rockButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    resultButton.disabled = false;
    scissorsClicked = "S";
    chosenRandom.push(possibleResults[Math.round(Math.random() * 2)]);
    if (chosenRandom[chosenRandom.length - 1] === 0) {
        chosenRandomValue = "ROCK";
    } else if (chosenRandom[chosenRandom.length - 1] === 1) {
        chosenRandomValue = "PAPER";
    } else if (chosenRandom[chosenRandom.length - 1] === 2) {
        chosenRandomValue = "SCISSORS";
    }
    result = chosenRandomValue;
}

function delayedWinner() {
    resultButton.disabled = true;
    resultButton.innerText = "...";
    setTimeout(function winner() {
        resultButton.innerText = "...";
        randomButton.innerText = result;
        setTimeout(function () {
            if (rockClicked === "R") {
                rockClicked = null;
                if (randomButton.innerText === "ROCK") {
                    resultButton.innerText = "DRAW :)";
                    resultButton.style.backgroundColor = "rgb(245, 182, 171)";
                } else if (randomButton.innerText === "PAPER") {
                    resultButton.innerText = "YOU LOST :(";
                    resultButton.style.backgroundColor = "rgb(65, 0, 88)";
                } else if (randomButton.innerText === "SCISSORS") {
                    resultButton.innerText = "YOU WON :)";
                    resultButton.style.backgroundColor = "rgb(183, 215, 255)";
                }
                result = [];
                resultButton.disabled = true;
            } else if (paperClicked === "P") {
                paperClicked = null;
                if (randomButton.innerText === "ROCK") {
                    resultButton.innerText = "YOU WON :)";
                    resultButton.style.backgroundColor = "rgb(183, 215, 255)";
                } else if (randomButton.innerText === "PAPER") {
                    resultButton.innerText = "DRAW :)";
                    resultButton.style.backgroundColor = "rgb(245, 182, 171)";
                } else if (randomButton.innerText === "SCISSORS") {
                    resultButton.innerText = "YOU LOST :(";
                    resultButton.style.backgroundColor = "rgb(65, 0, 88)";
                }
                result = [];
                resultButton.disabled = true;
            } else if (scissorsClicked === "S") {
                paperClicked = null;
                if (randomButton.innerText === "ROCK") {
                    resultButton.innerText = "YOU LOST :(";
                    resultButton.style.backgroundColor = "rgb(65, 0, 88)";
                } else if (randomButton.innerText === "PAPER") {
                    resultButton.innerText = "YOU WON :)";
                    resultButton.style.backgroundColor = "rgb(183, 215, 255)";
                } else if (randomButton.innerText === "SCISSORS") {
                    resultButton.innerText = "DRAW :)";
                    resultButton.style.backgroundColor = "rgb(245, 182, 171)";
                }
                result = [];
                resultButton.disabled = true;
            }
        }, 600);
    }, 1000);
}

function refresh() {
    resultButton.disabled = true;
    resultButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    resultButton.innerText = "WHO WINS?";
    result = [];
    randomButton.innerText = "?";
    rockClicked = null;
    paperClicked = null;
    scissorsClicked = null;
    scissorsButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    paperButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
    rockButton.style.backgroundColor = "rgba(255,255,255, 0.3)";
}

rockButton.addEventListener("click", clickR);
paperButton.addEventListener("click", clickP);
scissorsButton.addEventListener("click", clickS);
resultButton.addEventListener("click", delayedWinner);
refreshButton.addEventListener("click", refresh);
// randomButton.addEventListener("click", ok);
