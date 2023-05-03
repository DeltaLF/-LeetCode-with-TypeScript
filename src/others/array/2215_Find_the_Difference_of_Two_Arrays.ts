function findDifference(nums1: number[], nums2: number[]): number[][] {
  /*
    Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
    Output: [[3],[]]
     */
  const res: number[][] = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  set1.forEach((num) => {
    if (!set2.has(num)) {
      res[0].push(num);
    }
  });
  set2.forEach((num) => {
    if (!set1.has(num)) {
      res[1].push(num);
    }
  });
  return res;
}

export { findDifference };
