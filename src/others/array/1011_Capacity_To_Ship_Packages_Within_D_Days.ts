function shipWithinDaysWithArray(weights: number[], days: number): number {
  /*
    Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
    Output: 15
    Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
    1st day: 1, 2, 3, 4, 5
    2nd day: 6, 7
    3rd day: 8
    4th day: 9
    5th day: 10

    sum(weights) >= ship weight >= max weight 
    max sum(weights) = 500 * 5 * 10^4
    2.5 * 10^7
    the max day: weights.length
    for brute force:
    iterate through max(weight) to 2.5*10^7
    return until 
     */

  /*
    shipMax: sum(weights)
    shipMin: max(weights)
    */
  let l = Math.max(...weights); // ship min
  let r = weights.reduce((prev, curr) => {
    return prev + curr;
  }, 0); // ship max
  let m = Math.floor((l + r) / 2);
  function isShipWeightValid(shipWeight: number): boolean {
    let remainWeight = shipWeight;
    let dayUsed = 1;
    for (let weight of weights) {
      if (weight <= remainWeight) {
        remainWeight -= weight;
      } else {
        dayUsed++;
        remainWeight = shipWeight;
        if (remainWeight < weight) return false;
        remainWeight -= weight;
      }
    }

    return dayUsed <= days;
  }
  while (l < r) {
    if (isShipWeightValid(m)) {
      // if valid, try to find
      r = m;
    } else {
      l = m + 1; // l is invalid
    }
    m = Math.floor((r + l) / 2);
  }
  return r;
}
export { shipWithinDays };
