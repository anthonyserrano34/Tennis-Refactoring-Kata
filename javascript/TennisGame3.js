const SCORE_NAMES = ["Love", "Fifteen", "Thirty", "Forty"];

var TennisGame3 = function (p1N, p2N) {
  this.p2 = 0;
  this.p1 = 0;

  this.p1N = p1N;
  this.p2N = p2N;
};

TennisGame3.prototype.getScore = function () {
  if (this.isEarlyGame()) {
    return this.getEarlyGameScore();
  } else {
    return this.getLateGameScore();
  }
};

TennisGame3.prototype.isEarlyGame = function () {
  return this.p1 < 4 && this.p2 < 4 && this.p1 + this.p2 < 6;
};

TennisGame3.prototype.getEarlyGameScore = function () {
  let score = SCORE_NAMES[this.p1];
  return this.p1 == this.p2
    ? score + "-All"
    : score + "-" + SCORE_NAMES[this.p2];
};

TennisGame3.prototype.getLateGameScore = function () {
  if (this.p1 == this.p2) return "Deuce";
  let leader = this.p1 > this.p2 ? this.p1N : this.p2N;
  return Math.abs(this.p1 - this.p2) == 1
    ? "Advantage " + leader
    : "Win for " + leader;
};

TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName === this.p1N) {
    this.p1 += 1;
  } else if (playerName === this.p2N) {
    this.p2 += 1;
  } else {
    throw new Error("Invalid player name");
  }
};

TennisGame3.prototype.reset = function () {
  this.p1 = 0;
  this.p2 = 0;
};

TennisGame3.prototype.getNumericScore = function () {
  return `${this.p1}-${this.p2}`;
};

if (typeof window === "undefined") {
  module.exports = TennisGame3;
}
