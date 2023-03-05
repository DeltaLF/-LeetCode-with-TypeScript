import { minJumps } from "../1345_Jump_Game_IV";

it("finds the min jumps", () => {
  expect(minJumps([1])).toBe(0);
  expect(minJumps([10])).toBe(0);

  expect(minJumps([1, 2])).toBe(1);
  expect(minJumps([1, 1])).toBe(1);

  expect(minJumps([7, 6, 9, 6, 9, 6, 9, 7])).toBe(1);
  expect(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])).toBe(3);
});

test("extremely cases", () => {
  expect(minJumps([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])).toBe(2);
});
