function totalFruit(fruits: number[]): number {
  // try with sliding window
  let l = 0;
  let r = 1;
  let max = 1;
  let result = 1;
  const backets: { [key: string]: number } = { [fruits[0]]: 1 };
  let typeCount = 1;
  while (r < fruits.length) {
    if (backets[fruits[r]] === undefined) {
      if (typeCount === 1) {
        typeCount++;
      } else {
        // replace fruits
        while (true) {
          backets[fruits[l]]--;
          max--;
          l++;
          if (backets[fruits[l - 1]] === 0) {
            delete backets[fruits[l - 1]];
            break;
          }
        }
      }
      backets[fruits[r]] = 1;
    } else {
      backets[fruits[r]]++;
    }
    max++;
    r++;
    result = Math.max(result, max);
  }
  return result;
}

function totalFruitComplexSolution(fruits: number[]): number {
  /*
      2 backets
      Input: fruits = [1,2,3,2,2] Output: 4
   {1:1, 2:1 }
      1  2  3  2  2 
        {2:1,3:1}
  
       */
  const backets: { [key: string]: number } = { [fruits[0]]: 1 };
  let swap: { [key: string]: number } = {};
  let swapFruit = -1;
  let maxCount = 1;
  let result = 1;
  let firstFruit = fruits[0];
  let secondFruit = -1;
  for (let i = 1; i < fruits.length; i++) {
    if (backets[fruits[i]] === undefined) {
      if (secondFruit > -1) {
        // replace fruit
        if (swapFruit === firstFruit) {
          // reset swap fruit
          swapFruit = -1;
          swap = {};
        } else {
          if (swapFruit === secondFruit) {
            maxCount -= backets[swapFruit];
            backets[swapFruit] = swap[swapFruit];
            maxCount += backets[swapFruit];
          }
        }
        maxCount -= backets[firstFruit];
        delete backets[firstFruit];
        firstFruit = secondFruit;
      }
      secondFruit = fruits[i];
      backets[secondFruit] = 1;
    } else {
      if (fruits[i] === firstFruit && secondFruit > -1) {
        // swap happens
        swap = { [firstFruit]: 1 };
        firstFruit = secondFruit;
        secondFruit = fruits[i];
        swapFruit = fruits[i];
      } else {
        if (swap[fruits[i]] !== undefined) {
          swap[fruits[i]]++;
        }
      }

      backets[fruits[i]] += 1;
    }
    maxCount++;

    result = Math.max(result, maxCount);
  }
  return result;
}

export { totalFruit };
