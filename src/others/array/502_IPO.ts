function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  /*
    k: project count
    w: inital capital

    Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1] 
    Output: 4

    sort profits O(nlogn)

    iterate k find the max aviable profits
    O( k*n )  
    O(nlogn + k*n)=> might cause TLE 

    what if sort by profit first 
    then sort by capital
    => use binray search to find the avialable captial
    issue: we can not pick the same project twice 
     */
  const n = profits.length;
  const combine: { [key: string]: number }[] = [];
  for (let i = 0; i < n; i++) {
    combine[i] = {};
    combine[i]["profit"] = profits[i];
    combine[i]["capital"] = capital[i];
  }
  // sort by profit
  combine.sort((a, b) => {
    return a.profit - b.profit;
  });
  //   combine.sort((a, b) => {
  //     return a.capital - b.capital;
  //   });

  for (let i = 0; i < k; i++) {
    // console.log(combine);

    let isRunOutOfProj = true;
    for (let j = combine.length - 1; j >= 0; j--) {
      //   console.log("required", combine[j].capital, w, "prof", combine[j].profit);
      if (combine[j].capital <= w) {
        w += combine[j].profit;
        isRunOutOfProj = false;
        combine.splice(j, 1);
        break;
      }
    }
    if (isRunOutOfProj) return w;
  }
  return w;
}

export { findMaximizedCapital };
