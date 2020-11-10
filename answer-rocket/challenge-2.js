const test = [
  "8",
  "0",
  "1",
  "9",
  "4",
  "0",
  "9",
  "0",
  "10",
  "9",
  "1",
  "4",
  "2",
  "0",
  "3",
  "5",
  "5",
  "9",
  "1",
  "8",
];
const perfectGame = new Array(12).fill("10");
const shortGame = ["10", "10", "8", "1"];

const convertScoresIntoFrames = (gameData) => {
  let first = 0;
  const frames = [];
  while (first < gameData.length) {
    const f = parseInt(gameData[first]);
    let s;
    if (f < 10 && first < gameData.length - 1)
      s = parseInt(gameData[first + 1]);

    if (f >= 0 && s >= 0) {
      frames.push([f, s]);
      first += 2;
    } else {
      frames.push([f]);
      first++;
    }
  }
  return frames;
};

const spare = (frames, i) => {
  let total = frames[i][0] + frames[i][1];
  if (i + 1 < frames.length) total += frames[i + 1][0];
  return total;
};

const strike = (frames, i) => {
  const firstNextRoll = frames[i + 1][0];
  let secondNextRoll;
  if (frames[i + 1].length === 2) secondNextRoll = frames[i + 1][1];
  else secondNextRoll = frames[i + 2][0];
  return firstNextRoll + secondNextRoll + 10;
};

const computeScorePerFrame = (frames) => {
  const length = frames.length < 9 ? frames.length : 10;
  const scores = new Array(length);

  for (let i = 0; i < length; i++) {
    const frame = frames[i];
    if (frame.length === 2) {
      const sum = frame[0] + frame[1];
      if (sum === 10) scores[i] = spare(frames, i);
      else scores[i] = sum;
    } else scores[i] = strike(frames, i);
  }
  return scores;
};

const sumScores = (scoresPerFrame) => {
  let sum = 0;
  for (let i = 0; i < scoresPerFrame.length; i++) sum += scoresPerFrame[i];
  return sum;
};

const solution = (gameData) => {
  //convert string of scores into array of arrays, each element representing a frame/turn
  const frames = convertScoresIntoFrames(gameData);

  //next need to compute score per frame
  const scoresPerFrame = computeScorePerFrame(frames);

  //return score as sum of frame scores
  return sumScores(scoresPerFrame);
};

console.log(solution(test));
console.log(solution(perfectGame));
console.log(solution(shortGame));
