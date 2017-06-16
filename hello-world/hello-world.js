"use strict";
// Base prototype, HelloWorld
let HelloWorld = function() {};

// hello function extending HelloWorld
HelloWorld.prototype.hello = function(input) {
  if (input === '') {
    return 'Hello, World!';
  } else {
    return 'Hello, ' + input + '!';
  };
};

module.exports = HelloWorld;
