import { KthLargest } from "../703_Kth_Largest_Element_in_a_Stream";

it("returns KthLargest", () => {
  // k=1
  const k1 = new KthLargest(1, [1, 2, 3]);
  expect(k1.add(1)).toBe(3);
  expect(k1.add(2)).toBe(3);
  expect(k1.add(3)).toBe(3);
  expect(k1.add(5)).toBe(5);
  expect(k1.add(10)).toBe(10);
  // k=2
  const k2 = new KthLargest(2, [1, 1, 1, 1]);
  expect(k2.add(3)).toBe(1);
  expect(k2.add(3)).toBe(3);
  expect(k2.add(5)).toBe(3);
  expect(k2.add(5)).toBe(5);
  expect(k2.add(1)).toBe(5);

  const k = new KthLargest(3, [5, -1]);
  expect(k.add(2)).toBe(-1);
  expect(k.add(5)).toBe(2);
});
