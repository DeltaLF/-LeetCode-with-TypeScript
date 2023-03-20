function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  /*
    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false

    [0,0,0,1]
     | 
     */
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (checkIAvailable(i)) count++;
  }

  function checkIAvailable(i: number): boolean {
    if (flowerbed[i] === 1) return false;
    if (flowerbed[i - 1] === 1) return false;
    if (flowerbed[i + 1] === 1) return false;
    flowerbed[i] = 1;
    return true;
  }
  return n <= count;
}

export { canPlaceFlowers };
