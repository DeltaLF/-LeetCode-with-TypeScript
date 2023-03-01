function sortArray(nums: number[]): number[] {
  /*
    [5,1,1,2,0,0]

    go with merge sort
    merge: merge two sorted array and return 
     */

  // divide

  if (nums.length <= 1) return nums;
  let l = 0;
  let r = nums.length;
  let m = Math.floor((l + r) / 2);
  return merge(sortArray(nums.slice(l, m)), sortArray(nums.slice(m, r)));

  function merge(arrA: number[], arrB: number[]): number[] {
    const res: number[] = [];
    let a = 0;
    let b = 0;
    while (a < arrA.length && b < arrB.length) {
      if (arrA[a] < arrB[b]) {
        res.push(arrA[a]);
        a++;
      } else {
        res.push(arrB[b]);
        b++;
      }
    }
    while (a < arrA.length) {
      res.push(arrA[a]);
      a++;
    }
    while (b < arrB.length) {
      res.push(arrB[b]);
      b++;
    }
    return res;
  }
}

export { sortArray };
