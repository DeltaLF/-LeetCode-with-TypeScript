function maxSatisfaction(satisfaction: number[]): number {
  /*
    Input: satisfaction = [-1,-8,0,5,-9]
    Output: 14
    Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).
    Each dish is prepared in one unit of time.
    Input: satisfaction = [4,3,2]
    Output: 20
    Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)


    1. sort array
    2. eliminate all negative value => find the one producing maximum

    -5 -4 -3 0 1 3 5
    all = 1*-5 + 2*-4 + 3*-3 + 4*0 + 5*1 + 6*3 + 7*5
    eliminate -5
    noN5 = all +5 +4 +3 -0 -1 -3 -5

    noN4 = noN5 +4 +3 -0 -1 -3 -5

    -8 -7 -1 0 5
    -8-14-3+25=0

     */
  satisfaction.sort((a, b) => a - b);
  let negativeSum = 0;
  let positiveSum = 0;
  let max = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    console.log("sum", satisfaction[i], positiveSum, negativeSum, max);
    if (satisfaction[i] >= 0) {
      positiveSum += satisfaction[i];
    } else {
      negativeSum += satisfaction[i];
    }
    max += satisfaction[i] * (i + 1);
  }
  let localMax = max;
  for (let i = 0; i < satisfaction.length; i++) {
    // start to eliminate negative number
    if (satisfaction[i] >= 0) break; // no reason to eliminate positive number
    localMax = localMax - negativeSum - positiveSum;
    max = Math.max(max, localMax);
    negativeSum = negativeSum - satisfaction[i];
  }
  return max;
}

export { maxSatisfaction };
