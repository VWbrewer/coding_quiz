var timeEl = document.querySelector("#time");
var mainEl = document.querySelector("#main");
var startButton = document.querySelector("#start");
var timesUp = document.querySelector("#timesUp");

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click") function () {

// The init function is called when the page loads 
function init() {
  startGame();
  getQuestions();
}




// The startGame function is called when the start button is clicked
function startGame() {

  timerLeft = 105;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderAnswers()
  startTimer()
}




// Timer that counts down from 105
function countdown() {
    var timeLeft = 105;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        
        // Set the `textContent` of `timerEl` to show the remaining seconds
        
        timerEl.textContent = timeLeft + ' seconds remaining';
        
        
        // Decrement `timeLeft` by 1
        
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }








  var questions = [
    {
      question: "",
      
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
      
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
      
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
      
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
     
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
    
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
      
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    },
    {
      question: "",
      
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      correct: "",
    }
  ];





























































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

