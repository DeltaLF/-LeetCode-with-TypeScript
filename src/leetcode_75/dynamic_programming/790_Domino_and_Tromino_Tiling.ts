/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n:number):number {
        const memoizedArr:number[] = [0,1,2,5];
        function helper(n:number):number{
            console.log(n,memoizedArr[n])
            if(memoizedArr[n]) return memoizedArr[n];
            memoizedArr[n] = (2*helper(n-1) + helper(n-3)) % (Math.pow(10,9)+7);
            return memoizedArr[n]
        }
    return helper(n);
    
};

export {numTilings};