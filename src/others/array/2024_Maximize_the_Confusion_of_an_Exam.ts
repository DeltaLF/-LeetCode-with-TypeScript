import { Queue } from "datastructures-js";

function maxConsecutiveAnswers(answerKey: string, k: number): number {
  /*
    Input: answerKey = "TTFF", k = 2 Output: 4
    Input: answerKey = "TFFT", k = 1 Output: 3
    Input: answerKey = "TTFTTFTT", k = 1 Output: 5


    l r 
    go through answerKey twice: 
    the first time target is to find the longest t
    the second time target is to find the longest f 
     */
  const N = answerKey.length;
  function findLongest(target: "T" | "F" = "T") {
    let kLeft = k;
    let max = 0;
    let l = 0;
    let r = 0;
    const q = new Queue<number>();
    while (r < N) {
      if (answerKey[r] !== target) {
        q.enqueue(r);
        if (kLeft > 0) {
          kLeft--;
        } else {
          l = q.dequeue() + 1; // the left most need to be swaped back
        }
      }
      r++;
      max = Math.max(max, r - l);
    }
    return max;
  }
  return Math.max(findLongest("T"), findLongest("F"));
}

export { maxConsecutiveAnswers };
