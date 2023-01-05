/**
 * @param {string} s
 * @return {number}
 */

function countSubstrings(s:string):number{
    /* consider odd and even
    expand on both left and right
      a  a  a  b  b
    <-lr->
    */
   let totalCount = 0;
   function expandCheck(left:number,right:number):number{
    // return total palindrom count
    let count = 0; // single word must be palindrom
    while(left >= 0 && right < s.length){
        if(s[left] === s[right]){
            count++
            left--;
            right++;
        }else{
            break;
        }
    }
    return count;
   }

   for(let i =0; i < s.length;i++){
    // iterate thorugh string
    // for odd
    totalCount += expandCheck(i,i)
    // for even case
    totalCount += expandCheck(i,i+1);
   }
   return totalCount;
}

var countSubstringsBruteForce = function(s:string):number {
    let count = s.length; // single letter is palindromic
    function isPalindromic(str:string):boolean{
        let start =0;
        let end = str.length-1;
        while(start < end){
            if(str[start] !== str[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    for(let i=2; i <= s.length; i++){ // sub string length
        for(let j =0; j <= s.length - i;j++){  // move substring
            // maybe can be optimized by sliding window
            if(isPalindromic( s.substring(j,j+i))){
                count++;
            }
        }
    }
    return count;
};

export {countSubstrings};