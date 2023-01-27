function findAllConcatenatedWordsInADict(words: string): string[] {
  const memoizeObj: { [key: string]: boolean } = {};
  const wordsSet = new Set(words);
  function dft(word: string): boolean {
    // watch out carefully : memoizedObj['constructor'] is a function not undefined
    if (typeof memoizeObj[word] === "boolean") return memoizeObj[word];
    for (let i = 1; i < word.length; i++) {
      const preWord = word.substring(0, i);
      const postWord = word.substring(i, word.length);
      if (wordsSet.has(preWord) && wordsSet.has(postWord)) {
        memoizeObj[word] = true;
        return true;
      }
      if (wordsSet.has(preWord) && dft(postWord)) {
        memoizeObj[word] = true;
        return true;
      }
    }
    memoizeObj[word] = false;
    return false;
  }
  const answer: string[] = [];
  for (let word of words) {
    if (dft(word)) {
      answer.push(word);
    }
  }
  return answer;
}

function findAllConcatenatedWordsInADictWithCandinate(
  words: string[]
): string[] {
  /*
    Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
    Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

    try with brute force:
    for word of words
        for comparedWord of words

        cat: no child
        cats: only one child
        current target catsdogcats:
        only cat, cats, dog are it's child element
        for dogcatsdog:
        only cat, cats, dog are it's child elemnt          
     */

  // find out words that contain more then 2 children at storing as hashmap
  /*
        candinate:{
            'catsdogcats':[ cat, cats, dog ]
        }
         */
  const candidate: { [key: string]: string[] } = {};
  for (let i = 0; i < words.length; i++) {
    candidate[words[i]] = [];
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[i].indexOf(words[j]) > -1) {
        candidate[words[i]].push(words[j]);
      }
    }
    if (candidate[words[i]].length < 1) {
      delete candidate[words[i]];
    }
  }
  // validiate the canidate can be comprised of child
  const memoizedObj: { [key: string]: boolean } = {};
  function validiate(
    parent: string,
    children: string[],
    joinChildren: string
  ): boolean {
    if (memoizedObj[`${parent}_${joinChildren}`] !== undefined)
      return memoizedObj[`${parent}_${joinChildren}`];
    if (parent.length === 0) return true;
    let result = false;
    for (let child of children) {
      if (
        parent.length >= child.length &&
        parent.substring(0, child.length) === child
      ) {
        result =
          result ||
          validiate(parent.slice(child.length), children, joinChildren);
      }
    }
    memoizedObj[`${parent}_${joinChildren}`] = result;
    return result;
  }
  const answer: string[] = [];
  for (let parent in candidate) {
    if (validiate(parent, candidate[parent], candidate[parent].join())) {
      answer.push(parent);
    }
  }
  return answer;
}

export { findAllConcatenatedWordsInADict };
