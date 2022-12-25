/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums:number[], queries:number[]):number[] {
    nums.sort((a,b)=>a-b);
    for(let i=1;i < nums.length;i++){
        nums[i] = nums[i] + nums[i-1];
    }
    const answer:number[] = [];
    for(let query of queries){
        // use binary search
        let l = 0;
        let r = nums.length-1;
        let middle:number=0;
        while(l < r){
            middle = Math.floor((r+l)/2);
            if(nums[middle] > query){
                r = middle - 1;
            }else if(nums[middle] < query){
                l = middle + 1;
            }else{
                break;
            }
        }
        middle = Math.floor((r+l)/2);
        answer.push( nums[middle] > query ? middle : middle +1 )
    }
    return answer;
};

export { answerQueries }