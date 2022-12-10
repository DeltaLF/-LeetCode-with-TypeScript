/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums:number[]):number {
    /*
    l
    r
    [  a, b, c, d, ,....e]
       l
              r
    [  -5, -3, 2, 1, 6, 7, -7, -10, 20]
               l
                            r 
    sum = -5 max = -5
    sum = -3 max = -3
    sum = 2  max = 2
    sum = 3  max = 3
     */
    let max = -Infinity;
    let sum = 0;
    let start = 0;
    let end = 0;
    while(end < nums.length){
        sum = sum + nums[end];
        max = Math.max(max, sum);
        if(sum < 0){
            start++;
            sum = 0;
        }
        end++;
    }
    return max;
};

export {maxSubArray};