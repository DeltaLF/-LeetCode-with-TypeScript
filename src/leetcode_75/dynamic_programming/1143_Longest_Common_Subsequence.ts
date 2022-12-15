/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1:string, text2:string):number {
    /*
             n
       x t e x t 2
       t 0 0 0 0 0
       e 0 
    m  x 0
       t 0
       1 0 
    
    */
    const m = text1.length;
    const n = text2.length;
    const memoizedArr:number[][] = [];
    for(let i=0; i<=m; i++){
        memoizedArr.push([0]);
    }
    for(let i=0; i< n;i++){
        memoizedArr[0].push(0)
    }

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <=n; j++){
            /*
            -1 for we need to memoize '' case (length 0)
            text[n] corresponds to the n letter of text
             */
            if(text1[i - 1] === text2[j - 1]){
                memoizedArr[i][j] = memoizedArr[i-1][j-1] + 1;
            }else{
                memoizedArr[i][j] = Math.max(memoizedArr[i-1][j], memoizedArr[i][j - 1]);
            }
        }
    }
    return memoizedArr[m][n];   

};

// too inefficient
function longestCommonSubsequenceRecursive(s1:string, s2:string):number{
        if(s1.length > 0 && s2.length > 0){
            const s1Tail = s1[s1.length - 1];
            const s2Tail = s2[s2.length - 1];
            const newS1 = s1.slice(0, s1.length -1);
            const newS2 = s2.slice(0, s2.length -1);
            if(s1Tail === s2Tail){
                return longestCommonSubsequenceRecursive(newS1, newS2) + 1;
            }
            return Math.max(longestCommonSubsequenceRecursive(s1, newS2), longestCommonSubsequenceRecursive(newS1, s2));
        }else{
            return 0;
        }
}

export { longestCommonSubsequence,longestCommonSubsequenceRecursive };