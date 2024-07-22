class TennisGame3 {
  constructor(p1Name, p2Name) {
    this.p1Score = 0;
    this.p2Score = 0;
    this.p1Name = p1Name;
    this.p2Name = p2Name;
    this.p1GamesWon = 0;
    this.p2GamesWon = 0;
  }

  wonPoint(playerName) {
    if (playerName === this.p1Name) {
      this.p1Score += 1;
    } else if (playerName === this.p2Name) {
      this.p2Score += 1;
    }

    if (this.isGameWon()) {
      this.recordGameWin();
      this.resetScores();
    }
  }

  getScore() {
    if (this.isRegularScore()) {
      return this.getRegularScore();
    } else {
      return this.getSpecialScore();
    }
  }

  isRegularScore() {
    return (
      this.p1Score < 4 && this.p2Score < 4 && this.p1Score + this.p2Score < 6
    );
  }

  getRegularScore() {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
    if (this.p1Score === this.p2Score) {
      return `${scoreNames[this.p1Score]}-All`;
    }
    return `${scoreNames[this.p1Score]}-${scoreNames[this.p2Score]}`;
  }

  getSpecialScore() {
    if (this.p1Score === this.p2Score) {
      return "Deuce";
    }
    const scoreDifference = this.p1Score - this.p2Score;
    const leadingPlayer =
      this.p1Score > this.p2Score ? this.p1Name : this.p2Name;
    return Math.abs(scoreDifference) === 1
      ? `Advantage ${leadingPlayer}`
      : `Win for ${leadingPlayer}`;
  }

  isGameWon() {
    return (
      (this.p1Score >= 4 && this.p1Score - this.p2Score >= 2) ||
      (this.p2Score >= 4 && this.p2Score - this.p1Score >= 2)
    );
  }

  recordGameWin() {
    if (this.p1Score > this.p2Score) {
      this.p1GamesWon += 1;
    } else {
      this.p2GamesWon += 1;
    }
  }

  resetScores() {
    this.p1Score = 0;
    this.p2Score = 0;
  }

  getGamesWon() {
    return {
      [this.p1Name]: this.p1GamesWon,
      [this.p2Name]: this.p2GamesWon,
    };
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = TennisGame3;
}
