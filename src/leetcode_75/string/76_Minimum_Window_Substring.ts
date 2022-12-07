/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function minWindow(s:string, t:string):string{
    if(s.length < t.length) return "";
    const hashMap:{[key:string]:number} = {};
    for(let i=0; i < t.length; i++){
        if(hashMap[t[i]] > 0){
            hashMap[t[i]] ++;
        }else{
            hashMap[t[i]] = 1;
        }
    }
    let start = 0;
    let end = 0;
    let count = t.length; // make sure all t letters included
    let minStart = Infinity;
    let minLength = Infinity;
    /*
    s = "ADOBECODEBANC", t = "ABC"
    {A:1, B:1, C:1} counter =3

    1. {A:0, B:1, C:1} coutner=2  start=0, end=1
    2. {A:0, B:0, C:1} counter=1  start=0, end=4

    */

    while( end < s.length ){
        if( hashMap[s[end]] > 0){
            count --;
        }
        if(!isNaN(hashMap[s[end]])){
            // we only keep wanted letters on hashmap
            hashMap[s[end]] --;
        }
        while(count === 0){ // all t letters are included
            if(end - start + 1 < minLength){
                // update if there is shorter sliding window
                minStart = start;
                minLength = end - start + 1;
            }
            // shrinking the sliding window
            if(!isNaN(hashMap[s[start]])){ 
                // update hashMap only when current letter in the hashMap
                hashMap[s[start]] ++;
                if(hashMap[s[start]] > 0) count++;
            }
            start++;
        }
        end++;

    }
    return s.slice(minStart,minStart + minLength);

};

 var minWindowLessEff = function(s:string, t:string):string {
    if( s.length < t.length) return ""
    /*
    store t in 
      v1. hashmap
       2. alphapet array (26)*2 lower and upper case

      Input: s = "ADOBECODEBANC", t = "ABC"
                     l
                            r
    */
   const hashMap:{[key:string]:number} = {};
   // fill up hashMap with all t letters 
   for(let i=0; i < t.length; i++){
    if(hashMap[t[i]] > 0){
        hashMap[t[i]]++;
    }else{
        hashMap[t[i]] = 1;
    }
   }

   function isWindowSubstring(sSubstring:{[key:string]:number},tString:{[key:string]:number}):boolean{
    for(let key in tString){
        if(tString[key] <= sSubstring[key] ){
            continue;
        }else{
            return false
        }
    }
    return true
   }

   // iterate through s with sliding window
   let minSubstring = '';
   let start = 0;
   let end = 0;
   let subStringMap:{[key:string]:number} = {};
   while(end <= s.length ){
    // if subStringMap satisfy then update minSubString and move start to right
    console.log(isWindowSubstring(subStringMap, hashMap), subStringMap, hashMap)
    if(isWindowSubstring(subStringMap, hashMap)){
        const sSubString = s.slice(start, end);
        if(sSubString.length < minSubstring.length || minSubstring.length === 0) minSubstring = sSubString;
        subStringMap[s[start]] --;
        start++;
    }else{
    // if subStringMap not satisfy hashMap then end++
    subStringMap[s[end]] = subStringMap[s[end]] > 0 ? subStringMap[s[end]] + 1: 1;
    end++;
    }

   }
   return minSubstring;
};

export {minWindow};