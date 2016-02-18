var Timer = function () {
  this.initialize();
};

Timer.prototype = {

  initialize: function() {
    this.init = new Date();
    this.now = new Date();
    this.running = true;
  },

  restart: function() {
    this.initialize();
  },

  pause: function() {
    this.running = false;
  },

  unpause: function() {
    var elapsedSoFar = this.millisecondsElapsed();
    this.initialize();
    this.init = new Date(this.now.getTime() - elapsedSoFar);
  },

  update: function() {
    if (this.running) this.now = new Date();
  },

  millisecondsElapsed: function() {
    this.update();
    return this.now.getTime() - this.init.getTime();
  },

  secondsElapsed: function() {
    return Math.floor(this.millisecondsElapsed() / 1000);
  },

  minutesElapsed: function() {
    return Math.floor(this.secondsElapsed() / 60);
  },

  getPrettyElapsedTime: function() {
    return this.minutesElapsed() + this.getPrettySeconds();
  },

  getPrettySeconds: function() {
    var secondCounter = this.secondsElapsed() % 60;
    if (secondCounter < 10) secondCounter = "0" + secondCounter;
    return ":" + secondCounter;
  }
};
