/**
 * @param {number[]} nums
 * @return {number}
 */


var longestConsecutive = function(nums:number[]):number{
    // find and union 
    let result = 0;
    const map:{[key:number]:number} = {};
    for(let num of nums){
        if(!!map[num]) continue; // duplicated number
        // find consecutive number group
        let left = map[num - 1] ? map[num - 1] : 0;
        let right = map[num + 1] ? map[num + 1] : 0;
        let sum = left + 1 + right;
        map[num] = sum;
        result = Math.max(sum, result);
        // union consecutive number group
        /*
        note: we need to update the sum to the boundary
        ex:{
            2:2
            3:2
        }
        when there is a new number 4:
        left = 2 // map[4 - 1]
        we will update both 4 and 3-2
        becasue only boundary matter!!
        {
            2: 3
            3: 2
            4: 3
        }
        
        */
        map[num - left] = sum;
        map[num + right] = sum;
    };
    return result
}

var longestConsecutiveWithSet = function(nums:number[]):number{
    if(nums.length === 0) return 0;
    const set = new Set(nums);
    let maxCount =0;
    let count =0;
    let prev:number=Infinity;
    console.log(set)
    for(let num of set){
        console.log(num)
        if(prev === num -1){
            count++;
            maxCount = Math.max(maxCount, count);
        }else{
            count = 0;
        }
        prev = num
    }
    return maxCount + 1;
}

var longestConsecutiveWithSort = function(nums:number[]) {
    if(nums.length === 0) return 0;
    /* 
    answer <= nums.length

    if x - y > nums.length => one of it must not included in the answer

    map {}

    itertate through
    */
   nums.sort((a,b)=>{return a - b});
   let maxCount =0;
   let count =0;
   let prev:number=Infinity;
   for(let num of nums){
    if(num === prev + 1){
        count++;
        maxCount = Math.max(count, maxCount);
    }else{
        if(num === prev) continue
        count =0;
    }
    prev = num;
   }
   return maxCount + 1;
};

export {longestConsecutive};