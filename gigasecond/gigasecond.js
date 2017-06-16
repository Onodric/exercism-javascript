"use strict";

let Gigasecond = function(date) {
  this.past = Date.parse(date.toISOString());
  this.future = new Date(this.past + 1000000000000);
};

Gigasecond.prototype.date = function() {
  return this.future;
};

module.exports = Gigasecond;