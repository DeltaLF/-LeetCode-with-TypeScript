/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix:number[][]):number {
    /*
    seems like a DP question
    */
   const m = matrix.length;     // height (row count)
   const n = matrix[0].length;  // width  (col count)
   const memoizedArr:number[][] = [];
   for(let i=0; i<m;i++){
    memoizedArr.push([]);
   }
    // try to write down rercirsive solution for a single cell
   function foundLIP( row:number, col:number):number{
    if( row < 0 || col < 0 || row > m -1 || col > n-1 ){
        return 0;
    }
    if( !!memoizedArr[row] && !!memoizedArr[row][col] ) return memoizedArr[row][col];
    const currentVal = matrix[row][col];
    const goUp = matrix[row-1] !== undefined && matrix[row-1][col] !== undefined && currentVal < matrix[row-1][col] ? foundLIP(row -1 , col) :      0;
    const goRight = matrix[row] !== undefined && matrix[row][col+1] !== undefined && currentVal < matrix[row][col+1] ? foundLIP(row , col+1) :    0;
    const goDown =  matrix[row+1] !== undefined && matrix[row+1][col] !== undefined && currentVal < matrix[row+1][col] ? foundLIP(row +1 , col) :   0;
    const goLeft =  matrix[row] !== undefined && matrix[row][col-1] !== undefined && currentVal < matrix[row][col-1] ? foundLIP(row , col-1) : 0;
    const max = Math.max(goUp, goRight,goDown, goLeft); 
    return memoizedArr[row][col] = 1 + max; // this record is not fully correct 
   }
   let totalMax = 0;
   for(let row=0; row < m; row++){
    for(let col=0; col < n; col++){
        totalMax = Math.max(totalMax, foundLIP(row,col));
    }
   }
   return totalMax;    
};

export { longestIncreasingPath }