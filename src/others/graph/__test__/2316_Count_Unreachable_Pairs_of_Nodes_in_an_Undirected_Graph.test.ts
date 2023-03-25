import { countPairs } from "../2316_Count_Unreachable_Pairs_of_Nodes_in_an_Undirected_Graph";

it("tests countPairs", () => {
  // one
  expect(countPairs(1, [])).toBe(0);
  // two
  expect(countPairs(2, [[0, 1]])).toBe(0);
  expect(countPairs(2, [])).toBe(1);

  expect(
    countPairs(3, [
      [0, 1],
      [0, 2],
      [1, 2],
    ])
  ).toBe(0);
  expect(countPairs(100000, [])).toBe(4999950000);
});
