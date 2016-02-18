var InteractiveBall = function(x, y) {
  this.position = new p5.Vector(x, y);
  this.direction = new p5.Vector(0, 0);
};

InteractiveBall.prototype = {

  speed: 3,
  radius: 10,
  listeners: [],

  initialize: function() {
    this.listeners.push(new KeyListener('W', this.moveUp, this));
    this.listeners.push(new KeyListener('A', this.moveLeft, this));
    this.listeners.push(new KeyListener('S', this.moveDown, this));
    this.listeners.push(new KeyListener('D', this.moveRight, this));
  },

  display: function() {
    noStroke();
    fill(52, 43, 231, 181);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

  update: function() {
    this.resetDirection();
    this.listen();
    this.move();
  },

  listen: function() {
    this.listeners.forEach(function listen(listener) {
      listener.listen();
    });
  },

  resetDirection: function() {
    this.direction.x = 0;
    this.direction.y = 0;
  },

  move: function() {
    if (this.direction.mag() > 0) this.normalizeSpeed();
    this.position.x = constrain(this.position.x + this.direction.x, this.radius, width - this.radius);
    this.position.y = constrain(this.position.y + this.direction.y, this.radius, height - this.radius);
  },

  normalizeSpeed: function() {
    this.direction.normalize();
    this.direction.mult(this.speed);
  },

  moveUp: function() {
    this.direction.y -= 1;
  },

  moveLeft: function() {
    this.direction.x -= 1;
  },

  moveRight: function() {
    this.direction.x += 1;
  },

  moveDown: function() {
    this.direction.y += 1;
  }

};
