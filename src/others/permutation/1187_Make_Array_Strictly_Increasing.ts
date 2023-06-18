/* 
arr2: 1 2 3 4
i:   0 1 2 3 4
[-1] 1 5 3 6 7
dft(i=0,prev=-1)
if prev < arr1[i]
we could chose 

*/

function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
  arr2.sort((a, b) => a - b);

  function findNum(target: number): number {
    // find the smallest index that arr2[index] > target
    // for (let ind = 0; ind < arr2.length; ind++) {
    //   if (arr2[ind] > target) {
    //     return ind;
    //   }
    // }
    // return -1;
    let l = 0;
    let r = arr2.length - 1;
    let m = Math.floor((l + r) / 2);
    while (l < r) {
      if (arr2[m] <= target) {
        l = m + 1;
      } else {
        r = m;
      }
      m = Math.floor((l + r) / 2);
    }
    return arr2[m] > target ? m : -1;
  }
  const memo = new Map<string, number>();
  function dft(i = 0, prev = -1): number {
    if (i >= arr1.length) return 0;
    const key = `${i}_${prev}`;
    if (memo.get(key)) return memo.get(key)!;
    let keepIt = Infinity;
    let replaceIt = Infinity;
    if (arr1[i] > prev) {
      // we can only kepp it if arr1[i] > prev
      keepIt = dft(i + 1, arr1[i]);
    }
    const index = findNum(prev);
    if (index >= 0) {
      // we can only replace if a valid replacment is found
      replaceIt = dft(i + 1, arr2[index]) + 1;
    }
    const min = Math.min(keepIt, replaceIt);
    memo.set(key, min);
    return min;
  }
  const res = dft();
  return Number.isFinite(res) ? res : -1;
}

function makeArrayIncreasingFailed(arr1: number[], arr2: number[]): number {
  /*
    Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
    i iterate through arr1
    for i=0 :
    replacement if avialable x
    don't
    for i=1:
    replacement if avialable
    don't x

    */
  arr2.sort((a, b) => a - b);

  /*
  [1 5 9] target 4 
  l=0 r=2
  */
  function findNum(target: number, i = 0): number {
    // for (let ind = i; ind < arr2.length; ind++) {
    //   if (arr2[ind] > target) {
    //     return ind;
    //   }
    // }
    // return -1;
    if (target === undefined || i >= arr2.length) return -1;
    let l = i;
    let r = arr2.length - 1;
    let m = Math.floor((l + r) / 2);
    while (l < r) {
      if (arr2[m] <= target) {
        // can't be used
        l = m + 1;
      } else {
        r = m - 1;
      }
      m = Math.floor((l + r) / 2);
    }
    if (arr2[m] <= target && arr2[m + 1] > target) m++;

    if (m >= arr2.length || arr2[m] <= target) m = -1;
    return m; // return index
  }

  const memoObj = new Map<string, number>();
  // return the minCount requirment
  // j represent unused arr2 start from index=j
  function recursive(i = 0, j = 0): number {
    console.log(arr1, "i", i, "j", j);
    if (i >= arr1.length) {
      console.log(arr1);
      return 0;
    }
    const key = `${i}_${j}`;
    if (memoObj.get(key)) return memoObj.get(key)!;
    let replaceCase = Infinity;
    let notReplaceCase = Infinity;
    let temp: number;
    // do not replace
    if (i === 0 || arr1[i] > arr1[i - 1]) {
      notReplaceCase = recursive(i + 1, j);
    }
    // replace
    // if (i === 0 && arr2[0] < arr1[0]) {
    //   temp = arr1[0];
    //   arr1[0] = arr2[0];
    //   zeroCase = recursive(1, 1) + 1;
    //   arr1[0] = temp;
    // }

    let indexToReplace = findNum(arr1[i - 1], j); // find the smallest number that > arr[i-1]
    if ((i === 0 && arr2[0] < arr1[0]) || (i > 0 && indexToReplace >= 0)) {
      if (i === 0 && arr2[0] < arr1[0]) indexToReplace = 0;
      temp = arr1[i];
      arr1[i] = arr2[indexToReplace];
      replaceCase = recursive(i + 1, indexToReplace + 1) + 1;
      arr1[i] = temp;
    }

    const min = Math.min(replaceCase, notReplaceCase);
    memoObj.set(key, min);
    return min;
  }
  const res = recursive();
  return Number.isFinite(res) ? res : -1;
}

function makeArrayIncreasingTLE(arr1: number[], arr2: number[]): number {
  /*
    Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
    Output: 1
    Input: arr1 = [1,5,3,6,7], arr2 = [4,3,1]
    Output: 2     [1 3 4 6 7]
    Input: arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
    Output: -1    
    [45, 46, 44, 47, 48], [1, 2, 3] 
    2

    [50,51,52,53, 20,21,22]  [31,32,33]

    [21,22,23,24,]

    for arr1[n] is it resonable to exchange a number > arr1[n+1]> ?

    brute force:
    (arr1.legnth)! > loop > 1
     */
  function isNumValid(i = 0): boolean {
    if (arr1.length <= 1) return true;
    let l = 0;
    let r = 1;
    while (r < arr1.length) {
      if (arr1[r] <= arr1[l]) return false;
      l++;
      r++;
    }
    return true;
  }
  arr2.sort((a, b) => a - b);
  let minCount = Infinity;
  // don't swap if arr1[i+1] < arr2[i2] || arr1[i-1] > arr2[i2]
  function permutation(i1 = 0, i2 = 0, count = 0): void {
    if (isNumValid()) {
      minCount = Math.min(minCount, count);
      return;
    }
    if (i1 >= arr1.length || i2 >= arr2.length) return;

    // try
    for (let i = i2; i < arr2.length; i++) {
      //
      if (arr2[i] === arr1[i1]) continue;
      if (arr2[i] < arr1[i1 + 1] || arr2[i] > arr1[i1 - 1]) {
        const temp = arr1[i1];
        arr1[i1] = arr2[i];
        permutation(i1 + 1, i + 1, count + 1);
        arr1[i1] = temp;
      } else {
        break;
      }
    }
    // skip
    permutation(i1 + 1, i2, count);
  }
  permutation();
  return Number.isFinite(minCount) ? minCount : -1;
}

export { makeArrayIncreasing };
