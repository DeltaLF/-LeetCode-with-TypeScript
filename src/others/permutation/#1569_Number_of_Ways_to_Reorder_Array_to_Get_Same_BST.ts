function numOfWays(nums: number[]): number {
  /*
3 4 5 1 2
   3
  1  4
   2   5

   4512 permutation : 4! 
   but the order of [4,5], [1,2] are uncahangable  4!/(2!*2!)
       3
    1     5
     2   4  6
       
*/
  //   function factorial(n: number): number {
  //     if (n <= 1) return 1;
  //     return n * factorial(n - 1);
  //   }

  const N = nums.length;

  // tabulation factorial
  const MODULE: bigint = BigInt(10 ** 9 + 7);
  const fTable: bigint[] = [BigInt(1), BigInt(1)];
  for (let i = 2; i <= N; i++) {
    fTable[i] = BigInt(i) * fTable[i - 1];
  }

  function recurrsive(numArr: number[]): bigint {
    if (numArr.length <= 2) return BigInt(1);
    const head = numArr[0];
    const small: number[] = [];
    const large: number[] = [];
    for (const num of numArr) {
      if (num < head) small.push(num);
      if (num > head) large.push(num);
    }

    return (
      (fTable[small.length + large.length] /
        (fTable[small.length] * fTable[large.length])) *
      recurrsive(small) *
      recurrsive(large)
    );
  }

  return Number(recurrsive(nums) % MODULE) - 1;
}
export { numOfWays };
