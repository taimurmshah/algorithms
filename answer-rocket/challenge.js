const parseScores = (inputs) => {
  //three rules: regular, spare, strike.
  //first plan of attack: parse this input array to make it look
  //like the turns themselves. so, how do we do this?
  let first = 0,
    second = 1;
  const res = [];
  while (first < inputs.length) {
    if (first === inputs.length - 1) {
      const f = parseInt(inputs[first]);
      res.push([f]);
      first++;
      continue;
    }
    const f = parseInt(inputs[first]);
    const s = parseInt(inputs[second]);
    if (f === 10) {
      res.push([f]);
      first = second;
      second++;
    } else {
      res.push([f, s]);
      first = second + 1;
      second = first + 1;
    }
  }
  return res;
};

const spare = (inputs, i) => {
  //basically want to make sure if at the end we don't mess up
  if (i < inputs.length - 1) return inputs[i + 1][0] + 10;
  else return 10;
};

const strike = (inputs, i) => {
  if (i <= inputs.length - 3) {
    const firstNextRoll = inputs[i + 1][0];
    let secondNextRoll;
    if (inputs[i + 1].length === 2) secondNextRoll = inputs[i + 1][1];
    else secondNextRoll = inputs[i + 2][0];
    return firstNextRoll + secondNextRoll + 10;
  } else {
  }
};

const perfectGame = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i][0] !== 10) return false;
  }
  return true;
};

const computeScore = (inputs) => {
  if (perfectGame(inputs)) return [];
  for (let i = 0; i < inputs.length; i++) {
    const frame = inputs[i];
    if (frame.length === 2) {
      const sum = frame[0] + frame[1];
      if (sum < 10) inputs[i] = sum;
      else {
        inputs[i] = spare(inputs, i);
      }
    } else {
      if (frame[0] === 10) inputs[i] = strike(inputs, i);
      else inputs[i] = frame[0];
    }
  }
  return inputs;
};

const score = (inputs) => {
  if (inputs.length === 0) return 300;
  let score = 0;
  for (let i = 0; i < inputs.length - 1; i++) {
    score += inputs[i];
  }
  return score;
};

const data = [
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

let inputs = parseScores(data);
console.log({ data });
console.log({ inputs });

let formattedInputs = computeScore(inputs);

const finalScore = score(formattedInputs);

console.log({ finalScore });
//todo what if the input length < 2?
