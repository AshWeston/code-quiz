const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = mostRecentScore;

initials.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !initials.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);
  console.log(highScores);
};
