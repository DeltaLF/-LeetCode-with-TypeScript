import { SnapshotArray } from "../#1146_Snapshot_Array";

test("SnapshotArray", () => {
  const saOne = new SnapshotArray(1);
  expect(saOne.get(0, 0)).toBe(0);
  saOne.set(0, 1);
  expect(saOne.get(0, 0)).toBe(1);
  saOne.snap();
  expect(saOne.get(0, 0)).toBe(1);
  saOne.set(0, 2);
  expect(saOne.get(0, 0)).toBe(1);
  expect(saOne.get(0, 1)).toBe(2);
  saOne.snap();
  saOne.snap();
  saOne.snap();
  expect(saOne.get(0, 1)).toBe(2);
  expect(saOne.get(0, 2)).toBe(2);
  expect(saOne.get(0, 3)).toBe(2);

  const sa = new SnapshotArray(3);
  sa.set(1, 18);
  sa.set(1, 4);
  sa.snap();
  expect(sa.get(0, 0)).toBe(0);
  sa.set(0, 20);
  sa.snap();
  sa.set(0, 2);
  sa.set(1, 1);
  expect(sa.get(1, 1)).toBe(4);
  expect(sa.get(1, 0)).toBe(4);
});
