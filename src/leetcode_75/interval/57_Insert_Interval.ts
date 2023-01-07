/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals:number[][], newInterval:number[]):number[][]{
    let i =0;
    while(i < intervals.length){
        if(newInterval[0] < intervals[i][0] || newInterval[0] < intervals[i][1]){
            break;
        }
        i++
    }
    intervals.splice(i,0,newInterval);
    // fixing phase
    i=0
    while(i < intervals.length - 1){
        if(intervals[i][1] >= intervals[i+1][0] || intervals[i][1] >= intervals[i+1][1]){
            // merge needed
            // update arr[i]
            intervals[i] = [Math.min(intervals[i][0], intervals[i+1][0]), Math.max(intervals[i][1], intervals[i+1][1])]
            // remove arr[i+1]
            intervals.splice(i+1,1);
        }else{
            i++;
        }
    }

    return intervals;
}

var insertFail = function(intervals:number[][], newInterval:number[]):number[][] {
    return []
    /*
    intervals =       [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    consider
    1. BOTH l and r are less  : do nothing
    [0,1]   [3,5]
    // merge:
    2. l < 3 but r > 3
    [0,4]   [3,5]
    [0,5]   [findMin, findMax]
    3. l < 3 but r > 5
    [findMin, findMax]


    what we really need to know
    4 located at which interval: 0: v 1 v 2 v  1:  v 3 v 5 v
    we need two number to express a:for index b: -1:less 0:in the middle  1: larger
    // 1:larger will not actually be used   
    note [0,1] === [1,-1] 

    new approach: divide into two phase:
    1. make a inperfect intervals
    2. check and fix up

    */
   // find when 4 is not larger
   // record when the flip happens
   const leftInd: number[]=[];
   const rightInd: number[] =[];
   let i =0;
   function findFlip(i:number=0,record:number[],value:number):number{
    while(i < intervals.length){
        for(let j=0;j<2;j++){
            if( intervals[i][j] > value){
                record.push(i);
                record.push(j - 1);
                /*
                if j=0: value must be in the less pos
                if j=1  value be the middle position
                 */
                return i
            }
        }
        i++;
     }
     record.push(i)
     record.push(-1)
   return i;
   }
   i = findFlip(i, leftInd, newInterval[0]);
   findFlip(i, rightInd, newInterval[1]);
   // simplest case: no overlap
   if(leftInd[0] === rightInd[0] && leftInd[1] === -1 && rightInd[-1] === -1){
    intervals.splice(leftInd[0],0,newInterval);
   }
   else if(leftInd[1] === 0 && rightInd[1] === -1){
   // left in middle right not
    intervals[leftInd[0]][1] = newInterval[1];
   }else if(leftInd[1] === -1 && rightInd[1] === 0){
   // right in middlle not
    intervals[rightInd[0]][0] = newInterval[0];
   }else{
   // left and right both in middle

   }

   // fix phase: left and right index might be different   
};


export { insert}