/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums:number[]):number{
    let a0 = 0;
    let a1 = nums[0];
    let ans:number;
    for(let i=2;i <= nums.length;i++){
        ans = Math.max( nums[i-1] + a0, a1);
        a0 = a1;
        a1 = ans;
    }
    return a1;
}

function robBottomUp(nums:number[]):number{

    const memoizedArr:number[] = [];
    memoizedArr[0] = 0;
    memoizedArr[1] = nums[0];
    for(let i=2;i <= nums.length;i++){
        memoizedArr[i] = Math.max( nums[i-1] + memoizedArr[i-2], memoizedArr[i-1]);
    }
    return memoizedArr[nums.length];
};

var robTop2Bottom = function(nums:number[]):number {

    /*
    dynamical programming:
    1. write down the recursive function
    2. use memorization to optmize time complexity
     */
    const memorizeArr:number[] = [];

    function helper( index:number = 0):number{
        if(index > nums.length - 1) return 0;
        if( memorizeArr[index] !== undefined ) return memorizeArr[index]; 
        // you can either take or skip current
        const take = nums[index] + helper(index + 2); // 2 for not triggering alert
        const skipCurrent = helper(index+1);
        const maxProfitAtCurrentInd = Math.max(take, skipCurrent);
        memorizeArr[index] = maxProfitAtCurrentInd;
        return maxProfitAtCurrentInd; 
    }
    return helper();
};

export {rob};