import { numSimilarGroups } from "../839_Similar_String_Groups";

it("finds number of similar groups", () => {
  expect(numSimilarGroups(["abc"])).toBe(1);
  // two
  expect(numSimilarGroups(["abc", "cba"])).toBe(1);
  expect(numSimilarGroups(["abc", "bca"])).toBe(2);
  expect(numSimilarGroups(["abc", "bac"])).toBe(1);
  // three
  expect(numSimilarGroups(["abc", "bca", "acb"])).toBe(1);

  expect(
    numSimilarGroups([
      "qihcochwmglyiggvsqqfgjjxu",
      "gcgqxiysqfqugmjgwclhjhovi",
      "gjhoggxvcqlcsyifmqgqujwhi",
      "wqoijxciuqlyghcvjhgsqfmgg",
      "qshcoghwmglygqgviiqfjcjxu",
      "jgcxqfqhuyimjglgihvcqsgow",
      "qshcoghwmggylqgviiqfjcjxu",
      "wcoijxqiuqlyghcvjhgsqgmgf",
      "qshcoghwmglyiqgvigqfjcjxu",
      "qgsjggjuiyihlqcxfovchqmwg",
      "wcoijxjiuqlyghcvqhgsqgmgf",
      "sijgumvhqwqioclcggxgyhfjq",
      "lhogcgfqqihjuqsyicxgwmvgj",
      "ijhoggxvcqlcsygfmqgqujwhi",
      "qshcojhwmglyiqgvigqfgcjxu",
      "wcoijxqiuqlyghcvjhgsqfmgg",
      "qshcojhwmglyiggviqqfgcjxu",
      "lhogcgqqfihjuqsyicxgwmvgj",
      "xscjjyfiuglqigmgqwqghcvho",
      "lhggcgfqqihjuqsyicxgwmvoj",
      "lhgocgfqqihjuqsyicxgwmvgj",
      "qihcojhwmglyiggvsqqfgcjxu",
      "ojjycmqshgglwicfqguxvihgq",
      "sijvumghqwqioclcggxgyhfjq",
      "gglhhifwvqgqcoyumcgjjisqx",
    ])
  ).toBe(11);

  expect(
    numSimilarGroups([
      "uqtqjancqpfataqrlfmuglyyv",
      "yalucgattqqpfmfunyrvqlajq",
      "yatucgatlqqpfmfunyrvqlajq",
      "yatucgatlqqpfrfunymvqlajq",
      "qqyajmtpafulucvtgqqalnfry",
      "clqugvltmryyqajqafqntafup",
      "qmrglvyayaajqnfulcptqutfq",
      "qcagqvyayarjlmfulnptqutfq",
      "qnrgqvyayaajlmfulcptqutfq",
      "qcagqvyauarjlmfylnptqutfq",
      "clqugvltpryyqajqafqntafum",
      "qmrgqvyayaajlnfulcptqutfq",
      "rlqugvltyjpyqacqafqnfatum",
      "uqtqjancqpfytyqrafmuglalv",
      "clqugvjtmryyqalqafqntafup",
      "qqyujmtpafalucvtgqqalnfry",
      "clqugvltyrpyqajqafqnfatum",
      "qnagqvyayarjlmfulcptqutfq",
      "uqtqjancqpfataqryfmuglylv",
      "yglavtqaptqfmfqjrunqlaycu",
      "uqtqjancqpfatyqrafmuglylv",
      "mvfqtcgfaqrauqytplqyuajnl",
      "jlqugvltyrpyqacqafqnfatum",
      "yatfcgatlqqpfruunymvqlajq",
      "clqugvltpryyqajqafqnfatum",
    ])
  ).toBe(7);
});
