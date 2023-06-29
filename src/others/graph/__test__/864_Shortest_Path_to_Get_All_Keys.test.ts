import { shortestPathAllKeys } from "../864_Shortest_Path_to_Get_All_Keys";

it("finds the shortest path with all keys", () => {
  expect(shortestPathAllKeys(["@...a", ".###A", "b.BCc"])).toBe(10);
  expect(shortestPathAllKeys(["@###", "a##A", "b##B"])).toBe(2);
  expect(
    shortestPathAllKeys([
      "...........a..................",
      "..............................",
      "..............................",
      "..............................",
      "..............................",
      "..................@...........",
      "..............................",
      "..............................",
      "...............A..............",
      "..............................",
    ])
  ).toBe(12);
});
