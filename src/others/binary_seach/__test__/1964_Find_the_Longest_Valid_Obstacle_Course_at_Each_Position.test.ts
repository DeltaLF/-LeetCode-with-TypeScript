import { longestObstacleCourseAtEachPosition } from "../1964_Find_the_Longest_Valid_Obstacle_Course_at_Each_Position";

it("finds longestObstacleCourseAtEachPosition", () => {
  expect(longestObstacleCourseAtEachPosition([1])).toEqual([1]);
  // two
  expect(longestObstacleCourseAtEachPosition([1, 2])).toEqual([1, 2]);
  expect(longestObstacleCourseAtEachPosition([2, 1])).toEqual([1, 1]);
  expect(longestObstacleCourseAtEachPosition([1, 1])).toEqual([1, 2]);
  // three
  expect(longestObstacleCourseAtEachPosition([1, 2, 3])).toEqual([1, 2, 3]);
  expect(longestObstacleCourseAtEachPosition([1, 2, 1])).toEqual([1, 2, 2]);
  expect(longestObstacleCourseAtEachPosition([3, 2, 1])).toEqual([1, 1, 1]);

  // wrong
  expect(
    longestObstacleCourseAtEachPosition([5, 1, 5, 5, 1, 3, 4, 5, 1, 4])
  ).toEqual([1, 1, 2, 3, 2, 3, 4, 5, 3, 5]);
  expect(
    longestObstacleCourseAtEachPosition([1, 1, 2, 3, 2, 3, 4, 5, 3, 5])
  ).toEqual([1, 2, 3, 4, 4, 5, 6, 7, 6, 8]);
});
