const fs = require("fs");
const getScore = require("./tennis2");

function captureCurrentOutput() {
  let output = "";
  let points = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [1, 0],
    [0, 1],
    [2, 0],
    [0, 2],
    [3, 0],
    [0, 3],
    [4, 0],
    [0, 4],
    [2, 1],
    [1, 2],
    [3, 1],
    [1, 3],
    [4, 1],
    [1, 4],
    [3, 2],
    [2, 3],
    [4, 2],
    [2, 4],
    [4, 3],
    [3, 4],
    [5, 4],
    [4, 5],
    [15, 14],
    [14, 15],
    [6, 4],
    [4, 6],
    [16, 14],
    [14, 16],
  ];

  points.forEach(([p1, p2]) => {
    output += `Score for ${p1}-${p2}: ${getScore(p1, p2)}\n`;
  });

  fs.writeFileSync("golden_master.txt", output);
}

captureCurrentOutput();
