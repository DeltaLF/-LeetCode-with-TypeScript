import { smallestEquivalentString } from "../1061_Lexicographically_Smallest_Equivalent_String";

it("finds the smallestEquivalentString", () => {
  // one
  expect(smallestEquivalentString("a", "b", "a")).toEqual("a");
  expect(smallestEquivalentString("b", "a", "a")).toEqual("a");
  expect(smallestEquivalentString("a", "b", "c")).toEqual("c");
  // two
  expect(smallestEquivalentString("aa", "bb", "ab")).toEqual("aa");
  expect(smallestEquivalentString("ab", "ba", "ab")).toEqual("aa");
  expect(smallestEquivalentString("ac", "bd", "zb")).toEqual("za");

  expect(smallestEquivalentString("parker", "morris", "parser")).toEqual(
    "makkek"
  );
  expect(smallestEquivalentString("morris", "parker", "parser")).toEqual(
    "makkek"
  );
  expect(smallestEquivalentString("hello", "world", "hold")).toEqual("hdld");
  expect(smallestEquivalentString("world", "hello", "hold")).toEqual("hdld");
  expect(
    smallestEquivalentString("leetcode", "programs", "sourcecode")
  ).toEqual("aauaaaaada");
  expect(
    smallestEquivalentString("programs", "leetcode", "sourcecode")
  ).toEqual("aauaaaaada");
});

test("long strings", () => {
  // long
  expect(
    smallestEquivalentString(
      "aabbbabbbbbabbbbaabaabbaaabbbabaababaaaabbbbbabbaa",
      "aabbaabbbabaababaabaababbbababbbaaaabbbbbabbbaabaa",
      "buqpqxmnajphtisernebttymtrydomxnwonfhfjlzzrfhosjct"
    )
  ).toEqual("auqpqxmnajphtiserneattymtrydomxnwonfhfjlzzrfhosjct");
});

test("fail case", () => {
  expect(
    smallestEquivalentString(
      "dfeffdfafbbebbebacbbdfcfdbcacdcbeeffdfebbdebbdafff",
      "adcdfabadbeeafeabbadcefcaabdecabfecffbabbfcdfcaaae",
      "myickvflcpfyqievitqtwvfpsrxigauvlqdtqhpfugguwfcpqv"
    )
  ).toEqual("myiakvalapayqiavitqtwvapsrxigauvlqatqhpaugguwaapqv");
});

test("fail once again", () => {
  expect(
    smallestEquivalentString(
      "opecenadojbodihfgmpijpfocomhcncicefpohkibjckijghii",
      "ndlbhpaeppgekfhnjnmmplmdoifdhbglmedpjgleofgnahglbe",
      "ttusuhhrabgsswpaapxoxdanchyccmpjitwwmfioedtbiggfru"
    )
  ).toEqual("ttusuaaraaasswaaaaxaxaaaaayaaaaaatwwaaaaaataaaaaru");
});
