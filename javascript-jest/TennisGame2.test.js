"use strict";

class TennisGame2 {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.P1point = 0;
    this.P2point = 0;
  }

  pointToString(point) {
    switch (point) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
    }
  }

  getScore() {
    if (this.P1point === this.P2point) {
      return this.P1point < 3
        ? `${this.pointToString(this.P1point)}-All`
        : "Deuce";
    }

    if (this.P1point >= 4 || this.P2point >= 4) {
      const pointDifference = this.P1point - this.P2point;
      if (pointDifference === 1) return "Advantage player1";
      if (pointDifference === -1) return "Advantage player2";
      if (pointDifference >= 2) return "Win for player1";
      if (pointDifference <= -2) return "Win for player2";
    }

    return `${this.pointToString(this.P1point)}-${this.pointToString(
      this.P2point
    )}`;
  }

  wonPoint(player) {
    if (player === this.player1Name) {
      this.P1point++;
    } else {
      this.P2point++;
    }
  }

  /**
   * Sauvegarde l'état actuel du jeu.
   * @returns {string} L'état du jeu sous forme de chaîne JSON.
   */

  saveGame() {
    return JSON.stringify({
      P1point: this.P1point,
      P2point: this.P2point,
    });
  }

  /**
   * Charge l'état du jeu à partir d'une chaîne JSON.
   * @param {string} savedState L'état du jeu sous forme de chaîne JSON.
   */

  loadGame(savedState) {
    const state = JSON.parse(savedState);
    this.P1point = state.P1point;
    this.P2point = state.P2point;
  }
}

module.exports = TennisGame2;
