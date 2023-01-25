import { closestMeetingNode } from "../2359_Find_Closest_Node_to_Given_Two_Nodes";

it("finds the closest meeting node", () => {
  expect(closestMeetingNode([2, 2, 3, -1], 0, 1)).toBe(2);
  expect(closestMeetingNode([2, 2, 3, -1], 0, 2)).toBe(2);
  expect(closestMeetingNode([2, 2, 3, -1], 0, 3)).toBe(3);
  expect(closestMeetingNode([1, 2, 1], 0, 2)).toBe(1);

  expect(closestMeetingNode([4, 3, 0, 5, 3, -1], 4, 0)).toBe(4);
  expect(closestMeetingNode([4, 4, 8, -1, 9, 8, 4, 4, 1, 1], 5, 6)).toBe(1);
});
