/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums:number[]):number{
    let max = Math.max(...nums);
    let currMax = 1;
    let currMin = 1;
    let tempMax:number;
    for(let num of nums){
        tempMax = currMax;
        currMax = Math.max(currMax*num, currMin*num, num);
        currMin = Math.min(tempMax*num, currMin*num, num);
        max = Math.max(currMax, max);
    }
    return max;
};

var maxProductDP = function(nums:number[]):number{
    /*
    fail when apply memoizedObj
    try dyanmic programming 
    */

    /*
    [2,3,5]
    take = help(1,2); //
    notTake = help(1) => help([3,5])
    */
   const memoizedObj:{[key:string]:number} = {};
    function help(ind:number=0, prev:number|null=null):number{
        if(ind === nums.length -1 ){

            return Math.max((prev === null ? 1 : prev) * nums[nums.length - 1], nums[nums.length - 1], (prev === null ? -Infinity : prev) );
        } 
        // if(prev === null){
        //   // no prev
        //   if( Number.isInteger( memoizedObj[ind.toString() + 'f'] )){
        //     return memoizedObj[ind.toString() + 'f']
        //   }
        // }else{
        //   if( Number.isInteger( memoizedObj[ind.toString() + 't'] )){
        //       return memoizedObj[ind.toString() + 't'] * prev
        //     } 
        // }

        const take = help(ind+1, (prev === null ? 1 : prev) * nums[ind]);
        const notTake = help(ind+1)
        //memoizedObj[ind.toString() + 't'] = take;
        //memoizedObj[ind.toString() + 'f'] = notTake; 
        return Math.max(take, notTake, prev === null ? -Infinity : prev)
    }
    return help()

};

var maxProductBruteForce = function(nums:number[]):number {
    /*
    key point is to detect 0, negative number
    
    */
    let max:number = - Infinity;
    const reRunStack = [0];
    for(let ind=0;ind < nums.length -1; ind++){
        if(nums[ind] <= 0){
            reRunStack.push(ind + 1);
        }
    }
    // iterate through
    for(let reRunInd of reRunStack){
        let localMax:number = 1;
        for(let i=reRunInd; i < nums.length;i++){
            localMax = localMax * nums[i];
            max = Math.max(max, localMax);
            if(localMax === 0) break;
        }
    }
    return max;    
};

export { maxProduct };