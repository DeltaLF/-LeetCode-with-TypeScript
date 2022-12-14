/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix:number[][]):number[][] {
    const m = matrix.length;
    const n = matrix[0].length;
    let isFirstRowZero = false;
    let isFirstColZero = false;
    for(let row =0;row < m;row++){
        if(matrix[row][0] === 0){
            isFirstColZero = true;
        }
    }
    for(let col=0; col < n; col++){
        if(matrix[0][col] === 0){
            isFirstRowZero = true;
        }
    }
    // start from 1 to prevent overlaping
    for(let row= 1; row < m; row++){
        for(let col= 1; col < n; col++){
            if(matrix[row][col] === 0){
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }
    // watch out the overlaping point [0][0]

    for(let row=1; row < m;row++){
        // start from 1 to prevent overwriting col record
        if(matrix[row][0] === 0){
            for(let col=1; col < n; col++){
                matrix[row][col] = 0;
            }       
        }
    }; 
    for(let col = 1; col <n; col++){
        if(matrix[0][col] === 0){
            for(let row=1; row < m;row++){
                matrix[row][col] = 0;
            }
        }
    }
    if(isFirstRowZero){
        for(let col=0; col < n; col++){
            matrix[0][col] = 0;
        }
    }
    if(isFirstColZero){
        for(let row=0; row<m;row++){
            matrix[row][0] = 0;
        }
    }


    return matrix;
}


var setZeroesMplusN = function(matrix:number[][]):number[][] {
    const m = matrix.length;
    const n = matrix[0].length;
    const rowSet = new Set<number>();
    const colSet = new Set<number>();
    for(let row=0; row < m; row++){
        for(let col=0; col < n; col++){
            if(matrix[row][col] === 0){
                rowSet.add(row);
                colSet.add(col);
            }
        }
    }
    for(let row of rowSet){
        for(let col=0; col < n; col++){
            matrix[row][col] = 0;
        }        
    }
    for(let col of colSet){
        for(let row=0; row < m;row++){
            matrix[row][col] = 0;
        }
    }
    return matrix
};

export {setZeroes};