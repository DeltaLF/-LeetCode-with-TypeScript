import { predictPartyVictory } from "../#649_Dota2_Senate";

it("predicts party victory", () => {
  expect(predictPartyVictory("R")).toBe("Radiant");
  expect(predictPartyVictory("D")).toBe("Dire");
  // two
  expect(predictPartyVictory("RR")).toBe("Radiant");
  expect(predictPartyVictory("RD")).toBe("Radiant");
  expect(predictPartyVictory("DR")).toBe("Dire");
  expect(predictPartyVictory("DD")).toBe("Dire");
  // three
  expect(predictPartyVictory("RDR")).toBe("Radiant");
  expect(predictPartyVictory("DRR")).toBe("Radiant");
  expect(predictPartyVictory("DDR")).toBe("Dire");
  expect(predictPartyVictory("RRD")).toBe("Radiant");

  // wrong
  expect(predictPartyVictory("RRRRRDDDDDD")).toBe("Radiant");
  expect(predictPartyVictory("RRRRRDDDDDDD")).toBe("Radiant");
  expect(predictPartyVictory("RRRRDDDDD")).toBe("Radiant");
  expect(predictPartyVictory("RRRRDDDDDD")).toBe("Radiant");
});
