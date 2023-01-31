function bestTeamScore(scores: number[], ages: number[]): number {
  const players: number[][] = [];
  for (let i = 0; i < scores.length; i++) {
    players.push([scores[i], ages[i]]);
  }
  players.sort((a, b) => a[0] - b[0]);
  players.sort((a, b) => a[1] - b[1]);
  // find max not decreasing sequence

  const n = scores.length;
  /*
    [ 1,2,3,2,4,5,1,5]
          5 
        give up
        take 
init ans
      0 1 2 3 4 5 6 7
    [ 1,2,3,2,4,5,1,5]  
                                        X
                  s6 = max(arr[6], ans[6] + ans[7])      
                                                          v
                s5 = max( arr[5], arr[5] + arr[6], arr[5] + arr[7] )
                s5 = 10                 
  */
  const ans: number[] = [];
  let max = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = players[i][0]; // score
    for (let j = i + 1; j < n; j++) {
      console.log("i:", i, players[i], "j:", j, players[j], ans);
      if (players[j][0] >= players[i][0]) {
        ans[i] = Math.max(ans[i], players[i][0] + ans[j]);
      }
    }
    max = Math.max(max, ans[i]);
  }
  return max;
}

function bestTeamScoreNot_optimized_DP_cause_TLE(
  scores: number[],
  ages: number[]
): number {
  /*
    [4,5,6,5], ages = [2,1,2,1]
    sort with scocres then age:
sccores    [5,5,4,6]
  ages     [1,1,2,2]
question becomes
 => select not descreasing sequence with max sum
    */
  const players: number[][] = [];
  for (let i = 0; i < scores.length; i++) {
    players.push([scores[i], ages[i]]);
  }
  players.sort((a, b) => a[0] - b[0]);
  players.sort((a, b) => a[1] - b[1]);
  //   const sequence = players.map(([score, age]) => score);
  // find max not decreasing sequence
  const n = scores.length;
  const memoizedObj: { [key: string]: number } = {};
  function findNotDescSeq(i: number = 0, currMax: number = -Infinity): number {
    if (i >= n) return 0;
    if (memoizedObj[`${i}_${currMax}`] !== undefined)
      return memoizedObj[`${i}_${currMax}`];
    // pick scores if available
    let pickCurr = -Infinity;
    if (players[i][0] >= currMax) {
      pickCurr = players[i][0] + findNotDescSeq(i + 1, players[i][0]);
    }
    // pass scores
    const passCurr = findNotDescSeq(i + 1, currMax);
    return (memoizedObj[`${i}_${currMax}`] = Math.max(pickCurr, passCurr));
  }
  return findNotDescSeq();
}

export { bestTeamScore };
