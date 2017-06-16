"use strict";

let BeerSong = function() {
  this.bottleNo = 0;
  this.bottleNoCap = 0;
  this.plural = 's';
  this.verse = `${this.bottleNoCap} bottle${this.plural} of beer on the wall, ${this.bottleNo} bottle${this.plural} of beer.\nTake one down and pass it around, ${this.bottleNo-1} bottle${this.plural} of beer on the wall.\n`;
};

BeerSong.prototype.verse = function(number){
  return this.verse;
};

BeerSong.prototype.sing = function (start, finish) {
  return this.verse;
};


module.exports = BeerSong;