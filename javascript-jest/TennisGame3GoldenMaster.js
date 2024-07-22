const TennisGame3 = require("../javascript/TennisGame3");
function generateGoldenMaster() {
  const game = new TennisGame3("player1", "player2");
  const results = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      game.p1 = i;
      game.p2 = j;
      results.push(`${i}-${j}: ${game.getScore()}`);
    }
  }

  // Ajouter quelques cas spéciaux
  game.p1 = 4;
  game.p2 = 4;
  results.push(`4-4: ${game.getScore()}`);

  game.p1 = 5;
  game.p2 = 4;
  results.push(`5-4: ${game.getScore()}`);

  game.p1 = 6;
  game.p2 = 4;
  results.push(`6-4: ${game.getScore()}`);

  return results.join("\n");
}

const goldenMaster = generateGoldenMaster();
console.log(goldenMaster);

// Sauvegarder le Golden Master dans un fichier
const fs = require("fs");
fs.writeFileSync("goldenMaster.txt", goldenMaster);
