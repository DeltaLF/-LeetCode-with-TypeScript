import { minimumDeleteSum } from "../712_Minimum_ASCII_Delete_Sum_for_Two_Strings";

it("finds minimumDeleteSum", () => {
  expect(minimumDeleteSum("a", "a")).toBe(0);
  expect(minimumDeleteSum("aaaaaaaaaaaaa", "aaaaabbbbbbbbbaaaaaaaaa")).toBe(
    979
  );

  expect(
    minimumDeleteSum(
      "asfsafgsafglsawghwsakgewgnalkgndslkgjndslkgjndslkgndslkgndslkgnsdlgknsdlgkndslgkndslgkndslgksdgsldgknsglknsdlgkndslgkdslgknsldgknslknbghslknbhslewntglewghmlehmdflbhkmdfbh",
      "sadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdgsadgspgsgsdg"
    )
  ).toBe(31741);
});
