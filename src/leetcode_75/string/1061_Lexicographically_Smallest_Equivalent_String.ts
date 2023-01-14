function smallestEquivalentString(
  s1: string,
  s2: string,
  baseStr: string
): string {
  const alphabetUnion: number[] = [];
  for (let i = 0; i < 26; i++) {
    alphabetUnion[i] = i;
  }
  function findAncestor(num: number): number {
    if (alphabetUnion[num] === num) return num;
    // make all elements to become directly child of root
    return (alphabetUnion[num] = findAncestor(alphabetUnion[num]));
  }
  function union(str1: number, str2: number): void {
    const s1Ancestor = findAncestor(str1);
    const s2Ancestor = findAncestor(str2);
    if (s1Ancestor > s2Ancestor) {
      alphabetUnion[s1Ancestor] = s2Ancestor;
    } else if (s1Ancestor < s2Ancestor) {
      alphabetUnion[s2Ancestor] = s1Ancestor;
    }
  }
  for (let i = 0; i < s1.length; i++) {
    union(
      s1.charCodeAt(i) - "a".charCodeAt(0),
      s2.charCodeAt(i) - "a".charCodeAt(0)
    );
  }
  let answer = "";
  for (let i = 0; i < baseStr.length; i++) {
    const ancestor =
      findAncestor(alphabetUnion[baseStr.charCodeAt(i) - "a".charCodeAt(0)]) +
      97;
    answer += String.fromCharCode(ancestor);
  }
  return answer;
}

function smallestEquivalentStringVerbose(
  s1: string,
  s2: string,
  baseStr: string
): string {
  const alphabetUnion: number[] = [];
  function findancestor(num: number): number {
    if (alphabetUnion[num] === num) return num;
    return (alphabetUnion[num] = findancestor(alphabetUnion[num]));
  }
  for (let i = 0; i < 26; i++) {
    // alphabetUion[0] -> a's parent
    // if alphabetUnion[i] === alphabet.charCode();
    alphabetUnion[i] = i;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    const s1Code = s1.charCodeAt(i) - "a".charCodeAt(0);
    const s2Code = s2.charCodeAt(i) - "a".charCodeAt(0);
    const s1ancestor = findancestor(s1Code);
    const s2ancestor = findancestor(s2Code);
    // both be assigned into group
    if (alphabetUnion[s1Code] !== s1Code && alphabetUnion[s2Code] !== s2Code) {
      // we need to union the two group
      /*
                b <- c <- g
                a <- l <- z
                now come 
                c and z
                we need to set b -> a
             */
      if (s1ancestor > s2ancestor) {
        // s1 -> s2
        alphabetUnion[s1ancestor] = s2ancestor;
      } else if (s1ancestor < s2ancestor) {
        alphabetUnion[s2ancestor] = s1ancestor;
      }
    } else {
      // if s2 is not in group
      if (s2ancestor === s2Code) {
        if (s2Code < s1ancestor) {
          alphabetUnion[s1ancestor] = s2Code;
        } else if (s2Code > s1ancestor) {
          alphabetUnion[s2ancestor] = s1Code;
        }
      } else {
        // s1 is not in group
        if (s1Code < s2ancestor) {
          alphabetUnion[s2ancestor] = s1Code;
        } else if (s1Code > s2ancestor) {
          alphabetUnion[s1Code] = s2Code;
        }
      }
    }
  }
  let answerStr = "";
  for (let i = 0; i < baseStr.length; i++) {
    const str = findancestor(baseStr.charCodeAt(i) - "a".charCodeAt(0)) + 97;

    answerStr += String.fromCharCode(str);
  }
  return answerStr;
}

class Node {
  public val: string = "";
  public next: Node | null = null;
  getVal(): string {
    if (!!this.next) {
      return this.next.getVal();
    } else {
      return this.val;
    }
  }
  setVal(newVal: string): void {
    if (!!this.next) {
      this.next.setVal(newVal);
    } else {
      this.val = newVal;
    }
  }
}

function smallestEquivalentStringWithTrivalNodeClass(
  s1: string,
  s2: string,
  baseStr: string
): string {
  /*
      s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"
      leetcode
      programs
      [l,p]
      [e,r,o,c,a,s]
      [t,g]
      [d,m]
      Output: "aauaaaaada"
      use hashMap key is character value is array
      for the key in the same group, they share the same array pointer
      */
  const hashMap: { [key: string]: Node } = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (!hashMap[s1[i]] && !hashMap[s2[i]]) {
      // keep samllest character on the top of the array
      const smallVal = s1[i] > s2[i] ? s2[i] : s1[i];
      const node = new Node();
      node.val = smallVal;
      hashMap[s1[i]] = node;
      hashMap[s2[i]] = node;
    } else if (!!hashMap[s1[i]] && !!hashMap[s2[i]]) {
      // if s1i !== s2i => we need to merge
      /*
        s1i =a  s2i=g
          a: [b,c,a]
          b: [b,c,a]
          c: [b,c,a]
  
          d:[g,d]
          g:[g,d]
  => d:[g,d,a]
        */

      if (hashMap[s1[i]].getVal() > hashMap[s2[i]].getVal()) {
        // update s1 node  node1->node2
        hashMap[s1[i]].next = hashMap[s2[i]];
      } else if (hashMap[s1[i]].getVal() < hashMap[s2[i]].getVal()) {
        // update s2 node  node2->node1
        hashMap[s2[i]].next = hashMap[s1[i]];
      }
    } else {
      if (!!hashMap[s1[i]]) {
        // s2 not in
        if (hashMap[s1[i]].getVal() > s2[i]) {
          // update smallest letter
          hashMap[s1[i]].setVal(s2[i]);
        }
        hashMap[s2[i]] = hashMap[s1[i]];
      } else {
        // s1 not in
        if (hashMap[s2[i]].getVal() > s1[i]) {
          hashMap[s2[i]].setVal(s1[i]);
        }
        hashMap[s1[i]] = hashMap[s2[i]];
      }
    }
  }
  const answerArr: string[] = [];
  for (let i = 0; i < baseStr.length; i++) {
    if (hashMap[baseStr[i]]) {
      // letter exisst
      answerArr.push(hashMap[baseStr[i]].getVal());
    } else {
      answerArr.push(baseStr[i]);
    }
  }
  return answerArr.join("");
}

// corner case: union two sets
function smallestEquivalentStringFail(
  s1: string,
  s2: string,
  baseStr: string
): string {
  /*
    s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"
    leetcode
    programs
    [l,p]
    [e,r,o,c,a,s]
    [t,g]
    [d,m]
    Output: "aauaaaaada"
    use hashMap key is character value is array
    for the key in the same group, they share the same array pointer
    */
  const hashMap: { [key: string]: string[] } = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (!hashMap[s1[i]] && !hashMap[s2[i]]) {
      // keep samllest character on the top of the array
      const newArray = s1[i] > s2[i] ? [s1[i], s2[i]] : [s2[i], s1[i]];
      hashMap[s1[i]] = newArray;
      hashMap[s2[i]] = newArray;
    } else if (!!hashMap[s1[i]] && !!hashMap[s2[i]]) {
      // if s1i !== s2i => we need to merge
      /*
      s1i =a  s2i=g
        a: [b,c,a]
        b: [b,c,a]
        c: [b,c,a]

        d:[g,d]
        g:[g,d]
=> d:[g,d,a]
      */

      if (hashMap[s1[i]].at(-1)! > hashMap[s2[i]].at(-1)!) {
        // update s1 array
        hashMap[s1[i]].push(hashMap[s2[i]].at(-1)!);
      } else {
        // update s2 array
        hashMap[s2[i]].push(hashMap[s1[i]].at(-1)!);
      }
    } else {
      if (!!hashMap[s1[i]]) {
        // s2 not in
        if (hashMap[s1[i]].at(-1)! > s2[i]) {
          // update smallest letter
          hashMap[s1[i]].push(s2[i]);
        }
        hashMap[s2[i]] = hashMap[s1[i]];
      } else {
        // s1 not in
        if (hashMap[s2[i]].at(-1)! > s1[i]) {
          hashMap[s2[i]].push(s1[i]);
        }
        hashMap[s1[i]] = hashMap[s2[i]];
      }
    }
  }
  const answerArr: string[] = [];
  for (let i = 0; i < baseStr.length; i++) {
    if (hashMap[baseStr[i]]) {
      // letter exisst
      answerArr.push(hashMap[baseStr[i]].at(-1)!);
    } else {
      answerArr.push(baseStr[i]);
    }
  }
  return answerArr.join("");
}

export { smallestEquivalentString };
