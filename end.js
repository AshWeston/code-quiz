const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = mostRecentScore;

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score); //save highest to lowest score
  highScores.splice(5); //only save up to 5 high scores.
  localStorage.setItem("highScores", JSON.stringify(highScores)); //save as strin
  window.location.assign("index.html");
};
