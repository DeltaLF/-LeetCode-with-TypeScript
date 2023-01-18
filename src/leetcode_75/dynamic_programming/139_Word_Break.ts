/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s:string, wordDict:string[]):boolean{
    const check:boolean[] = new Array(s.length).fill(false);
    for(let i=0; i < s.length; i++){
        /*
         ffffffffffffffffffff
         01234567890123456789
        "dogandandgoddogalala" 
        ["dogan,dog,and,d,god,alala]
        */
       for(let word of wordDict){
        if(word[word.length -1] === s[i] && (check[i - word.length ]=== true ||i -word.length+1 ===0)){
            if(word === s.slice(i-word.length+1,i+1)){
                check[i] = true;
            }
        }
       }
    }
    return check[s.length -1];
};

var wordBreakFail = function(s:string, wordDict:string[]):boolean {
    // not work for that there might be mutiple matchArr in a single index
    /*
    brute force:
    m x n
    iterate through s and iterate thorugh wordDict in every letter of s
    */
   const matchArr:number[][] = []; // [string start, string end];
   const dictPointer = new Array(wordDict.length).fill(0);
   for(let i=0; i < s.length;i++){
    const letter = s[i];
    wordDict.forEach((word,dictInd)=>{
        if(word[dictPointer[dictInd]] === letter){
            dictPointer[dictInd]++;
        }else{
            // reset
            if(word[0] === letter){
                dictPointer[dictInd] = 1;
            }else{
                dictPointer[dictInd] = 0;
             }
        }
        /*
         abcde
         ['abc','de']
        while i=2
        */
        if(dictPointer[dictInd] === wordDict[dictInd].length){
            matchArr.push([i - dictPointer[dictInd]+1,i]);
        }
    });}
    if(matchArr.length === 0) return false
    const checkArr = [...matchArr[0]];
    // make sure matchArry can connect from 0 to s.length -1
    console.log("matchARr",matchArr)
    for(let i=1; i < matchArr.length;i++){
        let shouldAdd =false
        for(let j=0; j < checkArr.length; j++){
            console.log("match",matchArr[i],'check',checkArr)
            if(matchArr[i][0] === 0 || checkArr[j] === matchArr[i][0] -1 ){
                shouldAdd = true;
            }
        }
        if(shouldAdd){
            checkArr.push(matchArr[i][1]);
        }
    }
   
   return checkArr[checkArr.length -1] === s.length -1;
};

export{wordBreak};
/*
word match array (record head and tail whenever a word is matched)
 01234567890123456789
"dogandandgoddogalala"
["dogan,dog,and,d,god,alala]
[[0,2],[0,4],[3,5],[5,5],[6,8],[8,8],[9,11],[11,11],[12,12],[12,14],[15,19]]
0 2 4 5 6 8 
 dog   dogan
 question becomes: is there a possible array combination that compose 0 ~ s.length-1
i
0 2

[0,2],[1,3],[0,4]


start=0
end=0
w
*/