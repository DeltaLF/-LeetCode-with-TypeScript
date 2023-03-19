class WordDictionary {
  public map: { [key: string]: true }[] = [];
  constructor() {}

  addWord(word: string): void {
    if (!this.map[word.length]) {
      this.map[word.length] = {};
    }
    this.map[word.length][word] = true;
  }

  search(word: string): boolean {
    // word < 25
    // map.size < 10^4
    if (!this.map[word.length]) return false;
    if (word.indexOf(".") === -1) {
      return word in this.map[word.length];
    }
    let i = 0;
    for (let storedWord in this.map[word.length]) {
      for (i = 0; i < word.length; i++) {
        if (word[i] !== storedWord[i] || word[i] !== ".") break;
      }
      if (i === word.length) return true;
    }
    return false;
    // const len = word.length;
    // if (!this.map[len]) return false;
    // const map = this.map[len];
    // if (word in map) return true;   // very inefficient
    // for (const key in map) {
    //   let i = 0;
    //   for (i; i < len; i++) {
    //     if (word[i] === ".") continue;
    //     if (key[i] !== word[i]) break;
    //   }
    //   if (i === len) return true;
    // }
    // return false;
  }
}

export { WordDictionary };

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
/*

{b:{
    a:{
        d:"#"
    }
 c:{

 }

}}
 how about 2d [[a~z], [a~z],..]
*/
