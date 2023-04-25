import { SmallestInfiniteSet } from "../2336_Smallest_Number_in_Infinite_Set";

it("tests smallestInfiniteSet", () => {
  const si = new SmallestInfiniteSet();
  expect(si.numNotExist.length).toBe(0);
  expect(si.popSmallest()).toBe(1);
  expect(si.numNotExist.length).toBe(1);
  expect(si.popSmallest()).toBe(2);
  expect(si.numNotExist.length).toBe(2);
  si.addBack(5);
  expect(si.numNotExist.length).toBe(2);
  si.addBack(4);
  expect(si.numNotExist.length).toBe(2);
  si.addBack(1);
  expect(si.numNotExist.length).toBe(1);
  expect(si.numNotExist[0]).toBe(2);
  si.addBack(1);
  expect(si.numNotExist.length).toBe(1);
  expect(si.numNotExist[0]).toBe(2);
  si.addBack(2);
  expect(si.numNotExist.length).toBe(0);
});
