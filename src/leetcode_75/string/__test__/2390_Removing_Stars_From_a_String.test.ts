import { removeStars } from "../2390_Removing_Stars_From_a_String";

it("removeStars in string", () => {
  // one
  expect(removeStars("a")).toBe("a");
  //two
  expect(removeStars("a*")).toBe("");
  expect(removeStars("aa")).toBe("aa");
  // three
  expect(removeStars("abc")).toBe("abc");
  expect(removeStars("a*c")).toBe("c");
  expect(removeStars("ab*")).toBe("a");

  expect(removeStars("leet**cod*e")).toBe("lecoe");
});
