import { topKFrequent } from "../347_Top_K_Frequent_Elements";

it("tests topKFrequent", () => {
  // one
  const one = [1];
  expect(topKFrequent(one, 1)).toEqual([1]);
  // two
  const two = [1, 2, 1];
  const ans2_1 = topKFrequent(two, 1);
  expect(ans2_1).toEqual([1]);
  const ans2_2 = topKFrequent(two, 2);
  expect(ans2_2.indexOf(1) >= 0).toBe(true);
  expect(ans2_2.indexOf(2) >= 0).toBe(true);

  // mutiple
  const mutiple = [1, 1, 1, 2, 2, 3];
  expect(topKFrequent(mutiple, 1)).toEqual([1]);
  const ans_mul_2 = topKFrequent(mutiple, 2);
  expect(ans_mul_2.indexOf(1) >= 0).toBe(true);
  expect(ans_mul_2.indexOf(2) >= 0).toBe(true);
  expect(ans_mul_2.indexOf(3)).toBe(-1);

  // duplicated
  const dup = [1, 1, 1, 1, 1];
  expect(topKFrequent(dup, 1)).toEqual([1]);
});
