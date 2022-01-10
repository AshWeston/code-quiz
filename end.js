const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
finalScore.innerText = mostRecentScore;

initials.addEventListener("keyup", () => {});

saveHighScore = (e) => {
  e.preventDefault();
};

//disabled not working!!!! check this after
