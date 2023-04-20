import { jsonStringify } from "../#2633_Convert_Object_to_JSON_String";

it("jsonStringifies object", () => {
  // object only inludes strings, integers, arrays, objects, booleans, and null
  expect(jsonStringify(null)).toBe(`null`);
  expect(jsonStringify("abc")).toBe(`"abc"`);
  expect(jsonStringify("-50")).toBe(`"-50"`);
  expect(jsonStringify([[], 123])).toBe(`[[],123]`);
  expect(jsonStringify({})).toBe(`{}`);
  expect(jsonStringify(true)).toBe(`true`);
  expect(
    jsonStringify({
      y: 1,
      x: 2,
      g: { a: { b: [] }, c: [[0, 1, 2], {}, {}, [{}]] },
    })
  ).toBe(`{"y":1,"x":2,"g":{"a":{"b":[]},"c":[[0,1,2],{},{},[{}]]}}`);
});
