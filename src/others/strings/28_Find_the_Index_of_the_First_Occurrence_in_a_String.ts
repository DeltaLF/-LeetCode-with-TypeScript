import { kmp } from "../../alogrithm/string/kmp_algorithmn";

function strStr(hayStack: string, needle: string): number {
  return kmp(hayStack, needle);
}

function strStrMN(haystack: string, needle: string): number {
  /*
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0

    brute force
    sadbutsad
    |
    0 check sad in every letter of haystack
    O(mn) => iterate through haystack(m) and needle(n)
     */
  let j = 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === needle.length) return i;
  }
  return -1;
}

export { strStr };
