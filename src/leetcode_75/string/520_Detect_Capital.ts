/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word:string):boolean{
    /*
    1. all uppercase
    2. [uppercase || lowercase] + lowercase
    */
    return word === word.toUpperCase() || word === word[0] + word.substring(1).toLowerCase();
}

var detectCapitalUseElaborate = function(word:string):boolean {
    if(word.length === 1) return true;
    let shouldUppercase:boolean;
    if( word.charCodeAt(0) < 'a'.charCodeAt(0) ){ // start with capital
        if( word.charCodeAt(1) < 'a'.charCodeAt(0)){ 
            // 'AB'
            shouldUppercase = true;
        }else{
            // 'AB'
            shouldUppercase = false;
        }
    }else{
        // 'aB'
        if(word.charCodeAt(1) < 'a'.charCodeAt(0)){
            return false;
        }else{
            // 'ab'
            shouldUppercase = false;
        }
    }
    for(let i=2; i < word.length; i++){
        if( word.charCodeAt(i) < 'a'.charCodeAt(0) === shouldUppercase ){
            /* 
            passed when
            letter is uppercase and sohuldUppercase
            letter is lowercase abd !shouldUppercase 
            */
            continue
        }else{
            return false;
        }
    }
    return true;
    
};

export {detectCapitalUse};