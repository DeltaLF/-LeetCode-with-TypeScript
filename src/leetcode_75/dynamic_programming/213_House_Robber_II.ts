/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums:number[]):number {
    /*
     nums = [1,2,3,1]
     think:
     circular vs append last one
     [1,2,3,1]    [1,2,3,1,1]
     or 
     we run twice:
     1. no end
     [1,2,3]
     2. no head
     [2,3,1]

     */
    if(nums.length === 1) return nums[0]; 
    let memorizedArr:number[] = [];
    function robDecision(house:number=0):number{
        if(house >= nums.length) return 0;
        if(memorizedArr[house] >= 0) return memorizedArr[house];
        const rob = nums[house] + robDecision(house+2);
        const notRob =  robDecision(house+1);
        return memorizedArr[house] = Math.max(rob, notRob);
    }
    const noFirst = robDecision(1);
    memorizedArr = [];
    nums.pop();
    const noLast = robDecision(0);
    return Math.max(noFirst, noLast);    
};

export {rob};