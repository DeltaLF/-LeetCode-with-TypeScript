import { soupServings } from "../808_Soup_Servings";

it("soupServings", () => {
  expect(soupServings(50)).toBeCloseTo(0.625);
  expect(soupServings(100)).toBeCloseTo(0.71875);
  expect(soupServings(10000)).toBeCloseTo(1);
});
