function productExceptSelf(nums: number[]): number[] {
  /*
part1  [1,          n1, n1n2...,n1n2..nn-1]
part2  [nn*nn-1..n2,....    nn,   1       ] 
ans = part1 * part2
  */
  const res: number[] = [1];
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    res.push(res[res.length - 1] * nums[i]); // part one
  }
  nums.push(1);
  for (let i = 1; i < n; i++) {
    nums[n - i - 1] = nums[n - i - 1] * nums[n - i]; // transform nums to part2
    res[n - 1 - i] = res[n - 1 - i] * nums[n - i];
  }
  return res;
}

function productExceptSelfNotOptimized(nums: number[]): number[] {
  /*
  T: O(n) divide / is forbidden
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]


          1 2 3 4 5
  input: [2,3,3,5,6]  output: [270,180,180,108,90]
  
  [1,  2,   6,   18,   90]
   x 
       n1
         n1n2
             n1n2n3 
                  n1n2n3n4 
  [270, 90,  30,   6,   1 ]
n5n4n3n2     
     n5n4n3
          n5n4     
                  n5 
                       x
  [1,n5,n5n4,....n5n4n3..n2]
   */
  const reverse: number[] = [1];
  const inorder: number[] = [1];
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    reverse.push(reverse[reverse.length - 1] * nums[n - 1 - i]);
    inorder.push(inorder[inorder.length - 1] * nums[i]);
  }
  for (let i = 0; i < n; i++) {
    inorder[i] *= reverse[n - i - 1];
  }
  return inorder;
}

/*
[1,5,2,3,6]

[1, 1*5, 1*5*2, 1*5*2*3, 1*5*2*3*6]

[ 6*3*2*5*1,6*3*2*5,6*3*2,6*3,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfOld = function (nums: number[]): number[] {
  /*
     [n1, n1*n2,..... n1*n2*n3...]
     [nn*nn-1*.., nn-1*nn-2...,nn]
    
    res:
    with length nums.length
    [1,n0,n0*n1,....,n0*n1..*n-2,  ,n0*n1..*n-1 ]
    corresponding
    [n1, n2, ....         n-1,         n]
                           *        right
                *       right*n-1
    
     */

  const res: number[] = [1];
  for (let i = 0; i < nums.length - 1; i++) {
    res[i + 1] = res[i] * nums[i];
  }
  let right = nums[nums.length - 1];
  for (let r = nums.length - 2; r >= 0; r--) {
    res[r] = res[r] * right;
    right = right * nums[r];
  }
  return res;
};

export { productExceptSelf };
