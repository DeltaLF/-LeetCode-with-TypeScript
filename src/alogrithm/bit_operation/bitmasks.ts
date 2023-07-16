/*
Motivation: 
Efficiently store and modify a group of booleans

for example let's use bitmask to represent available days in a week: 
1 for available and 0 for unavailable 
all possible combination: 2^7 
0 => 0000000 // every day is unavailable
 1111111 // every day is available
1000000 // only Sunday is available

*/

function num2bin(num: number) {
  return (num >>> 0).toString(2);
}
function bin2num(num: string) {
  return parseInt(num, 2);
}

let aWeekTime = 127;
let bWeekTime = (1 << 5) | (1 << 6); // only Satudrday and Sunday is available

console.log("a and b are both free", num2bin(aWeekTime & bWeekTime));
