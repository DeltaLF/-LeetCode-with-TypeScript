import { simplifyPath } from "../71_Simplify_Path";

it("simplifyPath", () => {
  expect(simplifyPath("/home/")).toBe("/home");
  expect(simplifyPath("/../")).toBe("/");
  expect(simplifyPath("/home//foo/")).toBe("/home/foo");
  expect(simplifyPath("/asfasf/fsa/../")).toBe("/asfasf");
  expect(simplifyPath("/sagsa/../safsaf/../../../asfasf")).toBe("/asfasf");
  expect(simplifyPath("/../..afsafsa/afssaf/..//////asfsaf")).toBe(
    "/..afsafsa/asfsaf"
  );
  expect(simplifyPath("/../../../../atc")).toBe("/atc");
  expect(simplifyPath("/asfs/afsa/..")).toBe("/asfs");

  // no /./
  expect(simplifyPath("/////../../.../.../...//.//././")).toBe("/.../.../...");
  expect(simplifyPath("/////../../.../.../...//.//././.")).toBe("/.../.../...");

  expect(
    simplifyPath(
      "/asf.asfa.sf.fas.gasga..asg...gsg.as/saf.asf.fsaf.gsa.g./.safs/"
    )
  ).toBe("/asf.asfa.sf.fas.gasga..asg...gsg.as/saf.asf.fsaf.gsa.g./.safs");
});
