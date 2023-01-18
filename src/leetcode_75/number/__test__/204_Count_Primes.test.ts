import { countPrimes } from "../204_Count_Primes";

it('tests countPrimes function',()=>{
    expect(countPrimes(1)).toEqual(0);
    expect(countPrimes(2)).toEqual(0);
    expect(countPrimes(3)).toEqual(1);
    expect(countPrimes(4)).toEqual(2);
    expect(countPrimes(5)).toEqual(2);
    expect(countPrimes(10)).toEqual(4);
    expect(countPrimes(20)).toEqual(8);

})