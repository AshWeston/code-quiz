var questions = [ 
    {
        title: "What does HTML stand for?",
        options: ["a", "b", "c", "d"],
        solution: "b"

// fill these in later//
    },
    {
        title: "What does HTML stand for?",
        options: ["a", "b", "c", "d"],
        solution: "b"


    },

]
//variables

var startButtonEl =  document.getElementById ("begin-start"); //camelcase
var startScreenEl = document.getElementById ("start-screen");
var timerEl = document.getElementById("timer");
var time = 10;
var timerId;

// event listener in our start quiz button to start quiz//
//when event listener runs we want to startQuiz function??
function startQuiz () {
    //hide infobox///
    startScreenEl.setAttribute ("class", "invisible");
    //show first question//
    //start timer//
    timerId = setInterval(tick , 1000 );
    timerEl.textContent = time

}

function tick(){
    time--;
    timerEl.textContent = time;
// if time less or equal to 0 run an endquiz function//
}

startButtonEl.addEventListener ("click", startQuiz)

