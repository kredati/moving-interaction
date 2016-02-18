var BouncyBall = function(x, y, speedMagnitude) {
  this.position = new p5.Vector(x, y);
  this.speedMagnitude = (speedMagnitude) ? speedMagnitude: 2;
};

BouncyBall.prototype = {

  radius: 10,

  initialize: function(x, y) {
    this.speed = (x && y) ? new p5.Vector(x, y) : this.getRandomSpeedVector(this.speedMagnitude);
  },

  update: function() {
    this.edgeBounce();
    this.position.add(this.speed);
  },

  display: function() {
    noStroke();
    fill(255, 255, 255, 128);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

  getRandomSpeedVector: function(magnitude) {
    var vector = new p5.Vector(magnitude, 0);
    vector.rotate(random(0, 360));
    return vector;
  },

  edgeBounce: function() {
    if (this.checkEdgeBounce(this.position.x, width, this.radius)) this.speed.x *= -1;
    if (this.checkEdgeBounce(this.position.y, height, this.radius)) this.speed.y *= -1;
  },

  checkEdgeBounce: function(position, limit, size) {
    return (position < size || position > limit - size);
  },

  checkForCollision: function(otherBall) {
    var distanceBetweenBalls = dist(this.position.x, this.position.y, otherBall.position.x, otherBall.position.y);
    return (distanceBetweenBalls < this.radius + otherBall.radius);
  },

  collisionBounce: function(otherBall) {

  }

};
