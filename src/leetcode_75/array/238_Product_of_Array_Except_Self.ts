/*
[1,5,2,3,6]

[1, 1*5, 1*5*2, 1*5*2*3, 1*5*2*3*6]

[ 6*3*2*5*1,6*3*2*5,6*3*2,6*3,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums:number[]):number[] {
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
   
   const res:number[] = [1];
   for(let i=0;i <nums.length-1; i++){
    res[i + 1] = res[i] * nums[i]
   } 
   let right = nums[nums.length - 1];
   for(let r=nums.length -2;r >= 0; r--){
    res[r] = res[r] * right;
    right = right * nums[r]
   }
    return res
};

export {productExceptSelf}