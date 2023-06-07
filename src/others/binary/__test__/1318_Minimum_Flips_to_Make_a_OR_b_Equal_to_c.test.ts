import { minFlips } from "../1318_Minimum_Flips_to_Make_a_OR_b_Equal_to_c";

it("finds minFlips", () => {
  expect(minFlips(2, 6, 5)).toBe(3);
  expect(minFlips(4, 2, 7)).toBe(1);

  expect(minFlips(123456789, 987654321, 123456789)).toBe(8);
  expect(minFlips(123132132, 3213321, 456)).toBe(19);
  expect(minFlips(1, 321332165, 6516456)).toBe(14);
});
