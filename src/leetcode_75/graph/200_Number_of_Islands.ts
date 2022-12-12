/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid:number[][]):number{
    const m = grid.length;
    const n = grid[0].length;
    function traverse(row:number, col:number){
        if(grid[row][col] !== 1) return;
        grid[row][col] = -1;
        if(row - 1 >= 0) traverse(row - 1,col)
        // right
        if(col + 1 < n) traverse(row,col + 1)
        // down
        if(row +1 < m) traverse(row + 1,col)
        // left
        if(col - 1 >= 0) traverse(row ,col - 1)
    }
    let islandCount = 0;
    for(let row=0; row < m; row++){
        for(let col=0; col < n; col++){
            if(grid[row][col] !== 1) continue;
            islandCount++;
            traverse(row, col);
        }
    }
    return islandCount;
}

var numIslandsII = function(grid:number[][]):number {
    /*
    1. locate the first island
    2. traverse the island and mark as -1 (claimed island)
    */
   const m = grid.length;
   const n = grid[0].length;
   const placeToVisited:number[][] = [];
   let visitedPlace =0;
   // [row, col]
   placeToVisited.push([0, 0]);
   function traverse(row:number, col:number,type:number){
    // type: current type of place we are now travering 
    if( grid[row][col] < 0 ) return; 
    if(type !== grid[row][col]){
        placeToVisited.push([row, col]);
        return;
    }
    // type match current traversing type
    grid[row][col] = -1;  // mark as visited
    // up
    if(row - 1 >= 0) traverse(row - 1,col,type)
    // right
    if(col + 1 < n) traverse(row,col + 1,type)
    // down
    if(row +1 < m) traverse(row + 1,col,type)
    // left
    if(col - 1 >= 0) traverse(row ,col - 1,type)
   };
   while(placeToVisited.length > 0){
    const [row, col] = placeToVisited.pop()!;
    const placeType = grid[row][col];
    /*
    placeType:
    land:     1
    sea:      0
    visited: -1
     */
    if(placeType === 1) visitedPlace++;
    // start to traverse
    traverse(row,col, placeType);
   };
   return visitedPlace;
};

export { numIslands };