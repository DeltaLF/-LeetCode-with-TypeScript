function numRescueBoats(people: number[], limit: number): number {
  /*
    Input: people = [1,2], limit = 3
    Output: 1
    
    Input: people = [3,2,2,1], limit = 3
    Output: 3
    
    Input: people = [3,5,3,4], limit = 5
    Output: 4

    people: n at most we need n boat, at least we need n/2 boats

    find the minimum boats needed

    1. sort people with weights
    2. l and r pointer:
    pair the thinest people to the most heavy people 

     */
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;

  let boats = 0;
  while (l <= r) {
    // no need to worry about l==r
    if (people[l] + people[r] > limit) {
      // heavy one needs to take the whole boat
      r--;
    } else {
      r--;
      l++;
    }
    boats++;
  }
  return boats;
}

export { numRescueBoats };
