const TennisGame3 = require("../javascript/TennisGame3");
const fs = require("fs");

function generateGoldenMaster() {
  const game = new TennisGame3("player1", "player2");
  const results = [];

  // Test various scores and game outcomes
  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 6; j++) {
      // Reset scores
      game.resetScores();

      // Simulate scores
      for (let k = 0; k < i; k++) game.wonPoint("player1");
      for (let l = 0; l < j; l++) game.wonPoint("player2");

      results.push(`Score ${i}-${j}: ${game.getScore()}`);
    }
  }

  // Simulate multiple games
  game.resetScores();
  simulateGame(game, "player1", 4, "player2", 2); // player1 wins
  results.push(
    `Game result after player1 wins: ${JSON.stringify(game.getGamesWon())}`
  );

  game.resetScores();
  simulateGame(game, "player2", 4, "player1", 3); // player2 wins
  results.push(
    `Game result after player2 wins: ${JSON.stringify(game.getGamesWon())}`
  );

  game.resetScores();
  simulateGame(game, "player1", 4, "player2", 4); // player1 wins again
  results.push(
    `Game result after player1 wins again: ${JSON.stringify(
      game.getGamesWon()
    )}`
  );

  return results.join("\n");
}

// Helper function to simulate a game with a specific outcome
function simulateGame(game, winner, winnerPoints, loser, loserPoints) {
  for (let i = 0; i < winnerPoints; i++) game.wonPoint(winner);
  for (let j = 0; j < loserPoints; j++) game.wonPoint(loser);
  if (winnerPoints > loserPoints) game.wonPoint(winner); // Ensure the game is won
}

const goldenMaster = generateGoldenMaster();
console.log(goldenMaster);

// Save the Golden Master to a file
fs.writeFileSync("goldenMaster.txt", goldenMaster);
