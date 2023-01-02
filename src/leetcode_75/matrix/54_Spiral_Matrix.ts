/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix:number[][]):number[] {
    const m = matrix.length;
    const n = matrix[0].length;
    /*
    1 2 3 
    4 5 6
    7 8 9
    0 1 2
    1 2 3 6 9 2 1 0 7 4 5 8
    */
    // boundary
    let top = 0;
    let left = -1;
    let right = n;
    let bottom = m;
    const answer:number[] = [];
    // current position
    let row = 0; // 0 ~ m
    let col = 0; // 0 ~ n
    while(answer.length < m * n){
        // go right
        while(col < right){
            answer.push(matrix[row][col]);
            col++;            
        }
        if(answer.length === m*n) break;
        right--;
        col--;
        row++;
        // go down
        while(row < bottom){
            answer.push(matrix[row][col]);
            row++;
        }
        if(answer.length === m*n) break;
        bottom--;
        row--;
        col--;
        // go left
        while(col > left){
            answer.push(matrix[row][col]);
            col--;
        }
        if(answer.length === m*n) break;
        left++;
        col++;
        row--;
        // go up
        while(row > top){
            answer.push(matrix[row][col])
            row--;
        }
        if(answer.length === m*n) break;
        top++;
        row++;
        col++;
    }

    return answer;
};

export {spiralOrder};