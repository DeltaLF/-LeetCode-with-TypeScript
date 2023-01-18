/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix:number[][]):void {
    /**
     *        transpose   rotate 90
     *  1 2     1 3         3 1
     *  3 4  => 2 4         4 2       
     * 
     * 
     * 
     *  1 2 3        1 4 7     7 4 1
     *  4 5 6   =>   2 5 8     8 5 2
     *  7 8 9        3 6 9     9 6 3
     * 
     *  (-1,1)  (0,1)  (1,1)
     *  (-1,0)  (0,0)  (1,0)
     *  (-1,-1) (-1,0) (-1,1)
     * 
     *  (-1,1): 1*(cos135,sin135) * rotate matrix (c s )
     *  (0,1):  1*(cos90,sin90)
     *  (1,1):  1*(cos45,sin45)
     *  
     */
    const n = matrix.length;
    function transpose(matrix:number[][]):void{
        let temp:number
        for(let i=0; i < n;i ++){
            for(let j=i+1;j < n ; j++){
                temp = matrix[j][i]
                matrix[j][i] = matrix[i][j]
                matrix[i][j] = temp;
            }
        }
    };

    function verticalReflect(matrix:number[][]):void{
        const middle = Math.floor(n/2);
        let temp:number
        for(let row=0; row<n;row++){
            for(let col=0;col < middle;col++){
                temp = matrix[row][n - 1 - col];
                matrix[row][n - 1 - col] = matrix[row][col];
                matrix[row][col] = temp;
            }
        }
    };

    transpose(matrix);
    verticalReflect(matrix);
};

export {rotate}