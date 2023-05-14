function maxScore(nums: number[]): number {
  /*
 000000 bits
[1,2,3,4,5,6]
*/
  function gcd(num1: number, num2: number): number {
    if (num1 === num2) return num1;
    if (num1 > num2) {
      return gcd(num1 - num2, num2);
    } else {
      return gcd(num1, num2 - num1);
    }
  }
  const cache: Record<number, number> = {};
  const n = nums.length / 2;
  function dfs(mask = 0, op = 1): number {
    if (cache[mask] !== undefined) return cache[mask];
    let max = 0;
    for (let i = 0; i < 2 * n; i++) {
      for (let j = i + 1; j < 2 * n; j++) {
        // check current number is used

        if (mask & (1 << i) || mask & (1 << j)) continue;
        const newMask = mask | (1 << i) | (1 << j);
        const score = op * gcd(nums[i], nums[j]);
        max = Math.max(max, score + dfs(newMask, op + 1));
      }
    }
    cache[mask] = max;
    return max;
  }

  return dfs();
}
function maxScoreFail(nums: number[]): number {
  /*
    Input: nums = [3,4,6,8]
    Output: 11
    Explanation: The optimal choice of operations is:
    (1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11
    Input: nums = [1,2,3,4,5,6]
    Output: 14
    Explanation: The optimal choice of operations is:
    (1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14

    c = gcd(a,b)
    a = c*x
    b = c*y

    n <= 7

    if n === 3
    [1,2,3,4,5,6]
    brute force

    arr[x][y] === gcd(x,y) menas group x, y

      \ 1 2 3 4 5 6
    1 x \ 1 1 1 1 1
    2 1 x \ 1 2 1 2
    3 1 1 x \ 1 1 3 
    4 1 2 1 x \ 1 2
    5 1 1 1 1 x \ 1
    6 1 2 3 2 1 x \ 

    find max
    gcdArr[0][1] = gcd(0,1)
    gcdArr[0][2] = gcd(0,2)
    ...
    gcdArr[0][n-1] = gcd(0,n-1)
    
     */
  function gcd(num1: number, num2: number): number {
    if (num1 === num2) return num1;
    if (num1 > num2) {
      return gcd(num1 - num2, num2);
    } else {
      return gcd(num1, num2 - num1);
    }
  }
  // const gcdArr: number[][] = [];
  // const n = nums.length / 2;
  // for (let i = 0; i < n; i++) {
  //   gcdArr[i] = [];
  //   for (let j = i + 1; j < n; j++) {
  //     gcdArr[i][j] = gcd(i, j);
  //   }
  // }

  const n = nums.length / 2;
  let max = 0;
  const arr: number[] = [];
  for (let i = 0; i < 2 * n; i++) {
    arr[i] = i;
  }
  function getScore(arr: number[]): number {
    const vals: number[] = [];
    for (let i = 0; i < 2 * n; i = i + 2) {
      vals.push(gcd(nums[arr[i]], nums[arr[i + 1]]));
    }
    vals.sort((a, b) => a - b);
    return vals.reduce((pre, curr, i) => {
      return pre + curr * (i + 1);
    }, 0);
  }
  function permutation(i = 0): void {
    /*
    6!/2
    1 2 3 4 5 6
    [12 3456]->[12 34 56] 
               [12 35 46]
               [12 36 45]
    [13 2456]->[13 24 56]
               [13 25 46]
               [13 26 45]
    [14 2356]
    [15 2346]
    [16 2345]
    */
    if (i >= n * 2) return;
    max = Math.max(getScore(arr), max);

    for (let j = i + 2; j < n * 2; j++) {
      // swap i+1 , [i+2,..n]
      [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
      permutation(i + 2);
      [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
    }
  }
  permutation();

  return max;
}

export { maxScore };
