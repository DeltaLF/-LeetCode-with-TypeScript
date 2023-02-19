import { Trie } from "../208_Implement_Trie_(Prefix Tree)";

it("tests Trie class", () => {
  const trie = new Trie();
  expect(trie.search("a")).toBe(false);
  expect(trie.search("abc")).toBe(false);
  expect(trie.startsWith("a")).toBe(false);
  expect(trie.startsWith("abc")).toBe(false);
  trie.insert("apple");
  expect(trie.search("a")).toBe(false);
  expect(trie.search("abc")).toBe(false);
  expect(trie.search("apple")).toBe(true);
  expect(trie.search("apples")).toBe(false);
  expect(trie.search("appl")).toBe(false);
  expect(trie.startsWith("a")).toBe(true);
  expect(trie.startsWith("appl")).toBe(true);
  expect(trie.startsWith("apple")).toBe(true);
  expect(trie.startsWith("abc")).toBe(false);
});
