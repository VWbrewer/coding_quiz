var scoreStorage = localStorage.getItem("scores");
const highScoreEl = document.querySelector("#highScoreDis").textContent = "You got: " + scoreStorage + "!";
const highScores = JSON.parse(localStorage.getItem("scores")) || [];