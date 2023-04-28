function numSimilarGroups(strs: string[]): number {
  /*
    areSimilar: O(n)

    dft: worse case might be O(m^2*n)
    strs[0] is only similar to strs[1] m
    strs[1] is only similar to strs[2] m
    ....
    m

    */
  function areSimilar(s1: string, s2: string) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    const diff: number[] = [];
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diff.push(i);
      }
      if (diff.length > 2) return false;
    }
    if (s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]) return true;
    return false;
  }

  const isVisited = Array(strs.length).fill(false);
  let groupNum = 0;
  for (let i = 0; i < strs.length; i++) {
    if (!isVisited[i]) {
      groupNum++;
      dft(i);
    }
  }

  function dft(ind: number) {
    if (isVisited[ind]) return;
    isVisited[ind] = true;
    for (let i = 0; i < strs.length; i++) {
      if (areSimilar(strs[ind], strs[i])) {
        dft(i);
      }
    }
  }

  return groupNum;
}

function numSimilarGroupsFail(strs: string[]): number {
  /*
    Input: strs = ["tars","rats","arts","star"]
    Output: 2
    g1: tars, rats, arts
    g2: star

    
    Input: strs = ["omv","ovm"]
    Output: 1

    n: s[0].length 
    m: s.length
    brute force:
    compare any two strs (this takes O(m^2))
    it takes O(n)  to make acompare
    => toatl O(n*m^2)
     */
  function areSimilar(s1: string, s2: string) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    const diff: number[] = [];
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diff.push(i);
      }
      if (diff.length > 2) return false;
    }
    if (s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]) return true;
    return false;
  }
  let belongGroups: symbol[] = [];
  const group = new Map<symbol, string[]>();
  for (let str of strs) {
    // console.log("group size", group.size);
    // console.log(group);

    belongGroups = [];
    for (let [key, strArr] of group.entries()) {
      for (let strInGroup of strArr) {
        if (areSimilar(str, strInGroup)) {
          belongGroups.push(key);
          break;
        }
      }
    }
    if (belongGroups.length === 0) group.set(Symbol(), [str]); // create new group
    if (belongGroups.length === 1) {
      const subGroup = group.get(belongGroups[0])!;
      subGroup.push(str);
    }
    if (belongGroups.length > 1) {
      // merge group
      const mergedgroup = group.get(belongGroups[0])!;
      mergedgroup.push(str);
      for (let i = 1; i < belongGroups.length; i++) {
        mergedgroup.concat(group.get(belongGroups[i])!);

        const det = group.delete(belongGroups[i]);
        console.log(det);
      }
    }
  }
  return group.size;
}

export { numSimilarGroups };
