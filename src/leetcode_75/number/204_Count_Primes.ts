/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n:number):number {
    if(n <= 2) return 0
    const nArray = new Array(n).fill(1);
    nArray[0] = 0;
    nArray[n-1] = 0;
    const sqrtRoot = Math.floor(Math.sqrt(n));
    for(let i=2;i<= sqrtRoot;i++){
        if(isPrimse(i)){
            for(let factor=2;factor <= Math.floor(n/i);factor++){
                nArray[factor*i - 1] = 0;
            }
        }
    }  
    return nArray.reduce( (acc,cur)=>acc+cur, 0)


    function isPrimse(num:number):boolean{
        const sqrtRoot = Math.floor(Math.sqrt(num));
        for(let i=2;i<=sqrtRoot;i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }

};

export {countPrimes};