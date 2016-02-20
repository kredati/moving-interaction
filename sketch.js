var game = {

  bouncyBalls: [],
  gameBalls: 20,
  score: 0,
  timer: new Timer(),
  gameActive: false,

  initialize: function() {
    this.timer.pause();
  },

  display: function() {
    this.displayScore();
    this.displayTimer();
    if (this.gameActive) this.updateAndDisplayBalls();
  },

  update: function() {
    if (this.bouncyBalls.length === 0) {
      this.gameActive = false;
      this.timer.pause();
    }
  },

  newGame: function() {
    this.gameActive = true;
    this.score = 0;
    if (this.bouncyBalls.length < this.gameBalls) this.makeAndInitializeBouncyBalls(this.gameBalls);
    this.myBall = new InteractiveBall(mouseX, mouseY);
    this.myBall.initialize();
    this.timer.restart();
  },

  makeAndInitializeBouncyBalls: function(numberOfBalls) {
    while (this.bouncyBalls.length < numberOfBalls) this.bouncyBalls.push(new BouncyBall(width/ 2, height / 2));
    this.bouncyBalls.forEach(function initialize(ball) {
      ball.initialize();
    });
  },

  updateAndDisplayBalls: function() {
    this.updateAndDisplay(this.myBall);
    this.bouncyBalls.forEach(this.checkForInteractiveIntersection, this);
    this.bouncyBalls.forEach(this.updateAndDisplay);
  },

  updateAndDisplay: function(shape) {
    shape.update();
    shape.display();
  },

  checkForInteractiveIntersection: function(ball, index) {
    if (ball.checkForIntersection(this.myBall)) this.intersectWithInteractive(index);
  },

  intersectWithInteractive: function(index) {
    this.bouncyBalls.splice(index, 1);
    this.score++;
  },

  displayScore: function() {
    textSize(32);
    fill(255, 255, 255, 160);
    text(this.score, 20, 40);
  },

  displayTimer: function() {
    textSize(32);
    fill(255, 255, 255, 160);
    text(this.timer.getPrettyElapsedTime(), 20, height - 20);
  },

};

setup = function () {
  // your code goes here
  createCanvas(600, 600);
  game.initialize();
};

draw = function () {
  background(0);
  game.update();
  game.display();
};

mouseClicked = function() {
  if (!game.gameActive) game.newGame();
};
