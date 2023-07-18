import { LRUCacheTS as LRUCache } from "../146_LRU_Cache";

it("tests LRUCache", () => {
  const lru = new LRUCache(2);
  lru.put(1, 1);
  lru.put(2, 2);
  console.log(lru);
  expect(lru.get(1)).toBe(1);
  lru.put(3, 3);
  console.log(lru);
  expect(lru.get(2)).toBe(-1);
  lru.put(4, 4);
  expect(lru.get(1)).toBe(-1);
  expect(lru.get(3)).toBe(3);
  expect(lru.get(4)).toBe(4);
});

it("tets LRUCache", () => {
  const l = new LRUCache(2);
  l.put(2, 1);
  l.put(2, 2);
  expect(l.get(2)).toBe(2);
  l.put(1, 1);
  l.put(4, 1);
  expect(l.get(2)).toBe(-1);
});
