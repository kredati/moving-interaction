var keyDrawer = {
  drawMostRecentKey: function() {
    this.drawKeyLetter();
    this.drawKeyCode();
  },

  drawKeyLetter: function() {
    text(key, 30, 60);
  },

  drawKeyCode: function() {
    text(keyCode, 30, 100);
  }
};

var arrowListener = new KeyListener(keyListenerMap.rightArrow, keyDrawer.drawMostRecentKey, keyDrawer);

var letterListener = new KeyListener('A', keyDrawer.drawMostRecentKey, keyDrawer);

var backspaceListener = new KeyListener(keyListenerMap.backspace, keyDrawer.drawMostRecentKey, keyDrawer);

setup = function () {
  // your code goes here
  createCanvas(300, 300);
};

draw = function () {
  background(200);
  // your code goes here
  arrowListener.listen();
  letterListener.listen();
  backspaceListener.listen();
};

function keyPressed() {
  if (keyCode == UP_ARROW) {
    console.log("UP!!: " + UP_ARROW);
  } else if (keyCode == DOWN_ARROW) {
    console.log("DOWN!!: " + DOWN_ARROW);
  } else {
    console.log("Key pressed: " + key + ": " + keyCode);
  }
  return false; // prevent default
}
