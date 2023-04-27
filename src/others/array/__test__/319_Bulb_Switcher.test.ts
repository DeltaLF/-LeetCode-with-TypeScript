import { bulbSwitch } from "../319_Bulb_Switcher";

it("tests bulbSwitch", () => {
  expect(bulbSwitch(0)).toBe(0);
  expect(bulbSwitch(1)).toBe(1);
  expect(bulbSwitch(2)).toBe(1);
  expect(bulbSwitch(3)).toBe(1);
  expect(bulbSwitch(4)).toBe(2);
  expect(bulbSwitch(1000000)).toBe(1000);
  expect(bulbSwitch(100000000)).toBe(10000);
  expect(bulbSwitch(99999999)).toBe(9999);
});
