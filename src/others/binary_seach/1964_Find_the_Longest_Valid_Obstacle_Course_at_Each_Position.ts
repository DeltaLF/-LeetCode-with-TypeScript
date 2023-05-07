function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
  /*
    [1,1,2,3,2,3,4,5,3,5]
    [1,2,3,4,4,5,6,7,6,8]
     1 
     11 
     112 
     1123 
     1122
     11223
     112234
     1122345
     112233
     11223455
     {
        1:[1 1]
        // 2:[1 1 2]
        2:[1 1 2 2]
        3:[1 1 2 3 3 3]
        4:[1 1 2 3 3 4]
        5:[1 1 2 3 3 4 5 5]
     }
     [1,1,2,2,3,3,5,5]
     {
        1:[1 1]
        2:[1 1 2 2]
        3:[1 1 2 3]
     }

     [5,1,5,5,1,3,4,5,1,4]
     [1,1,3]
     [xxx] binary search to find currObs
    */
  function binarySearch(arr: number[], target: number) {
    // find the index of the largest number that smaller then target
    /*
        cases:
        [1,1,1,1,1,1,1,1]
        */
    let l = 0;
    let r = arr.length - 1;
    let m = Math.floor((l + r) / 2);
    while (l < r) {
      if (target === arr[m]) {
        if (m + 1 === arr.length || arr[m + 1] > target) break;
        // arr[m+1] == arr[m+1]
        l = m + 1;
      } else if (target > arr[m]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
      m = Math.floor((l + r) / 2);
    }
    return m;
  }
  const res: number[] = [];
  const minHighOfMaxLen: number[] = [];
  for (const obstacle of obstacles) {
    const ind = binarySearch(minHighOfMaxLen, obstacle);
    if (ind === -1) {
      // minHighOfMaxLen.length ===0
      minHighOfMaxLen[0] = obstacle;
      res.push(1);
    } else {
      if (minHighOfMaxLen[ind] > obstacle) {
        // update curr ind
        minHighOfMaxLen[ind] = obstacle;
        res.push(ind + 1); // ind is 0-based
      } else {
        // update next ind
        minHighOfMaxLen[ind + 1] = obstacle;
        res.push(ind + 2);
      }
    }
  }
  return res;
}

export { longestObstacleCourseAtEachPosition };
