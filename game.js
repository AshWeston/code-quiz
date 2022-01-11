const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); //creates array for choice text
const questionCounterText = document.getElementById("questionCounter");
const timerText = document.getElementById("score");
const timer = document.getElementById("timer");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 60; //also time
let timerID;
let questionCounter = 0;
let availableQuestions = [];

var MAX_QUESTIONS = 5;

let questions = [
  {
    question: "What does HTML stand for?",
    choice1: "Home tool Markup Language",
    choice2: "Hyper Text Markup Language",
    choice3: "Hyperlinks and Text Markup Language",
    choice4: "Hyper Tools Markup Language",
    answer: 2,
  },
  {
    question: "What is NOT a JavaScript Data Type",
    choice1: "Cascade",
    choice2: "Number",
    choice3: "String",
    choice4: "Boolean",
    answer: 1,
  },
  {
    question: "You should save HTML files with which file extension?",
    choice1: ".htm",
    choice2: ".index",
    choice3: ".webpage",
    choice4: ".html",
    answer: 4,
  },
  {
    question: "An array is?",
    choice1: "Shapes",
    choice2: "Sizes",
    choice3: "Lists of Data",
    choice4: "Options",
    answer: 3,
  },
  {
    question: "The following code will:      x++;",
    choice1: "Add 1 to the previous value of y",
    choice2: "Subtract 1 from the previous value of x",
    choice3: "Give an error message",
    choice4: "Add 1 to the previous value of x",
    answer: 4,
  },
];

//timer function
function tick() {
  score--;
  timer.textContent = `Time: ${score}`;
  if (score <= 0) {
    return window.location.assign("end.html");
  }
}

// Begins the Quiz//
startGame = () => {
  questionCounter = 0;
  score = 60;
  timerId = setInterval(tick, 1000);
  timer.textContent = `Time: ${score}`;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

//Move to Next Question, using text from array//
getNewQuestion = () => {
  if (availableQuestions.length === 0) {
    localStorage.setItem("mostRecentScore", score);
    //if no questions left,
    //go to end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  questionCounterText.innerText = ` ${questionCounter} / ${MAX_QUESTIONS}`; //update question counter as user clicks through
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"]; //will iterate through each choices, and get number from data-set
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false; //to allow for slight delay showing incorrect//correct answer
    acceptingAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; //ternary operator used to advise which class depending on answer

    if (classToApply === "incorrect") {
      //if incorrect answer, reduce score/time by 10
      score = score - 10;
    }

    selectedChoice.parentElement.classList.add(classToApply); //add in class to apply on selected choice container;
    // selectedChoice.parentElement.classList.remove (classToApply);
    //added classes in CSS to when user selects answer, either green for correct or red for incorrect applies
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  });
});

startGame();
