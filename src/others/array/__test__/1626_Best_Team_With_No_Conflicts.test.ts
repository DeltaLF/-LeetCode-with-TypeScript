import { bestTeamScore } from "../1626_Best_Team_With_No_Conflicts";

it("finds the best team score", () => {
  expect(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])).toBe(16);
  expect(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])).toBe(6);
});
