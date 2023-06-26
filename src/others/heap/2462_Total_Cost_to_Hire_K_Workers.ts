import { PriorityQueue } from "datastructures-js";

interface pqType {
  wage: number;
  from: "l" | "r";
}
function totalCost(costs: number[], k: number, candidates: number): number {
  /*
    Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4

    a.wage - b.wage 
    if < 0 [a,b]
    if > 0 [b,a]
    if ==0 [a,b]

     */

  const pq = new PriorityQueue<pqType>((a, b) =>
    a.wage === b.wage
      ? a.from.charCodeAt(0) - b.from.charCodeAt(0) // l < r
      : a.wage - b.wage
  );
  let l = 0;
  let r = costs.length - 1;
  for (let i = 0; i < candidates; i++) {
    if (l <= r) {
      pq.enqueue({ wage: costs[l], from: "l" });
    } else {
      break;
    }
    l++;
    if (l <= r) {
      pq.enqueue({ wage: costs[r], from: "r" });
    } else {
      break;
    }
    r--;
  }
  let sum = 0;
  for (let i = 0; i < k; i++) {
    const candidate = pq.dequeue()!;
    sum += candidate.wage;

    if (l <= r) {
      if (candidate.from === "l") {
        pq.enqueue({ wage: costs[l], from: "l" });
        l++;
      } else {
        // from right
        pq.enqueue({ wage: costs[r], from: "r" });
        r--;
      }
    }
  }
  return sum;
}

export { totalCost };
