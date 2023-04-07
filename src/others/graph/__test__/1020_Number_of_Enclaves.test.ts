import { numEnclaves } from "../1020_Number_of_Enclaves";

it("find the number of enclaves", () => {
  // one
  expect(numEnclaves([[0]])).toBe(0);
  expect(numEnclaves([[1]])).toBe(0);
  // two
  expect(
    numEnclaves([
      [0, 0],
      [1, 1],
    ])
  ).toBe(0);
  expect(
    numEnclaves([
      [1, 1],
      [1, 1],
    ])
  ).toBe(0);
  expect(
    numEnclaves([
      [0, 0],
      [0, 0],
    ])
  ).toBe(0);
  // three
  expect(
    numEnclaves([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  ).toBe(0);
  expect(
    numEnclaves([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(1);
  expect(
    numEnclaves([
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(0);
  // four
  expect(
    numEnclaves([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])
  ).toBe(0);
  expect(
    numEnclaves([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ])
  ).toBe(3);
  expect(
    numEnclaves([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ])
  ).toBe(2);
  expect(
    numEnclaves([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ])
  ).toBe(4);
  expect(
    numEnclaves([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
    ])
  ).toBe(0);
});
