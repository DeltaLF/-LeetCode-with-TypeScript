/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

var change = function(amount:number, coins:number[]){
    if(coins.length === 0) return 0;
    const memorizedArr:number[] = [1];
    for(let coin of coins){
        for(let j=coin; j<=amount;j++){
            // use coin at least once:
            const useCoinIAtLeastOnce = memorizedArr[j - coin] ? memorizedArr[j - coin] : 0;
            /*
            note: for index < j => memorizedArr is updated to using current coin
            but for index > j => memorizedArr is still storing recorcd of coin - 1
            */
           const previousCointRecord = memorizedArr[j] ? memorizedArr[j] : 0;
            memorizedArr[j] = previousCointRecord + useCoinIAtLeastOnce;
        }
    }
    return memorizedArr[amount];
}
var changeSpaceMN = function(amount:number, coins:number[]){

    /*
    memoizedArr[x][y] means using the first x types of coin to make up y amount of money
    init:
    memoizedArr[x][0] = 1; 0 dollars can only be combined from 0 coins and that is 1 combination

    how to make up memoizedArr[x][y] => 
    memoizedArr[x][y] = memoizedArr[x-1][y] + memoizedArr[x-1][y - coins[x]] + memoizedArr[x-1][y-2*coins[x]]...
                        coins[x] never used +       coins[x] used once       + coins[x] used twice .... 
    actually this can be simpilified even more
    memoizedArr[x][y] = memoizedArr[x-1][y] + memoizedArr[x][y-coins[x]];
                         never use coins[x] + use coins[x] at least once(or more)  
    */
     if(amount === 0) return 1; 
     if(coins.length === 0) return 0;
     const m = amount;
     const n = coins.length;
    // memoizedArr size: [n+1][m+1]
    const memoizdArr:number[][] = []; 
    for(let i=0; i <= n; i++){
        memoizdArr[i] = [1];
        for(let j=1; j <= m + 1; j++){ // start from amount 1 bc amount 0 must be 1
            // never use coinI: only use coins[0], coins[1], ... conins[i-1]
            const neverUseCoinI = memoizdArr[i-1]?.[j] ? memoizdArr[i-1][j] : 0;
            // use coin i at least once: combinations of i types of coins at amount (j - coins[i]) + 1 coins[i]
            const useCoinIAtLeastOnce = memoizdArr[i]?.[j - coins[i]] ?  memoizdArr[i][j - coins[i]] :0;
            memoizdArr[i][j] = neverUseCoinI + useCoinIAtLeastOnce;
        }
    }
    return memoizdArr[n-1][amount];
};

var changeTry = function(amount:number, coins:number[]):number {
    /* 

    ------------------
    [1,2,5] 

    consider 
    [1]
               0 1 2 3 4 5
    combArr = [0,1,1,1,1,1]
    [1,2]    for 5 we consider use count:0,1,2 of "2"
               0 1 2 3 4 5
    combArr = [0,1,2,2,3,4]
    [1,2,5]  for 5 we consider use 0(the old approach), 1:5
               0 1 2 3 4 5
    combArr = [0,1,2,2,3,5]

    memoArr[n-1][m] => we use the previous 0 to n-1 types of coin to combine the m amount
    amount m
    [1,2,5]
    the answer:
    if we only use
    memoArr[n-2][0~m];
    change(m) = memorArr[n-2][m] + memoArr[n-2][m - coin[n]] + memoArr[n-2][m - 2*coin[n]]....
    coin[n] used       0                    1                           2
    



               0 1 2 3 4 5
    combArr = [0,1,2,2,3,4]


    -----------------------------------------

    [3,5,7] 
               0 1 2 3 4 5 6 7 8 9 10 11 12 13
    combArr = [0,0,0,1,0,1,1,1,1,1, 2, 1, 2 ]


    [3,5,7]
    
               0 1 2 3 4 5 6 7 8 9 10 11 12 13
    combArr = [0,0,0,1,0,1,0,1,0,0, 0, 0, 0, 0]
    


    comb(12) = combArr(12-3) + combArr(12-5) + combArr(12-7) 
    // we need to find out duplicated

    
    if change(10) is given 

    [a,b,c...]
    conbArr(x) = combArr(x-a) + combArr(x-b) + combArr(x-c)...
    watch out the duplicated:
    x combArr(10) = combArr(3) + combArr(5) + combArr(7)

    simpler way:
    if change(10) is given:
    [a,b,c...]
    combArr(x) = combArr(10-a) + combArr(a) || combArr(10-b) + comb(b)
    */
    const combinedArr:number[] = []
    coins.sort((a,b)=>a-b);
    for(let i=0;i<coins[0];i++){
        combinedArr.push(0);
    }
    combinedArr.push(1);
    return 0;

    
};


export { change}