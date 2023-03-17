var Trie = function () {
  this.neastedMap = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word: string): void {
  let map = this.neastedMap;
  for (let letter of word) {
    if (!(letter in map)) {
      map[letter] = {};
    }
    map = map[letter];
  }
  map["#"] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word: string): boolean {
  let map = this.neastedMap;
  for (let letter of word) {
    if (!(letter in map)) {
      return false;
    }
    map = map[letter];
  }
  return "#" in map;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix: string): boolean {
  let map = this.neastedMap;
  for (let letter of prefix) {
    if (!(letter in map)) {
      return false;
    }
    map = map[letter];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieOld {
  private strTree: { [key: string]: {} } = {};
  constructor() {}

  insert(word: string): void {
    let strObj = this.strTree;
    for (let letter of word) {
      if (!(letter in strObj)) {
        strObj[letter] = {};
      }
      strObj = strObj[letter];
    }
    strObj["#"] = true;
  }

  search(word: string): boolean {
    let strObj = this.strTree;
    for (let letter of word) {
      if (!(letter in strObj)) return false;
      strObj = strObj[letter];
    }

    return "#" in strObj;
  }

  startsWith(prefix: string): boolean {
    let strObj = this.strTree;
    for (let letter of prefix) {
      if (!(letter in strObj)) return false;
      strObj = strObj[letter];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieWithSet {
  /*
    Input
    ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
    [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
    Output
    [null, null, true, false, true, null, true]

    string size: 2000
    2 approaches
    1. simply use one map object  
    {'apple':true}  O(1) for search
                    O(2000n) for start with
    space: O(2000n)
    or
    2. a tree neasted object
    while apple is inserted:
    {
        a: { 
            p:{
                p:{
                    l:{
                        e:{

                        }
                    }
                }
            }
        }
    }
    search O(2000)  // string length
    start with O(2000)
     */
  private set = new Set<string>();
  constructor() {}

  insert(word: string): void {
    this.set.add(word);
  }

  search(word: string): boolean {
    return this.set.has(word);
  }

  startsWith(prefix: string): boolean {
    for (let str of this.set) {
      if (str.substring(0, prefix.length) === prefix) {
        return true;
      }
    }
    return false;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie };
