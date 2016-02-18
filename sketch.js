var myBall;

var bouncyBalls = [];

var score = 0;

var timer = new Timer();

var updateAndDisplay = function(shape) {
  shape.update();
  shape.display();
};

var checkForInteractiveCollision = function (ball, index) {
  if (ball.checkForCollision(myBall)) collideWithInteractive(index);
};

var collideWithInteractive = function (index) {
  bouncyBalls.splice(index, 1);
  score++;
};

var displayScore = function() {
  textSize(32);
  fill(255, 255, 255, 160);
  text(score, 20, 40);
};

var displayTimer = function() {
  textSize(32);
  fill(255, 255, 255, 160);
  text(timer.getPrettyElapsedTime(), 20, height - 20);
};

var newGame = function() {
  gameActive = true;
  score = 0;
  if (bouncyBalls.length < gameBalls) makeAndInitializeBouncyBalls(gameBalls);
  myBall = new InteractiveBall(mouseX, mouseY);
  myBall.initialize();
  timer.restart();
};

var makeAndInitializeBouncyBalls = function(numberOfBalls) {
  while (bouncyBalls.length < numberOfBalls) bouncyBalls.push(new BouncyBall(width/ 2, height / 2));
  bouncyBalls.forEach(function initialize(ball) {
    ball.initialize();
  });
};

var gameBalls = 20;

var gameActive = false;

setup = function () {
  // your code goes here
  createCanvas(600, 600);
  timer.pause();
};

draw = function () {
  background(0);
  displayScore();
  displayTimer();
  if (gameActive) {
    updateAndDisplay(myBall);
    bouncyBalls.forEach(function checkForInteractiveCollision(ball, index) {
      if (ball.checkForCollision(myBall)) collideWithInteractive(index);
    });
  }
  bouncyBalls.forEach(updateAndDisplay);
  if (bouncyBalls.length === 0) {
    gameActive = false;
    timer.pause();
  }
};

mouseClicked = function() {
  if (!gameActive) newGame();
};
