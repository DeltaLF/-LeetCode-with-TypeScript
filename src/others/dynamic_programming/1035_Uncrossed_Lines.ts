function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const N1 = nums1.length;
  const N2 = nums2.length;

  const memoArr: number[][] = [];
  for (let i = 0; i < N1; i++) {
    memoArr[i] = [];
  }
  function cross(n1 = 0, n2 = 0): number {
    if (n1 >= N1 || n2 >= N2) return 0;
    if (memoArr[n1][n2] !== undefined) {
      return memoArr[n1][n2];
    }

    //try to match n1
    let match = 0;
    for (let i = n2; i < N2; i++) {
      if (nums1[n1] === nums2[i]) {
        match = cross(n1 + 1, i + 1) + 1;
        break;
      }
    }
    // skip n1
    const skipCurr = cross(n1 + 1, n2);
    memoArr[n1][n2] = Math.max(match, skipCurr);
    return memoArr[n1][n2];
  }

  return cross();
}

export { maxUncrossedLines };
