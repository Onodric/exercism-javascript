"use strict";

let Bob = function() {
};

Bob.prototype.hey = function(conversation) {
  if (conversation.replace(/ /g, '') === '') {
    return 'Fine. Be that way!';
  }
  if (conversation.toUpperCase() === conversation &&
      conversation.replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').replace(/\s{2,}/g,'') !== '') {
    return 'Whoa, chill out!';
  }
  if (conversation[conversation.length-1] === '?') {
    return 'Sure.';
  }
  return 'Whatever.';
};

module.exports = Bob;