import { accountsMerge } from "../721_Accounts_Merge";

function haveSome(answer: string[][], oneOfExpect: string[]): boolean {
  return answer.some((ans) => ans.toString() === oneOfExpect.toString());
}

it("tests accountsMerge function", () => {
  expect(accountsMerge([["zz", "aa@mail.com"]]).toString()).toEqual(
    [["zz", "aa@mail.com"]].toString()
  );
});

it("tests accountsMerge function", () => {
  const result = accountsMerge([
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ]);
  expect(
    haveSome(result, [
      "John",
      "john00@mail.com",
      "john_newyork@mail.com",
      "johnsmith@mail.com",
    ])
  ).toBe(true);
  expect(haveSome(result, ["Mary", "mary@mail.com"])).toBe(true);
  expect(haveSome(result, ["John", "johnnybravo@mail.com"])).toBe(true);
});
