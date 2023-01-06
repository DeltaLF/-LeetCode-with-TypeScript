import { endianness } from "os";

/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function(points:number[][]):number{
    points.sort((a,b)=>a[0] - b[0]);
    let start = points[0][0];
    let end = points[0][1];
    let count = 1;
    let i = 0;
    while( i < points.length -1 ){
        if( end < points[i+1][0] ){
            // not overlaping with next interval
            count++;
            start = points[i+1][0];
            end = points[i+1][1];
        }else{ 
            // overlaping happens so update end, start to overlaping area
            end = Math.min( end , points[i+1][1]);
            start = Math.max( start , points[i+1][0]);
        }
        i++;
    } 
    return count
}

var findMinArrowShotsOld = function(points:number[][]):number {
    /** 
     *   [[1,2],[2,3],[3,4],[4,5]]
     *    find the overlap area
     * note: 
     *  [[10,16],[2,8],[1,6],[7,12]] the ballon doesn't listed in order
     */
    points.sort((a,b)=>{ return a[0] - b[0]});
    let count = 1;
    // iterate through the ballons 

    /**
     *     [[ 1, 9 ],  [ 1, 3 ],[ 2, 5 ],  [ 2, 10 ], [ 3, 9 ],  [ 7, 16 ], [ 7, 12 ], [ 9, 11 ],
      [ 9, 16 ]]
      s=1, e=9
      i=1
      s=1 e=3
      i=2
      s=1 e=2
      i=3
      s=1 e=2
     */

    console.log(points);
    let start = points[0][0]
    let end = points[0][1]
    let i =0;
    while(i < points.length - 1){
        console.log("in i:",i,points[i], "i+1:",points[i+1],"start:",start,"end:",end)
    // merge two ballons if they are overlaping and keeps the short boundary
        if( end < points[i+1][0] ){
            // no overlapping between i and i+1 ballon
            count++;
            start = points[i+1][0]
            end = points[i+1][1]
        }else{
            // overlapping happens
            // [1,3]  [2,5]  [2,3]
            start = Math.max(start, points[i+1][0])
            end = Math.min(end, points[i+1][1])
        }
        i++;
    };

    return count;    
};

export {findMinArrowShots};