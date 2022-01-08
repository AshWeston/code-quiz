var questions = [
  {
    title: "What does HTML stand for?",
    options: [
      "Home tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    solution: "Hyper Text Markup Language",
  },
  {
    title: "What is NOT a JavaScript Data Type",
    options: ["Cascade", "Number", "String", "Boolean"],
    solution: "Cascade",
  },
  {
    title: "You should save HTML files with which file extension?",
    options: [".htm", ".index", ".webpage", ".html"],
    solution: ".html",
  },
  {
    title: "An array is?",
    options: ["Shapes", "Sizes", "Lists of Data", "Options"],
    solution: "Lists of Data",
  },
  {
    title: "The following code will:      x++;",
    options: [
      "Add 1 to the previous value of y",
      "Add 1 to the previous value of x",
      "Subtract 1 from the previous value of x",
      "Give an error message",
    ],
    solution: "Add 1 to the previous value of x",
  },
];
//variables

var startButtonEl = document.getElementById("begin-start"); //camelcase
var startScreenEl = document.getElementById("start-screen");
var timerEl = document.getElementById("timer");
var time = 60;
var timerId;
var answerEl = document.getElementById("answer");
var quizBoxEl = document.getElementById("questions");
var questionIndex = 0;
var titleEl = document.getElementById("title");
var optionsEl = document.getElementById("options");
var scorePageEl = document.querySelector("#score");
var scoreAreaEl = document.querySelector("#scoreArea");
var submitBtn = document.getElementById("submit-button");
var initials = document.querySelector("#initials");
// var viewHighScores = document.getElementById("viewhighscores");
var highScoreEl = document.querySelector("#highScores");

// event listener in our start quiz button to start quiz//
//when event listener runs we want to startQuiz function??
function startQuiz() {
  //hide infobox///
  startScreenEl.setAttribute("class", "invisible");
  // viewHighScores.setAttribute("class", "invisible");
  //show first question//
  //start timer//
  timerId = setInterval(tick, 1000);
  timerEl.textContent = `Time: ${time}`;
  showQuestions();
}

function tick() {
  time--;
  timerEl.textContent = `Time: ${time}`;
  if (time <= 0) {
    endQuiz();
  }

  // if time less or equal to 0 run an endquiz function//
}

startButtonEl.addEventListener("click", startQuiz);

// function showQuestions ()//shows questions
function showQuestions() {
  titleEl.innerHTML = "";
  optionsEl.innerHTML = "";
  var question = questions[questionIndex];
  quizBoxEl.setAttribute("class", "visible");
  var questionTitle = question.title;
  titleEl.textContent = questionTitle;

  for (var i = 0; i < question.options.length; i++) {
    //create a button
    var choiceBtn = document.createElement("button");
    //add the button text content as the specific choice
    choiceBtn.textContent = question.options[i];
    //add event listeners to these buttons
    choiceBtn.addEventListener("click", checkAnswer);
    //button needs to be added to html
    optionsEl.appendChild(choiceBtn);
  }
}

function checkAnswer() {
  var userAnswer = this.textContent;
  if (userAnswer === questions[questionIndex].solution) {
    document.querySelector("#answer").textContent =
      "Your previous answer was correct!";
  } else if (userAnswer != questions[questionIndex].solution) {
    time = time - 10; //reduce time by 10 seconds for every incorrect answer
    document.querySelector("#answer").textContent =
      "Your previous answer was incorrect!";
  }
  //if question Index is more than the length of the questions or the timer gets to 0, call endQuiz else Show Questions.
  questionIndex++;
  if (time <= 0) {
    endQuiz();
  }
  if (questionIndex >= questions.length) {
    endQuiz();
  }
  //if question Index is more than the length of the questions
  //call endQuiz()
  //else
  else showQuestions();
}

function endQuiz() {
  clearInterval(timerId);
  displayScore();
  // quizBoxEl.setAttribute("class", "invisible");
  //hide the question el
  //show the highscore submission el
  // scorePageEl.setAttribute("class", "visible");
  // submitBtn.addEventListener ("click", showScores)

  // submitBtn.addEventListener("click", viewHighScores);
}

// function showSolution ()//shows correct answer

///

function displayScore() {
  timerEl.textContent = "You are all done!";
  quizBoxEl.replaceWith(scorePageEl);
  scorePageEl.setAttribute("class", "visible");
  scoreAreaEl.innerText = "Final Score:" + time;
  // Create an input element for initials
  initTextEl = document.createElement("input");
  initTextEl.setAttribute("id", "initials-input");
  initTextEl.setAttribute("type", "text");
  initTextEl.setAttribute("name", "initials");
  initTextEl.setAttribute("placeholder", "Enter Initials here");
}

// initials.appendChild(initTextEl);

//create submit botton element
