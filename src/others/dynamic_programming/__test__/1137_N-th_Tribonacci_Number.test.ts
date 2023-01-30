import { tribonacci } from "../1137_N-th_Tribonacci_Number";

it("tests tribonacci function", () => {
  expect(tribonacci(0)).toBe(0);
  expect(tribonacci(1)).toBe(1);
  expect(tribonacci(2)).toBe(1);
  expect(tribonacci(3)).toBe(2);
  expect(tribonacci(4)).toBe(4);
  expect(tribonacci(5)).toBe(7);

  expect(tribonacci(25)).toBe(1389537);
});
