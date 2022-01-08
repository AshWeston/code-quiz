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
var score = 60;

// event listener in our start quiz button to start quiz//
//when event listener runs we want to startQuiz function??
function startQuiz() {
  //hide infobox///
  startScreenEl.setAttribute("class", "invisible");
  //show first question//
  //start timer//
  timerId = setInterval(tick, 1000);
  timerEl.textContent = time;
  showQuestions();
}

function tick() {
  time--;
  timerEl.textContent = time;
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
  console.log(userAnswer);
  if (userAnswer === questions[questionIndex].solution) {
    console.log("correct answer");
    document.querySelector(".answer").textContent = "Correct Answer!";
  } else if (userAnswer != questions[questionIndex].solution) {
    console.log("wrong answer");
    document.querySelector(".answer").textContent = "Wrong Answer!";
  }

  //   if (time <= 0) {
  //     endQuiz();
  //   }
  // check user's answer
  //if it is wrong subtract time by 10
  // if time is 0 call endQuiz

  // change textcontent time
  questionIndex++;
  //if question Index is more than the length of the questions
  //call endQuiz()
  //else
  showQuestions();
}

function endQuiz() {
  clearInterval(timerId);
  //hide the question el
  //show the highscrore submission el
}

// function showSolution ()//shows correct answer
