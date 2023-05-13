import { countGoodStrings } from "../2466_Count_Ways_To_Build_Good_Strings";

it("countsGoodStrings", () => {
  expect(countGoodStrings(1, 1000, 1, 1)).toBe(376846411);
  expect(countGoodStrings(999, 1000, 1, 1)).toBe(32634808);
});
