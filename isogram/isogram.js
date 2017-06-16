"use strict";

let Isogram = function(word) {
  this.word = word.toLowerCase();
};

Isogram.prototype.isIsogram = function() {
  this.letters = {};
  let parsed = this.word.replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, '');
  for (let i=0; i<parsed.length; i++) {
    if (this.letters.hasOwnProperty(parsed[i])) {
      this.letters[parsed[i]] += 1;
    } else {
      this.letters[parsed[i]] = 1;
    }
  }
  for (let letter in this.letters) {
    if (this.letters[letter] > 1) {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;