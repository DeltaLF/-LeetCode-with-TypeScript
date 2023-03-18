import { BrowserHistory } from "../1472_Design_Browser_History";

it("implement BrowserHistory one", () => {
  const browserHistor = new BrowserHistory("leetcode.com");
  browserHistor.visit("google.com");
  //   expect(browserHistor.stack[1]).toBe("google.com");
  browserHistor.visit("facebook.com");
  //   expect(browserHistor.stack[2]).toBe("facebook.com");
  browserHistor.visit("youtube.com");
  //   expect(browserHistor.stack[3]).toBe("youtube.com");
  expect(browserHistor.back(1)).toBe("facebook.com");
  expect(browserHistor.back(1)).toBe("google.com");
  expect(browserHistor.forward(1)).toBe("facebook.com");
  browserHistor.visit("facebook.com");
  //   expect(browserHistor.stack[3]).toBe("facebook.com");
  /*
  ["BrowserHistory","visit","visit","back","back","back","forward","forward","forward","back","visit","visit","visit","forward","back","forward","forward","forward","forward","forward","forward"]
[["leetcode.com"],["leetcode.com"],["leetcode.com"],[1],[1],[1],[1],[1],[1],[2],["google.com"],["google.com"],["google.com"],[10],[10],[1],[1],[1],[1],[1],[1]]
["BrowserHistory","visit","forward","forward","visit","visit","back","visit","visit","forward","back","visit","visit","visit","forward","forward","visit","visit","back","visit","forward","visit","visit","visit","back"]
[["jrbilt.com"],["uiza.com"],[3],[3],["fveyl.com"],["hyhqfqf.com"],[3],["cccs.com"],["bivz.com"],[6],[1],["cmbw.com"],["iywwwfn.com"],["sktbhdx.com"],[8],[10],["bskj.com"],["thw.com"],[6],["hgesj.com"],[6],["ctb.com"],["fllnc.com"],["fs.com"],[7]]
  */
});

/*
jrbilt.com -> uiza.com -> fveyl.com -> hyhqfqf.com
jrbilt.com => cccs.com -> bivz.com
*/
it("implement BrowserHistory two", () => {
  const bh = new BrowserHistory("jrbilt.com");
  bh.visit("uiza.com");
  expect(bh.forward(3)).toBe("uiza.com");
  expect(bh.forward(3)).toBe("uiza.com");
  bh.visit("fveyl.com");
  bh.visit("hyhqfqf.com");
  expect(bh.back(3)).toBe("jrbilt.com");
  bh.visit("cccs.com");
  bh.visit("bivz.com");
  expect(bh.forward(6)).toBe("bivz.com");
  expect(bh.back(1)).toBe("cccs.com");
});
