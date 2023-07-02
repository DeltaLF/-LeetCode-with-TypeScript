function maximumRequests(n: number, requests: number[][]): number {
  /*
   Input: n = 5, requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]
   Output: 5
   
  1 <= n <= 20
  1 <= requests.length <= 16
  brute force 
  2^n = 2**16 65536 seems accecptable
  
  */

  function permutation(i = 0, tran = new Array(n).fill(0)): number {
    if (i >= requests.length) {
      if (tran.every((balance) => balance === 0)) return 0;
      return -Infinity;
    }
    const [from, to] = requests[i];
    tran[from]--;
    tran[to]++;
    const take = permutation(i + 1, tran) + 1;
    tran[from]++;
    tran[to]--;
    const notTake = permutation(i + 1, tran);
    return Math.max(take, notTake);
  }
  return permutation();
}
export { maximumRequests };
