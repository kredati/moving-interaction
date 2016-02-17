var KeyListener = function(key, listenOn, _function) {
  this.keyToListen = key.charCodeAt(0);
  this.listenOn = listenOn;
  this.functionToCall = _function;
};

KeyListener.prototype = {

  listen: function() {
    if (keyIsDown(this.keyToListen)) {
      this.functionToCall.call(this.listenOn);
      console.log("It's pressed! " + this.keyToListen);
    }

  }

};
