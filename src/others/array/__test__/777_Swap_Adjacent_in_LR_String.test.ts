import { canTransform } from "../777_Swap_Adjacent_in_LR_String";

it("checks whether it can be transform or not", () => {
  /*
    L,R,X
    "XL"
    "RX"
    */
  //one
  expect(canTransform("L", "R")).toBe(false);
  expect(canTransform("L", "L")).toBe(true);

  // two
  expect(canTransform("XL", "LX")).toBe(true);
  expect(canTransform("XX", "XX")).toBe(true);
  expect(canTransform("RX", "XR")).toBe(true);
  expect(canTransform("RX", "RX")).toBe(true);

  expect(canTransform("RR", "LR")).toBe(false);

  expect(canTransform("XL", "LL")).toBe(false);

  expect(canTransform("XXXXXLXXXX", "LXXXXXXXXX")).toBe(true);

  expect(canTransform("XXRXLXRXXX", "XXRLXXXXXR")).toBe(true);
  expect(canTransform("XXXXXLXXXXXXRXLXRXXX", "LXXXXXXXXXXXRLXXXXXR")).toBe(
    true
  );
  expect(canTransform("XXXXLLLLXRRXR", "XXXLLLLXXXRRR")).toBe(true);
});
