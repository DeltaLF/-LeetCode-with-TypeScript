function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  /*
    Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
    Output: [4,0,3]
    [4,0,3]

    1. sort potions
    2. iterate through spells
      find the least number for spells to success 
      binary search the number then return m - foundNumberInd


     */
  potions.sort((a, b) => a - b);
  const pairs: number[] = [];
  for (let strength of spells) {
    const leastPotion = Math.ceil(success / strength);
    const ind = binarySearch(leastPotion); // inclusive ind
    pairs.push(potions.length - ind);
  }
  function binarySearch(num: number): number {
    // find the closest number in potins that is > num
    /*
    num=2 l=0 r=2 m=1 => r=0 return m=0
     1 3  5
    num=4 l=0 r=2 m=1 => l=2 m=2
 
    num=1  [2,3] l=0 r=1 m=0 => r=-1

    num=100 [2,3] l=0 r=1 m=0 => l=1

    */
    let l = 0;
    let r = potions.length - 1;
    let m = Math.floor((l + r) / 2);
    while (l < r) {
      //   if (potions[m] === num) return m;
      if (potions[m] >= num) {
        r = m - 1;
      } else {
        l = m + 1;
      }
      m = Math.floor((l + r) / 2);
    }
    return m === -1 || potions[m] < num ? m + 1 : m;
  }
  return pairs;
}

export { successfulPairs };
