function countRoutes(
  locations: number[],
  start: number,
  finish: number,
  fuel: number
): number {
  /*
    Input: locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5
    Output: 4
    Explanation: The following are all possible routes, each uses 5 units of fuel:
    1 -> 3
    1 -> 2 -> 3
    1 -> 4 -> 3
    1 -> 4 -> 2 -> 3
    location is distinct 
 
    2 3 5  start 0

           2
        /     \  
       3       5
     /  \     /  \
    2    5   2    3
....
     */
  const MODULE = 10 ** 9 + 7;
  const memo = new Map<string, number>();
  function bft(loc = start, fuelLeft = fuel): number {
    if (fuelLeft === 0) {
      if (loc !== finish) return -Infinity;
      return 0;
    }
    const key = `${loc}_${fuelLeft}`;
    if (memo.has(key)) return memo.get(key)!;
    let count = 0;
    for (let i = 0; i < locations.length; i++) {
      const dist = Math.abs(locations[i] - locations[loc]);
      if (loc !== i && fuelLeft >= dist) {
        if (i === finish) count++;
        const possibleRoute = bft(i, fuelLeft - dist);
        count += Number.isFinite(possibleRoute) ? possibleRoute : 0;
      }
    }

    if (count === 0) count = -Infinity; // no place to go
    memo.set(key, count % MODULE);
    return count;
  }

  let res = bft() % MODULE;
  if (start === finish) res++;

  return Number.isNaN(res) ? 0 : res;
}

export { countRoutes };
