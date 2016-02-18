var InteractiveBall = function(x, y) {
  this.position = new p5.Vector(x, y);
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
    this.listen();
  },

  listen: function() {
    this.listeners.forEach(function listen(listener) {
      listener.listen();
    });
  },

  moveUp: function() {
    if (this.position.y > this.radius) this.position.y -= this.speed;
    else this.position.y = this.radius;
  },

  moveLeft: function() {
    if (this.position.x > this.radius) this.position.x -= this.speed;
    else this.position.x = this.radius;
  },

  moveRight: function() {
    if (this.position.x < width - this.radius) this.position.x += this.speed;
    else this.position.x = width - this.radius;
  },

  moveDown: function() {
    if (this.position.y < height - this.radius) this.position.y += this.speed;
    else this.position.y = height - this.radius;
  }

};
