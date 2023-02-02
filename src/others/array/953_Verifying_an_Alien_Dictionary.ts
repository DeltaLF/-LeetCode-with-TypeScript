function isAlienSorted(words: string[], order: string): boolean {
  /*
    Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"

    make a hashmap key is alien's alphabet and the value is the order
     */
  const hashMap: { [key: string]: number } = {};
  for (let i = 0; i < 26; i++) {
    hashMap[order[i]] = i;
  }
  /*
  implement lexicographically sorting
  [a,ab,abc,bc,bd,c]
  */
  function isLexSorted(firstWord: string, secondWord: string): boolean {
    let i = 0;
    while (i < firstWord.length && i < secondWord.length) {
      const charI = firstWord[i];
      const charII = secondWord[i];
      if (hashMap[charI] < hashMap[charII]) {
        return true;
      } else if (hashMap[charI] > hashMap[charII]) {
        return false;
      }
      i++;
    }
    // equal for input the exactly same words
    return firstWord.length <= secondWord.length;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (!isLexSorted(words[i], words[i + 1])) {
      return false;
    }
  }
  return true;
}

export { isAlienSorted };
