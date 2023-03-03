/*
idea: make LPS array to prevent repeatly checking  

a b c d a b c d a b c k
find a b c d a b c k
make substring: abcdabck a LPS array 
new Array(substring.length)
[  ,   ,   ,... ]
 |   |   |
 a   |   |
    ab   |
        abc

needle= aaacaaaa
LPS = [0,1,2,0,1,2,3,3]

*/

function kmp(str: string, subString: string): number {
  if (subString.length === 0) return 0;
  const lps: number[] = [0]; // the first is always 0
  /*
    string: a a a a a a c a a a a a
                |
            j=2 i=2
            a a a c a a a a   
                  |
        str[3] !== subStr[3] not matched
    subString:  aaacaaaa
    [0,1,2,0,1,2,3,3]
                        
    */
  let prevLPS = 0;
  let i = 1;
  while (i < subString.length) {
    if (subString[i] === subString[prevLPS]) {
      prevLPS++;
      lps.push(prevLPS);
      i++;
    } else {
      if (prevLPS === 0) {
        lps.push(0);
        i++;
      } else {
        prevLPS = lps[prevLPS - 1];
      }
    }
  }
  i = 0;
  let j = 0;
  while (i < str.length) {
    if (str[i] === subString[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === subString.length) return i - j;
  }
  return -1;
}
export { kmp };
