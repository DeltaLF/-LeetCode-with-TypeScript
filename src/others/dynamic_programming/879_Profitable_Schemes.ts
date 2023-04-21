function profitableSchemes(
  n: number,
  minProfit: number,
  group: number[],
  profit: number[]
): number {
  const MOD = 10 ** 9 + 7;
  const memo = new Map<string, number>();
  function combination(people = n, crimeInd = 0, pay = 0): number {
    if (crimeInd >= group.length) {
      return pay >= minProfit ? 1 : 0;
    }
    if (memo.has(`${people}_${crimeInd}_${pay}`))
      return memo.get(`${people}_${crimeInd}_${pay}`)!;
    let commit = 0;
    // commit current crimeInd
    if (group[crimeInd] <= people) {
      commit = combination(
        people - group[crimeInd],
        crimeInd + 1,
        Math.min(pay + profit[crimeInd], minProfit)
      );
    }
    // skip current crinmInd
    const skipCommit = combination(people, crimeInd + 1, pay);
    memo.set(`${people}_${crimeInd}_${pay}`, (commit + skipCommit) % MOD);
    return memo.get(`${people}_${crimeInd}_${pay}`)!;
  }

  return combination();
}

function profitableSchemesBadAlloc(
  n: number,
  minProfit: number,
  group: number[],
  profit: number[]
): number {
  const MOD = 10 ** 9 + 7;
  const memo: Record<string, number> = {};
  function combination(people = n, crimeInd = 0, pay = 0): number {
    if (crimeInd >= group.length) {
      return pay >= minProfit ? 1 : 0;
    }
    if (memo[`${people}_${crimeInd}_${pay}`] !== undefined)
      return memo[`${people}_${crimeInd}_${pay}`];
    let commit = 0;
    // commit current crimeInd
    if (group[crimeInd] <= people) {
      commit =
        combination(
          people - group[crimeInd],
          crimeInd + 1,
          pay + profit[crimeInd]
        ) % MOD;
    }
    // skip current crinmInd
    const skipCommit = combination(people, crimeInd + 1, pay) % MOD;
    return (memo[`${people}_${crimeInd}_${pay}`] = (commit + skipCommit) % MOD);
  }

  return combination();
}
function profitableSchemesTLE(
  n: number,
  minProfit: number,
  group: number[],
  profit: number[]
): number {
  /*
    Input: n = 5, minProfit = 3, group = [2,2], profit = [2,3]
    Output: 2
    Input: n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
    Output: 7

    try permutation of group in the pre-codition that a. n is enough b. profit is enough

    O( 2^n )
    
     */

  let count = 0;
  function combination(people = n, crimeInd = 0, pay = 0) {
    if (people === 0 || crimeInd > group.length) {
      count = (count + (pay >= minProfit ? 1 : 0)) % (10 ** 9 + 7);
      return;
    }
    // optimize while the pay is enough
    if (pay >= minProfit) {
      // stop early while pay is enough
      let optionalCrimeCount = 0;
      for (let i = crimeInd; i < group.length; i++) {
        if (people >= group[i]) optionalCrimeCount++;
      }
      count = (count + 2 ** optionalCrimeCount) % (10 ** 9 + 7);
      return;
    }

    // commit current crimeInd
    if (group[crimeInd] <= people) {
      combination(n - group[crimeInd], crimeInd + 1, pay + profit[crimeInd]);
    }
    // skip current crinmInd
    combination(people, crimeInd + 1, pay);
  }
  combination();
  return count;
}

export { profitableSchemes };
