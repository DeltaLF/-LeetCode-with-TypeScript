/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var combinationSum4 = function(nums:number[], target:number):number {
   const memoizedArr:number[] = [1]; 
   for(let i=1; i <= target; i++){ // target number
      memoizedArr[i] = 0;
      for(let j=0; j < nums.length;j++){  // nums index
         if( i - nums[j] < 0 || !memoizedArr[i - nums[j]]) continue;
         memoizedArr[i] += memoizedArr[i - nums[j]]
      }
   }
   return memoizedArr[target];
}

var combinationSum4WithSort = function(nums:number[], target:number):number {
   /*
   mArr[x][y]: first x nubmers make up target number y
   it's like climbing stairs, we don't care what happened before, only care the last step
   mArr[x][y] = mArr[x][y - nums[x]] + mArr[x][y - nums[x-1]] + mArr[x][y - nums[x-2]]....
   */
   // [nums.lengt][target+1]
   nums.sort((a,b)=>a-b);
   if( nums[0] > target ) return 0
   const memoizedArr:number[] = [1]; 
   for(let i=nums[0]; i <= target; i++){ // target number
      let sum = 0;
      for(let j=0; j < nums.length;j++){  // nums index
         if(i - nums[j] < 0) break;
         if(!memoizedArr[i - nums[j]]) continue;
         sum = sum + memoizedArr[i - nums[j]]
      }
      memoizedArr[i] = sum;
   }
   return memoizedArr[target];
};

export {combinationSum4}