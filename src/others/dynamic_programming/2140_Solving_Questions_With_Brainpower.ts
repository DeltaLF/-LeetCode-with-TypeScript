function mostPoints(questions: number[][]): number {
  /* try bottom up
  Input: questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]
   [0,0,0,0,0,0]
   [....    5,0]
   [....  4,5,0] at point 4 we actually can pass 4 and get 5
   [....  5,5,0]
   [... 3,5,5,0] at point 3 we can also skip to get 5
   [..7,5,5,5,0]
   [6,7,5,5,5,0] at point 6 we can skip 1 to get 7

    */
  const n = questions.length;
  const memoArr = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    memoArr[i] = questions[i][0];
    if (i + questions[i][1] + 1 < memoArr.length) {
      memoArr[i] += memoArr[i + questions[i][1] + 1];
    }
    memoArr[i] = Math.max(memoArr[i], memoArr[i + 1]);
  }

  return memoArr[0];
}

function mostPointsRecursive(questions: number[][]): number {
  /*
      Input: questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]
      Output: 7
  
      seems very dp
       */

  const memoArr: number[] = [];
  function decision(i = 0): number {
    // only i <= nextQ is avaialable question
    if (i >= questions.length) return 0;
    if (memoArr[i] !== undefined) return memoArr[i];
    const skip = decision(i + 1);
    const take = decision(i + questions[i][1] + 1) + questions[i][0];
    console.log("i", i, "skip", skip, "take", take);
    return (memoArr[i] = Math.max(skip, take));
  }
  return decision();
}

export { mostPoints };
