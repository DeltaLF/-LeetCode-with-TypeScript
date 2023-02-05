function findAnagrams(s: string, p: string): number[] {
  /*
      Input: s = "cbaebabacd", p = "abc"
      Output: [0,6]
      s="cbaebabacd"
         *     *
  
      build a hashMap for p
      use a sliding windwo iterate through s whever the anagrams matchhed: recoed the index
      note: we can use a matchedCount var to memoeize how many unmatched alphabet
       */
  if (p.length > s.length) return [];
  const hashMap: { [key: string]: number } = {};
  const result: number[] = [];
  let mactcedCount = 0;
  for (let char of p) {
    if (hashMap[char] === undefined) {
      hashMap[char] = 1;
      mactcedCount++;
    } else {
      hashMap[char]++;
    }
  }

  let r = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    // move right pointer
    if (hashMap[s[r]] !== undefined) {
      if (hashMap[s[r]] === 1) {
        // an alphabet fully matched
        mactcedCount--;
      }
      if (hashMap[s[r]] === 0) {
        // an alphabet over matched
        mactcedCount++;
      }
      hashMap[s[r]]--;
    }
    r++;

    // move left pointer
    if (r > p.length) {
      if (hashMap[s[l]] !== undefined) {
        if (hashMap[s[l]] === -1) {
          // an aplhabet from over matched to jst matched
          mactcedCount--;
        }
        if (hashMap[s[l]] === 0) {
          mactcedCount++;
        }
        hashMap[s[l]]++;
      }
      l++;
    }

    // check is matched or not

    if (mactcedCount === 0) {
      result.push(l);
    }
  }
  return result;
}

export { findAnagrams };
