import { WordDictionary } from "../211_Design_Add_and_Search_Words_Data_Structure";

it("build wordDicitonary", () => {
  const wd = new WordDictionary();
  wd.addWord("bad");
  wd.addWord("bad");
  wd.addWord("mad");
  expect(wd.search("b..")).toBe(true);
  expect(wd.search(".a.")).toBe(true);
  expect(wd.search("..d")).toBe(true);
  expect(wd.search("..d.")).toBe(false);
  expect(wd.search("..")).toBe(false);
  wd.addWord("ma");
  expect(wd.search("..")).toBe(true);
});
