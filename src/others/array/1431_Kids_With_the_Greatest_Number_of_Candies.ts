function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  /*
    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true] 
     */
  const max = Math.max(...candies);
  return candies.map((candy) => {
    return extraCandies + candy >= max;
  });
}

export { kidsWithCandies };
