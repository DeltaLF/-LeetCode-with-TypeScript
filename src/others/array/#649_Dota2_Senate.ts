function predictPartyVictory(senate: string): string {
  /*
"RRRRDDDDDD" Radiant:
At first round 4 Ds are banned and 2Rs are banned
left: RRDD
Second round 2Ds are banned => Radiant wins
senatorLeft[RRR]
stack:[DD]

RDRDRDRDRDDD
senatorLeft[RRRR]
stack[DDD]
*/
  const one = senate[0];
  let allTheSame = true;
  for (let senator of senate) {
    if (senator !== one) {
      allTheSame = false;
    }
  }
  if (allTheSame) return one === "R" ? "Radiant" : "Dire";

  const senatorLeft: string[] = [];
  const stack: string[] = [];
  for (const senator of senate) {
    if (stack.length === 0 || senator === stack[stack.length - 1]) {
      stack.push(senator);
      senatorLeft.push(senator);
    } else {
      stack.pop(); // this senator is banned and won't participate the next round
    }
  }
  let leftInd = 0;
  let stackInd = 0;
  while (leftInd < senatorLeft.length && stackInd < stack.length) {
    if (stack[stackInd] !== senatorLeft[leftInd]) {
      senatorLeft[leftInd] = "#"; // senator to be banned
      leftInd++;
      stackInd++;
    } else {
      leftInd++;
    }
  }
  const nextRound = senatorLeft.filter((senator) => senator !== "#").join("");
  return predictPartyVictory(nextRound);
}

export { predictPartyVictory };
