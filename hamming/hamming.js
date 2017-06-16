"use strict";

let Hamming = function() {
  this.first = '';
  this.second = '';
};

Hamming.prototype.compute = function(first, second) {
  
  if (first !== '' && second !== '' && (first.length - second.length) === 0) {
    this.first = first;
    this.second = second;
  } else {
    throw new Error('DNA strands must be of equal length.'); 
  };
  
  this.ham = 0;
  for (let i=0; i<this.first.length; i++) {
    if (this.first[i] !== this.second[i]) {
      this.ham++;
    }
  }
  return this.ham;
};

module.exports = Hamming;
