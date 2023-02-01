function gcdOfStrings(str1: string, str2: string): string {
  let longStr = "";
  let shortStr = "";
  if (str1.length > str2.length) {
    longStr = str1;
    shortStr = str2;
  } else {
    longStr = str2;
    shortStr = str1;
  }

  function isDiviable(str: string, subStr: string): boolean {
    return str.length % subStr.length === 0 && str + subStr === subStr + str;
  }

  let gcdString: string = "";
  for (let i = 0; i < shortStr.length; i++) {
    const subString = shortStr.substring(0, i + 1);
    if (isDiviable(longStr, subString) && isDiviable(shortStr, subString)) {
      gcdString = subString;
    }
  }
  return gcdString;
}
function gcdOfStringsBF(str1: string, str2: string): string {
  /*
      Input: str1 = "ABABAB", str2 = "ABAB"
      Output: "AB"
  
      for brutue force
      for i=0 i<shorterStr;i++
        try str2.substring(0,i)
       */
  let longStr = "";
  let shortStr = "";
  if (str1.length > str2.length) {
    longStr = str1;
    shortStr = str2;
  } else {
    longStr = str2;
    shortStr = str1;
  }

  function isDiviable(str: string, subStr: string): boolean {
    if (subStr.length > str.length || str.length % subStr.length !== 0)
      return false;
    // aaaa  aa
    const s = subStr.length;
    for (let i = 0; i < str.length / subStr.length; i++) {
      if (str.substring(i * s, (i + 1) * s) !== subStr) {
        return false;
      }
    }
    return true;
  }

  let gcdString: string = "";
  for (let i = 0; i < shortStr.length; i++) {
    const subString = shortStr.substring(0, i + 1);
    if (isDiviable(longStr, subString) && isDiviable(shortStr, subString)) {
      gcdString = subString;
    }
  }
  return gcdString;
}
export { gcdOfStrings };
