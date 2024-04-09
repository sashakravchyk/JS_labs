let score = 0;
let timeLeft; 
let squareInterval;
let countdownInterval;
function startGame() {

  const difficulty = document.getElementById("difficulty").value;
  switch (difficulty) {
    case "easy":
      timeLeft = 10;
      break;
    case "medium":
      timeLeft = 5;
      break;
    case "hard":
      timeLeft = 3;
      break;
  }

  updateScore();
  updateTimer();
  clearInterval(squareInterval);
  clearInterval(countdownInterval); 
  document.getElementById('options').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('title').style.display = 'none';
  var selectedColor = document.getElementById('color').value;

  var square = document.getElementById('square');
  square.style.backgroundColor = selectedColor;

  moveSquare();
  startCountdown(); 
}


document.getElementById("square").addEventListener("click", function() {
  
  updateScore();
  moveSquare();
  clearInterval(countdownInterval); 

  const difficulty = document.getElementById("difficulty").value;
  switch (difficulty) {
    case "easy":
      timeLeft = 10;
      break;
    case "medium":
      timeLeft = 5;
      break;
    case "hard":
      timeLeft = 3;
      break;
    default:
      timeLeft = 15;
  }
  startCountdown(); 
});


function moveSquare() {
      const container = document.getElementById("container");
      const square = document.getElementById("square");
      const difficulty = document.getElementById("difficulty").value;
      const maxX = container.clientWidth - square.clientWidth;
      const maxY = container.clientHeight - square.clientHeight;
      
      
      let squareSize;
      if (difficulty === "easy") {
        squareSize = 50;
      } else if (difficulty === "medium") {
        squareSize = 35;
      } else if (difficulty === "hard") {
        squareSize = 20;
      }
      
      const newX = Math.floor(Math.random() * (maxX + 1));
      const newY = Math.floor(Math.random() * (maxY + 1));
      square.style.left = `${newX}px`;
      square.style.top = `${newY}px`;
      
      // Змінюємо розміри квадрата
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
    }


function updateScore() {
      document.getElementById("score").textContent = `Score: ${score}`;
}

function updateTimer() {
  document.getElementById("time-left").textContent = `Time Left for Click: ${timeLeft}`;
}

function startCountdown() {
  countdownInterval = setInterval(function() {
    timeLeft--;
    updateTimer();
    if (timeLeft < 0) {
      gameOver();
    }
  }, 1000); 
}

function gameOver() {
  alert("Час вийшов! Ви програли.");
  clearInterval(countdownInterval); 
  document.getElementById('options').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('title').style.display = 'block';
  
}

document.getElementById("square").addEventListener("click", function() {
  score++;
  updateScore();
  moveSquare();
  clearInterval(countdownInterval); 
  startCountdown(); 
});
