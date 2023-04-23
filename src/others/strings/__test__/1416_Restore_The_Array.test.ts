import { numberOfArrays } from "../#1416_Restore_The_Array";

it("finds the possible combinations of arrays", () => {
  expect(numberOfArrays("1", 1)).toBe(1);
  expect(numberOfArrays("1", 0)).toBe(0);
  //two
  expect(numberOfArrays("12", 5)).toBe(1);
  expect(numberOfArrays("12", 50)).toBe(2);
  expect(numberOfArrays("10", 5)).toBe(0);
  expect(numberOfArrays("10", 50)).toBe(1);
  // three
  expect(numberOfArrays("123", 5)).toBe(1);
  expect(numberOfArrays("123", 50)).toBe(3);
  expect(numberOfArrays("123", 500)).toBe(4);
  expect(numberOfArrays("999", 5)).toBe(0);

  expect(numberOfArrays("1234567890", 90)).toBe(34);
  expect(
    numberOfArrays(
      "171895851301603621199279559472582240564804526335544534392551",
      905
    )
  ).toBe(573330896);
});
