import { PriorityQueue } from "datastructures-js";
type PriObj = { val: number };
function maxScore(nums1: number[], nums2: number[], k: number): number {
  const indArr: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    indArr[i] = i;
  }
  indArr.sort((a, b) => nums2[b] - nums2[a]); // small -> large
  const sorted1: number[] = [];
  const sorted2: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    sorted1[i] = nums1[indArr[i]];
    sorted2[i] = nums2[indArr[i]];
  }

  const q = new PriorityQueue<PriObj>((a, b) => {
    return b.val - a.val;
  });

  console.log(nums1, nums2, indArr, sorted1, sorted2);
  let i = 0;
  let total = 0;
  let max = 0;
  while (i < nums1.length) {
    total += sorted1[i];
    q.enqueue({ val: sorted1[i] });
    console.log("i", i, total, sorted2[i]);
    if (q.size() === k) {
      max = Math.max(max, total * sorted2[i]); //sorted2[i] will always be the smallest since it is sorted
    }
    if (q.size() >= k) {
      const obj = q.pop();
      total -= obj.val;
    }
    i++;
  }
  return max;
}

function maxScoreBadAlloc(nums1: number[], nums2: number[], k: number): number {
  /*
    Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
    Output: 12
    Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
    Output: 30
    
     */
  const memoObj: Record<string, number> = {};

  function findMax(kLeft = k, sum = 0, min = Infinity, i = 0): number {
    if (kLeft === 0) {
      return Math.max(sum * min);
    }
    if (i >= nums1.length) return 0;
    const key = `${kLeft}_${sum}_${min}_${i}`;
    if (memoObj[key] !== undefined) return memoObj[key];
    // take
    const take = findMax(
      kLeft - 1,
      sum + nums1[i],
      Math.min(min, nums2[i]),
      i + 1
    );
    // not take
    const notTake = findMax(kLeft, sum, min, i + 1);
    return (memoObj[key] = Math.max(take, notTake));
  }
  return findMax();
}

export { maxScore };
