import { ListFormat } from "typescript";
import { LFUCache, Node } from "../460_LFU_Cache";

it("tests LFU cache with capacity 0", () => {
  const lfu = new LFUCache(0);
  lfu.put(1, 1);
  lfu.put(2, 2);
  expect(lfu.get(1)).toBe(-1);
  expect(lfu.get(3)).toBe(-1);
  lfu.put(3, 3);
  expect(lfu.get(3)).toBe(-1);
  expect(lfu.get(2)).toBe(-1);
});

it("tests LFU cache", () => {
  const lfu = new LFUCache(2);
  lfu.put(1, 1);
  lfu.put(2, 2);
  expect(lfu.get(1)).toBe(1);
  expect(lfu.get(3)).toBe(-1);
  lfu.put(3, 3);
  expect(lfu.get(3)).toBe(3);
  expect(lfu.get(2)).toBe(-1);
});

it("tests LFU cache with other case", () => {
  const lfu = new LFUCache(3);
  lfu.put(2, 2);
  lfu.put(1, 1);
  expect(lfu.get(2)).toBe(2);
  expect(lfu.get(1)).toBe(1);
  expect(lfu.get(2)).toBe(2);
  lfu.put(3, 3);
  lfu.put(4, 4);
  expect(lfu.get(3)).toBe(-1);
  expect(lfu.get(2)).toBe(2);
  expect(lfu.get(1)).toBe(1);
  expect(lfu.get(4)).toBe(4);
});

it("tests LFU cache with failed case", () => {
  const lfu = new LFUCache(2);
  lfu.put(3, 1);
  lfu.put(2, 1);
  lfu.put(2, 2);
  lfu.put(4, 4);
  expect(lfu.get(2)).toBe(2);
});
