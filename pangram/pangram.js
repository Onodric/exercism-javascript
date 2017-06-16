"use strict";

let Pangram = function(candidate) {
  this.candidate = candidate.toLowerCase();
  this.alphabet = {
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z'
  };
  this.alphaString = Object.keys(this.alphabet).join('');
};

Pangram.prototype.isPangram = function() {
  if (this.candidate.length === 0 || this.candidate === undefined) {
    return false;
  }
  this.letters = {};
  for (let i=0; i<this.candidate.length; i++){
    if (this.alphabet.hasOwnProperty(this.candidate[i])){
      this.letters[this.candidate[i]] = this.candidate[i];
    } else {
      // The character isn't alpha
    }
  }
  if (Object.keys(this.letters).sort().join('') === this.alphaString) {
    return true;
  }
  return false;
};

module.exports = Pangram;