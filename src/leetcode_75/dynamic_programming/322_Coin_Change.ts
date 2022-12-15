/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins:number[], amount:number):number{
    const memoizedArr:number[] = [0];
    coins.forEach((denomination)=>{
        memoizedArr[denomination] = 1;
    })
    for(let i=1; i<=amount; i++){
        const candidateArr:number[] = [];
        coins.forEach(denomination=>{
            const diff = i - denomination;
            if(diff < 0) candidateArr.push(Infinity);
            if(diff === 0)candidateArr.push(0)
            if(diff > 0)candidateArr.push(memoizedArr[diff])
        })
        memoizedArr[i] = Math.min(...candidateArr) + 1;
    }
    if( isFinite(memoizedArr[amount])){
        return memoizedArr[amount]
    }else{
        return -1;
    }
};

var coinChangeTop2Bottom = function(coins:number[], amount:number):number {
    if(amount === 0) return 0;
    const memoizedArr:number[] = []; // index for amount, value for min coins count
    // init coins to object => we don't need conin that larger then amount
    const filteredCoins:number[] = [];
    coins.forEach(coin=>{
        if(coin <= amount){
            filteredCoins.push(coin);
            memoizedArr[coin] = 1; 
        }
    }) 
    /*
    1, 2, 5     11
    11
    candidateArr = [ex(10), ex(8), ex(6)];
    ex(6) =>
    candidateArr = [ex(5),ex(4),ex(1)];
                     1     2      1
    min = 1
    ex(6) = min + 1 = 2

    3 5    amount 4
    5 will be filtered
    ex(4) =>
    candidateArr = [ex(1), ex(-1)]
                            Infini
    ex(1) =>
    candidateArr = [ex(-2)]
                    Infinite
    */
    function exchange(n:number):number{
        if(n < 0) return Infinity;
        if(!!memoizedArr[n]){
            return memoizedArr[n];
        }
        const candidateArr:number[] = [];
        filteredCoins.forEach(denomination=>{
            candidateArr.push(exchange(n - denomination));
        });
        const minCandidateArr = Math.min(...candidateArr);
        memoizedArr[n] = minCandidateArr + 1;
        return memoizedArr[n]        
    };
    const minCount = exchange(amount);
    return isFinite(minCount) ? minCount : -1;

};

export {coinChange}