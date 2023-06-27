import { PriorityQueue } from "datastructures-js";

interface PqType {
  num1: number;
  num2: number;
  index2: number;
}
function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const ans: number[][] = [];
  const pq = new PriorityQueue<PqType>((a, b) =>
    a.num1 + a.num2 - (b.num1 + b.num2) === 0
      ? b.num1 - a.num1
      : a.num1 + a.num2 - (b.num1 + b.num2)
  );
  if (nums1.length === 0 || nums2.length === 0) return ans;
  for (let i = 0; i < nums1.length; i++) {
    pq.enqueue({ num1: nums1[i], num2: nums2[0], index2: 0 });
  }
  while (k > 0 && pq.size() > 0) {
    k--;
    const node = pq.dequeue();
    ans.push([node.num1, node.num2]);
    // ind1 ind2 is used then => add ind1 ind2+1
    if (node.index2 + 1 >= nums2.length) continue;
    pq.enqueue({
      num1: node.num1,
      num2: nums2[node.index2 + 1],
      index2: node.index2 + 1,
    });
  }

  return ans;
}

function kSmallestPairsBadAlloc(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  /*
    Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
    Output: [[1,2],[1,4],[1,6]]
    Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
    Output: [[1,1],[1,1]]
    Input: nums1 = [1,2], nums2 = [3], k = 3
    Output: [[1,3],[2,3]]


    create a priority queue
    {num1:number, num2:number}
    ind1 ref to index in nums1 
    ind2 ref to index in num2
    initial with 
    ind1=0, ind2=0
    pq enqueue (num1[0],num2[0:])  and (num1[1:],num2[0])  (watch out duplicate)

     */
  const ans: number[][] = [];
  const pq = new PriorityQueue<PqType>((a, b) =>
    a.num1 + a.num2 - (b.num1 + b.num2) === 0
      ? b.num1 - a.num1
      : a.num1 + a.num2 - (b.num1 + b.num2)
  );
  let ind1 = 0;
  let ind2 = 0;

  function enqueueBoth() {
    if (ind1 >= nums1.length || ind2 >= nums2.length) return;
    for (let i = ind2; i < nums2.length; i++) {
      pq.enqueue({ num1: nums1[ind1], num2: nums2[i] });
    }
    ind1++;
    if (ind1 >= nums1.length || ind2 >= nums2.length) return;
    for (let i = ind1; i < nums1.length; i++) {
      pq.enqueue({ num1: nums1[i], num2: nums2[ind2] });
    }
    ind2++;
  }
  // inital

  enqueueBoth();
  let val1 = ind1 >= nums1.length ? Infinity : nums1[ind1];
  let val2 = ind2 >= nums2.length ? Infinity : nums2[ind2];
  let i = 0;
  while (i < k) {
    const node = pq.front();
    if (!node) break;
    if (node.num1 + node.num2 < val1 + val2) {
      pq.dequeue();
      ans.push([node.num1, node.num2]);
      i++;
    } else {
      if (ind1 < nums1.length && ind2 < nums2.length) {
        val1 = nums1[ind1];
        val2 = nums2[ind2];
        enqueueBoth();
      } else {
        val1 = Infinity;
        val2 = Infinity;
      }
    }
  }

  return ans;
}

export { kSmallestPairs };
