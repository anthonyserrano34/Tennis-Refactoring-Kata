"use strict";

const fs = require("fs");
const each = require("jest-each").default;
const TennisGame2 = require("./TennisGame2.test");

var allScores = [
  [0, 0, "Love-All"],
  [1, 1, "Fifteen-All"],
  [2, 2, "Thirty-All"],
  [3, 3, "Deuce"],
  [4, 4, "Deuce"],

  [1, 0, "Fifteen-Love"],
  [0, 1, "Love-Fifteen"],
  [2, 0, "Thirty-Love"],
  [0, 2, "Love-Thirty"],
  [3, 0, "Forty-Love"],
  [0, 3, "Love-Forty"],
  [4, 0, "Win for player1"],
  [0, 4, "Win for player2"],

  [2, 1, "Thirty-Fifteen"],
  [1, 2, "Fifteen-Thirty"],
  [3, 1, "Forty-Fifteen"],
  [1, 3, "Fifteen-Forty"],
  [4, 1, "Win for player1"],
  [1, 4, "Win for player2"],

  [3, 2, "Forty-Thirty"],
  [2, 3, "Thirty-Forty"],
  [4, 2, "Win for player1"],
  [2, 4, "Win for player2"],

  [4, 3, "Advantage player1"],
  [3, 4, "Advantage player2"],
  [5, 4, "Advantage player1"],
  [4, 5, "Advantage player2"],
  [15, 14, "Advantage player1"],
  [14, 15, "Advantage player2"],

  [6, 4, "Win for player1"],
  [4, 6, "Win for player2"],
  [16, 14, "Win for player1"],
  [14, 16, "Win for player2"],
];

describe("TennisGame2", function () {
  each(allScores).it(
    "when the points are %s:%s is %s",
    function (p1, p2, expected) {
      const game = new TennisGame2("player1", "player2");
      for (let i = 0; i < p1; i++) {
        game.wonPoint("player1");
      }
      for (let i = 0; i < p2; i++) {
        game.wonPoint("player2");
      }
      expect(game.getScore()).toEqual(expected);
    }
  );

  test("Save and Load Game State", () => {
    const game = new TennisGame2("player1", "player2");
    game.wonPoint("player1");
    const savedState = game.saveGame();

    const newGame = new TennisGame2("player1", "player2");
    newGame.loadGame(savedState);

    expect(newGame.getScore()).toBe("Fifteen-Love");
  });

  test("Compare with Golden Master", () => {
    const game = new TennisGame2("player1", "player2");
    let output = "";
    game.wonPoint("player1");
    output += `Score after player1 point: ${game.getScore()}\n`;
    game.wonPoint("player2");
    output += `Score after player2 point: ${game.getScore()}\n`;

    const goldenMaster = fs.readFileSync("golden_master.txt", "utf-8");
    expect(output).toBe(goldenMaster);
  });
});
