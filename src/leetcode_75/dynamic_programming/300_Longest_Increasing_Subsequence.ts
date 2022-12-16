/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums: number[]):number{
    /*
    space O(n)
    time  O(n^2)
    divide the problem as
    nums[0~-2] + nums[-1]
    for nums[0-2] we can give an max length array
    nums:[a,b,c,d,e,f]
    maxL:[1,1,2,2,3,4] // denote the maximun length at the index
    then we can take nums[-1]: g
    and evaluate what should we fill in in maxL[6]
    if g < a~f => maxL[6] = 1
    ...
    if g > f => maxL[6] = maxL[5] + 1 = 5
    */
   const record:number[] = new Array(nums.length).fill(1);
   for(let i=0;i <nums.length; i++){
     for(let j=0; j < i; j++){
         if(nums[i] > nums[j]){
             record[i] = Math.max(record[i], record[j] + 1);
         }
     }
   }
   return Math.max(...record);
};

var lengthOfLIS1dDP = function(nums:number[]):number{
    /*
    space O(n)
    time O(n^2)
     */
    const memoizeArr:number[] = [];
    function helper(i:number=0,prevInd:number=-1):number{
        // prev must < i
        console.log("i",i,"prevInd",prevInd,memoizeArr)
        if(i>=nums.length) return 0;
        if(memoizeArr[prevInd + 1] >= 0) return memoizeArr[prevInd + 1]
        const notTake = helper(i+1, prevInd);
        let take = 0;
        if( prevInd === -1 || nums[i] > nums[prevInd] ){
            take = 1 + helper(i+1, i); // update prevInd to current index
        }
        const max = Math.max(take, notTake);
        memoizeArr[prevInd +1] = max;
        return max
    };
    return helper();
};

var lengthOfLISNsquareSpace = function(nums:number[]):number{
    /*
    space O(n^2)
    time O(n^2)
     */
    const memoizeArr:number[][] = [];
    function helper(i:number=0,prevInd:number=-1):number{
        console.log(memoizeArr)
        if(i>=nums.length) return 0;
        const notTake:number =  memoizeArr[i]?.[prevInd+1] >= 0 ?memoizeArr[i]?.[prevInd+1] : helper(i+1, prevInd);
        let take = 0;
        if( prevInd === -1 || nums[i] > nums[prevInd] ){
            const next:number = memoizeArr[i+1]?.[i+1] >= 0 ?   memoizeArr[i+1]?.[i+1] : helper(i+1, i)
            take = 1 + next; // update prevInd to current index
        }
        const max = Math.max(take, notTake);
        if(!memoizeArr[i]){
            memoizeArr[i] = []
        }
        memoizeArr[i][prevInd + 1] = max;

        return max
    };
    return helper();
};
var lengthOfLISObjMem = function(nums:number[]):number{
    // exceed memory
    /*
    [10, 9, 2, 5, 3, 7, 101, 18]

    [1,2]
    i=0
    max(notTake===0, take)
    take=> 1 + helper(1,prev);
    */
/*
[-1, -2, -3, -4]
i=0, num:-1
*/
    const memoizeArr:{[key:string]:number}[] = [];
    function helper(i=0, prev=-Infinity):number{
        console.log(memoizeArr)
        if(i >= nums.length ) return 0;
        const notTake = memoizeArr[i+1]?.[prev] >= 0 ? memoizeArr[i+1][prev] :  helper(i+1, prev);
        let take = 0
        if( nums[i] > prev ){
            const next = memoizeArr[i+1]?.[nums[i]] >=0 ? memoizeArr[i+1][nums[i]] : helper(i+1, nums[i]);
            take = 1 + next;
        }
        const max = Math.max(notTake, take);
        if(memoizeArr[i]){
            memoizeArr[i][prev] = max;
        }else{
            memoizeArr[i] = {[prev]: max};
        } 
        return max;
    }

    return helper();
}


var lengthOfLISHashMap = function(nums:number[]):number{
    let record:{[key:number]:number} = {};
    // key: the last number, value: count
    nums.forEach(num=>{
        const replicated:{[key:number]:number} = {};
        let isSet = false;
        for(let key in record){
            const numKey = parseInt(key);
            if( numKey < num){
                isSet = true;
                if(!!replicated[num]){
                  replicated[num] = Math.max(replicated[num], record[numKey] + 1)
                }else{
                    replicated[num] = record[numKey] + 1;
                }
            }
        }
        //console.log("num",num,record,"replicated",replicated);
        record = {...record, ...replicated};
        if(!isSet){
            if(!record[num] ){
              record[num] = 1;
            }
        }
    })
    let max=-Infinity;
    for(let key in record){
        max = Math.max(record[key],max)
    }
    return max;
};

export {lengthOfLIS}