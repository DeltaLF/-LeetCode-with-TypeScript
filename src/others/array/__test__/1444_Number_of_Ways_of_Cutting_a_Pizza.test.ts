import { ways } from "../1444_Number_of_Ways_of_Cutting_a_Pizza";

it("finds ways of cut", () => {
  expect(ways(["A..", "AAA", "..."], 3)).toBe(3);

  expect(
    ways(
      [
        "A.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AA",
        "A.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AA",
        "A.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AA",
        "A.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AA",
        "A.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AA",
        "A.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AAA.A.A.A.AA",
      ],
      5
    )
  ).toBe(611451);
});
