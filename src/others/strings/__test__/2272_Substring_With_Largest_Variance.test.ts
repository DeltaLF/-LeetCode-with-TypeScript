import { largestVariance } from "../#2272_Substring_With_Largest_Variance";

it("e", () => {
  expect(largestVariance("abbabbab")).toBe(3);
});

it("finds largestVariance", () => {
  expect(largestVariance("abbaaaaaaaaa")).toBe(8);
  expect(
    largestVariance(
      "clnmgztqeutmubhkdddahzzwqmmfppvsirjvtevxbfcnezhasmzvbjunohqpzymrrvdsgoetegdkwzvgtqavbetctjscgihphmbadglnygxvljeesqkicodpmzfzbpyqvglqoyzqollgcmbpcpeigukgyyjhbacckhzxckwdlayzspkrlgwjauoehoeptrxeygofztspjxpsdf"
    )
  ).toBe(11);
  expect(
    largestVariance(
      "ykudzhiixwttnvtesiwnbcjmsydidttiyabbwzlfbmmycwjgzwhbtvtxyvkkjgfehaypiygpstkhakfasiloaveqzcywsiujvixcdnxpvvtobxgroznswwwipypwmdhldsoswrzyqthaqlbwragjrqwjxgmftjxqugoonxadazeoxalmccfeyqtmoxwbnphxih"
    )
  ).toBe(12);
  expect(largestVariance("aaaaaaaaaaabbbbbbbbbbbb")).toBe(11);
  expect(largestVariance("a")).toBe(0);
  expect(largestVariance("ab")).toBe(0);
  expect(largestVariance("abcde")).toBe(0);
  expect(
    largestVariance(
      "aaaaaaaaababababababababababbasbsbabsavgdskgjbdsgkjsbdglkjdsbgkjdsbgkdsjvbgkdsnvbgkdsjnvgskdnvgkdsvbgdsb"
    )
  ).toBe(21);
  expect(largestVariance("aaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(0);
  expect(
    largestVariance(
      "abababababababababababbabababababababababababbababababababababbababbbbabababab"
    )
  ).toBe(7);
  expect(largestVariance("abasv")).toBe(1);
});
