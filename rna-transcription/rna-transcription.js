"use strict";

let DnaTranscriber = function() {
  this.translator = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  };
};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  this.translated = '';
  for (let i=0; i<dnaStrand.length; i++){
    let el = dnaStrand[i];
    if (this.translator.hasOwnProperty(el)){
      this.translated += this.translator[el];
    } else {
      throw new Error('Invalid input');
    }
  }
  return this.translated;
};

module.exports = DnaTranscriber;