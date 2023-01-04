/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals:number[][]):number[][] {
    // make sure the intervals is sorted by the start
    intervals.sort((a,b)=>{return a[0] - b[0]}); 
    const answer:number[][] = [];
    let i = 0;
    while( i < intervals.length){
        const start = intervals[i][0];
        let end = intervals[i][1];
        let j = 0;
        i++;
        // check interval should merge or not
        while(i + j < intervals.length){
            if(end < intervals[i + j][0]){
                // no need to merge
                break;
            }else{
                // merge the i+j interval
                // note: current end is not necessary less then next interval end
                end = Math.max(end, intervals[i + j][1]);
            }
            j++;
        }
        i+= j;
        answer.push([start, end]);
    }
    return answer;
};

export {merge};