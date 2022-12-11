/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights:number[][]):number[][]{
    const [m,n] = [heights.length, heights[0].length];
    // record all the nodes that can reach pacific
    const pacificArray:boolean[][] = [];
    // record all the nodes that can reach atlantic
    const atlanticArray:boolean[][] = [];
    // result will be the intersection of pacificArray and atlanticArray
    const result:number[][] = [];
    for(let row=0;row < m;row++){
        pacificArray.push([]);
        atlanticArray.push([]);
        for(let col=0;col < n;col++){
            pacificArray[row].push(false);
            atlanticArray[row].push(false)

        }
    }

    /*
    1 1
    1 1
     */
    function checkFlow(mapArray:boolean[][],pos:number[]){
        const [row, col] = pos;
        if(mapArray[row][col]) return;
        mapArray[row][col] = true;
        //console.log("check flow, paf",pacificArray, "atl",atlanticArray,"pos",pos)
        if(pacificArray[row][col] && atlanticArray[row][col]) result.push([row, col]);
        // check the adjacent nodes
        // check up
        if( row -1 >= 0 && heights[row - 1][col] >= heights[row][col] ) checkFlow(mapArray, [row - 1, col]);
        // check right
        if( col + 1 <= n - 1 && heights[row ][col + 1] >= heights[row][col]) checkFlow(mapArray, [row, col + 1]);
        // check down
        if( row + 1 <= m - 1 && heights[row + 1][col] >= heights[row][col]) checkFlow(mapArray, [row + 1, col]);
        // check left
        if( col - 1 >= 0 && heights[row][col - 1] >= heights[row][col]) checkFlow(mapArray, [row, col - 1]);
    }

    for(let row=0; row < m; row++){
        checkFlow(pacificArray,[row,0])
        checkFlow(atlanticArray,[row, n -1])
    }
    for(let col=0; col < n; col++){
        checkFlow(pacificArray,[0,col])
        checkFlow(atlanticArray,[m - 1, col])
    }
    console.log(result)
    return result;
};

var pacificAtlanticFail = function(heights:number[][]):number[][] {
    /*
    make a 2-d array as record
    make a helper function 
    isflowBoth(loc)
    
    then iterate thorugh the island
    note: if there is a adjacent node that is flow both and <= current node then 
    we can mark current node as flowboth 

     */

    /*
    fail at edge case:
       how to fix
       x x x x
       x * * x
       x * * x
       x x x x
       sols:
       1. every time call isBoth helper function: reinitialize a isVisited array (very inefficient)
    */
    const [m,n] = [heights.length, heights[0].length];
    const result:number[][] = [];
    const isFlowBothArr:(-1|0|1)[][] = [];
    /*
    -1: unable reach both
     0: unvisited
     1: able to reach both
     */
    for(let row=0;row<m;row++){
        isFlowBothArr.push([]);
        for(let col=0; col < n; col++){
            isFlowBothArr[row].push(0);
        }
    }
    function isFlowBoth(loc:number[], fromDirection:'N'|'E'|'S'|'W'|null = null):boolean[]{
        // return [is reaching pacific, is reaching Atlantic]
        const [row, col] = loc;
        // make sure the current position not locates at the sea
        if(row < 0 || row >= m || col < 0 || col >=n) return [false, false]
        const cur = [ row === 0 || col === 0, row === m -1 || col === n - 1 ]; 
        if(cur[0] === true && cur[1] === true) isFlowBothArr[row][col] = 1;
        // check whether this location is already visited
        if(isFlowBothArr[row][col] === 1) return [true, true];
        isFlowBothArr[row][col] = -1; // to mark as visit
        let Nresult = [false,false];
        let Eresult = [false,false];
        let Sresult = [false,false];
        let Wresult = [false,false];
        if(fromDirection !== 'N' && row > 0 && heights[row][col] >= heights[row-1][col]){ 
            // check north from south
            Nresult = isFlowBoth([row - 1, col],'S');
        };
        if(fromDirection !== 'E' && col < n-1 && heights[row][col] >= heights[row][col+1]){ 
            // check east from west
            Eresult = isFlowBoth([row, col + 1],'W');
        };
        if(fromDirection !== 'S' && row < m-1 && heights[row][col] >= heights[row+1][col]){ 
            Sresult = isFlowBoth([row + 1, col],'N');
        };
        if(fromDirection !== 'W' && col > 0 && heights[row][col] >= heights[row][col-1]){ 
            Wresult = isFlowBoth([row , col - 1],'E');
        };
        cur[0] = cur[0] || Nresult[0] || Eresult[0] || Sresult[0] || Wresult[0]; 
        cur[1] = cur[1] || Nresult[1] || Eresult[1] || Sresult[1] || Wresult[1];
        if(cur[0] === true && cur[1] === true){
            isFlowBothArr[row][col] = 1;
        }else{
            isFlowBothArr[row][col] = -1;
        };
        return cur; 
    }

    for(let row=0;row<m;row++){
        for(let col=0; col < n; col++){
            isFlowBoth([row,col])
            if(isFlowBothArr[row][col] === 1) result.push([row,col])
        }
    }

    return result;
};

export {pacificAtlantic};