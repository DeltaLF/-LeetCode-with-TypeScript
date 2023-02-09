function distinctNames(ideas: string[]): number {
  /*
  {
    // elimnate the duplciate
    // 2 * (2 * 3) 
   a: { bc, de ,hi}         
   b: { bc, fg,jk,lm}

  }
  */
  const alphabetSet: { [key: string]: Set<string> } = {};
  const charA = "a".charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    alphabetSet[String.fromCharCode(charA + i)] = new Set<string>();
  }
  for (let idea of ideas) {
    alphabetSet[idea[0]].add(idea.substring(1));
  }
  let count = 0;
  for (let i = 0; i < 25; i++) {
    for (let j = i + 1; j < 26; j++) {
      const setA = alphabetSet[String.fromCharCode(charA + i)];
      const setB = alphabetSet[String.fromCharCode(charA + j)];
      if (setA.size > 0 && setB.size > 0) {
        const setUnion = new Set([...Array.from(setA), ...Array.from(setB)]);
        const duplicatedCount = setUnion.size;
        count +=
          2 * (setA.size - duplicatedCount) * (setB.size - duplicatedCount);
      }
    }
  }
  return count;
}

function distinctNamesFail(ideas: string[]): number {
  /*
      2 conditions make result not distinct:
      1. strA.subString(1) === strB.subString(1)
      2. strA[0] === strB[0]
  
      max posiible:
      for 
      arr =      2       3        4       n
             (2-1)*2  (3-1)*3  (4-1)*3  (n-1)*n
      max count= 2       6        12     
  
      for arr 3
      if 1 pairs are not distinct: -2   [ab,ac,zx]
      if 2 pairs are not distinct: -2 -2
      what if 1 pairs compose of 3 : 3*(3-1)
  
      question become: n*(n-1) - 2 * invalidPair(size 1) + invalidPair(size2)...
      what if a,b in pair one due to first letter
      but b, c in pair two due to subString    
      => no problem just 1*(2*(2-1)) + 1*(2*(2-1))
      */
  const n = ideas.length;
  const duplicatedHeadMap: { [key: string]: string[] } = {};
  const duplicatedSubstringMap: { [key: string]: string[] } = {};
  // find duplicated head
  for (let idea of ideas) {
    if (duplicatedHeadMap[idea[0]] === undefined) {
      duplicatedHeadMap[idea[0]] = [idea];
    } else {
      duplicatedHeadMap[idea[0]].push(idea);
    }
    if (duplicatedSubstringMap[idea.substring(1)] === undefined) {
      duplicatedSubstringMap[idea.substring(1)] = [idea];
    } else {
      duplicatedSubstringMap[idea.substring(1)].push(idea);
    }
  }
  //  calculate the sum
  function calculateDuplicated(map: { [key: string]: string[] }): number {
    let total = 0;
    for (let key in map) {
      // note: for map[key] === 1 (unique) will not count due to map[key]-1
      total += map[key].length * (map[key].length - 1);
    }
    return total;
  }

  // find all end with duplciated head
  let differntStartSameEndCount = 0;
  for (let key in duplicatedSubstringMap) {
    let len = duplicatedSubstringMap[key].length;
    if (len > 1) {
      for (let idea of duplicatedSubstringMap[key]) {
        differntStartSameEndCount +=
          (len - 1) * (duplicatedHeadMap[idea[0]].length - 1) * 2;
      }
    }
  }

  return (
    n * (n - 1) -
    calculateDuplicated(duplicatedHeadMap) -
    calculateDuplicated(duplicatedSubstringMap) -
    differntStartSameEndCount
  );
}

function distinctNamesNotCountDuplcaitedEndButDifferentStart(
  ideas: string[]
): number {
  /*
    2 conditions make result not distinct:
    1. strA.subString(1) === strB.subString(1)
    2. strA[0] === strB[0]

    max posiible:
    for 
    arr =      2       3        4       n
           (2-1)*2  (3-1)*3  (4-1)*3  (n-1)*n
    max count= 2       6        12     

    for arr 3
    if 1 pairs are not distinct: -2   [ab,ac,zx]
    if 2 pairs are not distinct: -2 -2
    what if 1 pairs compose of 3 : 3*(3-1)

    question become: n*(n-1) - 2 * invalidPair(size 1) + invalidPair(size2)...
    what if a,b in pair one due to first letter
    but b, c in pair two due to subString    
    => no problem just 1*(2*(2-1)) + 1*(2*(2-1))
    */
  const n = ideas.length;
  const duplicatedHeadMap: { [key: string]: number } = {};
  const duplicatedSubstringMap: { [key: string]: number } = {};
  // find duplicated head
  for (let idea of ideas) {
    if (duplicatedHeadMap[idea[0]] === undefined) {
      duplicatedHeadMap[idea[0]] = 1;
    } else {
      duplicatedHeadMap[idea[0]]++;
    }
    if (duplicatedSubstringMap[idea.substring(1)] === undefined) {
      duplicatedSubstringMap[idea.substring(1)] = 1;
    } else {
      duplicatedSubstringMap[idea.substring(1)]++;
    }
  }
  //  calculate the sum
  function calculateDuplicated(map: { [key: string]: number }): number {
    let total = 0;
    for (let key in map) {
      // note: for map[key] === 1 (unique) will not count due to map[key]-1
      total += map[key] * (map[key] - 1);
    }
    return total;
  }

  return (
    n * (n - 1) -
    calculateDuplicated(duplicatedHeadMap) -
    calculateDuplicated(duplicatedSubstringMap)
  );
}

function distinctNamesTLE(ideas: string[]): number {
  /*
    Input: ideas = ["coffee","donuts","time","toffee"]
    Output: 6
     */
  const ideasSet = new Set(ideas);
  // iterate through all combination
  let count = 0;
  function isConcateValid(ideaA: string, ideaB: string): boolean {
    [ideaA, ideaB] = [
      ideaB[0] + ideaA.substring(1),
      ideaA[0] + ideaB.substring(1),
    ];
    return !(ideasSet.has(ideaA) || ideasSet.has(ideaB));
  }
  for (let i = 0; i < ideas.length; i++) {
    for (let j = 0; j < ideas.length; j++) {
      if (i != j && isConcateValid(ideas[i], ideas[j])) {
        count++;
      }
    }
  }
  return count;
}
export { distinctNames };
