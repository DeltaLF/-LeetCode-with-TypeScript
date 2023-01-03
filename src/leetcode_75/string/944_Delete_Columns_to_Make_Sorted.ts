/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs:string[]):number {
    /*
    zyx
    wvu
    tsr
    */
    const m = strs[0].length;
    const n = strs.length;
    let delCount =0;
    for(let col=0; col < m; col++){
        for(let row=0; row < n - 1;row++){
            if( strs[row].charCodeAt(col) > strs[row+1].charCodeAt(col)){
                delCount++;
                break;
            }
        }
    }
    return delCount;
};
export {minDeletionSize}