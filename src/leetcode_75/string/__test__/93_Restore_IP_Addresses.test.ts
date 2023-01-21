import { restoreIpAddresses } from "../93_Restore_IP_Addresses";

it("restores IP addresses", () => {
  expect(restoreIpAddresses("25525511135").sort()).toEqual(
    ["255.255.11.135", "255.255.111.35"].sort()
  );

  expect(restoreIpAddresses("0000").sort()).toEqual(["0.0.0.0"]);

  expect(restoreIpAddresses("101023").sort()).toEqual(
    ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"].sort()
  );
  expect(restoreIpAddresses("172162541").sort()).toEqual(
    [
      "17.216.25.41",
      "17.216.254.1",
      "172.16.25.41",
      "172.16.254.1",
      "172.162.5.41",
      "172.162.54.1",
    ].sort()
  );
});
