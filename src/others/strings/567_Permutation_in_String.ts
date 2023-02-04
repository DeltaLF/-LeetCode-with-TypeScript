function checkInclusion(s1: string, s2: string): boolean {
  // try to optimize by deleting key while it's zero so we only check those aren't zero
  if (s1.length > s2.length) return false;
  const hashMap: { [key: string]: number } = {};
  function balanceHashMap(key: string, operation: 1 | -1): void {
    if (hashMap[key] === undefined) {
      hashMap[key] = operation;
    } else {
      hashMap[key] += operation;
    }
    // not sure wether makes it more efficient or not
    if (hashMap[key] === 0) {
      delete hashMap[key];
    }
  }
  function isHashMapMatched(): boolean {
    for (let key in hashMap) {
      if (hashMap[key] !== 0) {
        return false;
      } else {
        delete hashMap[key];
      }
    }
    return true;
  }
  // init s1
  for (let char of s1) {
    balanceHashMap(char, 1);
  }
  let l = 0;
  let r = s1.length - 1;
  for (let i = 0; i <= r; i++) {
    balanceHashMap(s2[i], -1);
  }
  while (r < s2.length) {
    if (isHashMapMatched()) return true;
    // take off left pointer
    balanceHashMap(s2[l], 1);
    r++;
    l++;
    // put in new right pointer
    balanceHashMap(s2[r], -1);
  }
  return false;
}

function checkInclusionUniptimzed(s1: string, s2: string): boolean {
  /*
      s1 = "ab", s2 = "eidbaooo"
  
      s2's substing is s1's permutation
  
      list all s2 substring with same length of s1
      use hashMap to compare
  
      a sliding window + s1's hashMap
      we only need to go thorugh s2 once
      s1  abc 
             'xxx'           
      s2:    sgashgassbacac
  
      check wether the hashMap is all matched in every move
      O(m*n)  // m n are length of s1, s2
  
       */
  if (s1.length > s2.length) return false;
  const hashMap: { [key: string]: number } = {};
  for (let char of s1) {
    if (hashMap[char] === undefined) {
      hashMap[char] = 1;
    } else {
      hashMap[char] += 1;
    }
  }
  // init sliding window
  let l = 0;
  let r = s1.length - 1;
  for (let i = 0; i <= r; i++) {
    const char = s2[i];
    if (hashMap[char] === undefined) {
      hashMap[char] = -1;
    } else {
      hashMap[char] -= 1;
    }
  }
  function isHashMapMatched(): boolean {
    for (let key in hashMap) {
      if (hashMap[key] !== 0) {
        return false;
      }
    }
    return true;
  }
  while (r < s2.length) {
    console.log("l", l, "r", r, hashMap);
    if (isHashMapMatched()) return true;
    // take off left pointer
    hashMap[s2[l]] += 1;
    l++;
    r++;
    // put in right pointer
    if (hashMap[s2[r]] === undefined) {
      hashMap[s2[r]] = -1;
    } else {
      hashMap[s2[r]] -= 1;
    }
  }

  return false;
}

export { checkInclusion };
