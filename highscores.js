const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //get saved high scores

highScoresList.innerHTML = highScores
  .map((score) => {
    // creates new array with the results of highscores.
    return `<li class = "high-score"> ${score.name} - ${score.score} </li>`;
  })
  .join(""); //to make one string
