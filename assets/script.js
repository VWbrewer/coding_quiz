var timerEl = document.querySelector("#timer");
var startButtonEl = document.querySelector("#start");
var highScoreButton = document.querySelector("#highScore-button");
var scoreEl = document.querySelector("#score");
const questionEl = document.querySelector("#questions");
const answersEl = document.querySelector("#answers");
var timeInterval 


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", function() { 
});

startButton.addEventListener("click")
function () {
  timerLeft = 105;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + 'seconds remaining';
      // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + 'second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        endQuiz();
      }
    }, 1000);
}


  
  highScoreButton.addEventListener("click", function () {  
  });




  var quizData = [
    {
      question: "What is the file name for the styling on your code?",
      answers: [
      { A: "README.md", correct: false},
      { B: "style.act", correct: false},
      { C: "style.css", correct: true},
      { D: "scrip.js", correct: false},
      ]
    },
    {
      question: "How many heading tags can you have?",
      answers: [
      { A: "6", correct: true},
      { B: "10", correct: false},
      { C: "3", correct: false},
      { D: "12", correct: false},
      ]
    },
    {
      question: "In javascript what does ++ mean?",
      answers: [
      { A: "Add these two variables", correct: false},
      { B: "Move to next line", correct: false},
      { C: "Increase numbers", correct: true},
      { D: "Addition", correct: false},
      ]
    },
    {
      question: "In javascript what does Logical operator || mean?",
      answers: [
      { A: "Logical or", correct: true},
      { B: "Logical plus", correct: false},
      { C: "Logical space", correct: false},
      { D: "Logical separated", correct: false},
      ]
    },
    {
      question: "Within your HTML what does the <p> element represent?",
      answers: [
      { A: "Picture", correct: false},
      { B: "Piece", correct: false},
      { C: "Placeholder", correct: false},
      { D: "Paragraph", correct: true},
      ]
    },
    {
      question: "Outputting data with alert() does what?",
      answers: [
      { A: "Make the date flash on the screen", correct: false},
      { B: "Puts data in a box in the browser window", correct: true},
      {C: "Makes the site have a warning", correct: false},
      { D: "Adds alarm sound the data", correct: false},
      ]
    },
    {
      question: "In javascript what does * mean?",
      answers: [
      { A: "Multiplication", correct: true},
      { B: "Focus", correct: false},
      { C: "Shift Up", correct: false},
      { D: "Modulus", correct: false},
      ]
    },
  ]

const questionsEl = document.querySelectorAll('h3')
const answerEls = document.querySelector('.answer');

const A_text = document.getElementById('A_text');
const B_text = document.getElementById('B_text');
const C_text = document.getElementById('C_text');
const D_text = document.getElementById('D_text');
const submitButton = document.getElementById('button');


let currentQuestion = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselected();
    const currentQuizData = quizData[currentQuestion];
    questionsEl.innerText = currentQuizData.question;
    A_text.innerText = currentQuizData.A;
    B_text.innerText = currentQuizData.B;
    C_text.innerText = currentQuizData.C;
    D_text.innerText = currentQuizData.D;
}



// These functions are used by init
function getRight() {
  // Get stored value from client storage, if it exists
  var storedRight = localStorage.getItem("RightCount");
  // If stored value doesn't exist, set counter to 0
  if (storedRight === null) {
    RightCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    RightCounter = storedRight;
  }
  //Render win count to page
  right.textContent = RightCounter;
}

function getWrong() {
  var storedWrong = localStorage.getItem("wrongCount");
  if (storedWrong === null) {
    wrongCounter = 0;
  } else {
    wrongCounter = storedWrong;
  }
  wrong.textContent = wrongCounter;
}




// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}



// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}






// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  rightCounter = 0;
  wrongCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setRight()
  setWrong()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

