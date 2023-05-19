import { isBipartite } from "../785_Is_Graph_Bipartite";

it("checks isBipartite", () => {
  // one
  expect(isBipartite([[]])).toBe(true);
  // two
  expect(isBipartite([[1], [0]])).toBe(true);
  expect(isBipartite([[], []])).toBe(true);
  // three
  expect(isBipartite([[1], [0], []])).toBe(true);
  expect(isBipartite([[1, 2], [0], [0]])).toBe(true);
  expect(
    isBipartite([
      [1, 2],
      [0, 2],
      [0, 1],
    ])
  ).toBe(false);

  expect(
    isBipartite([[1, 2, 3, 4, 5, 6, 7], [0], [0], [0], [0], [0], [0], [0]])
  ).toBe(true);
});
