function restoreIpAddresses(s: string): string[] {
  /*
    Input: s = "25525511135"
    Output: ["255.255.11.135","255.255.111.35"]
    min s length 4
    max s length 12
    brutue force: O(2^n)
    try to add . between every number
layer 4  3  2  1
    255.255.11.135

    */
  const validIPs: string[] = [];

  // a valid IP should have 4 layers
  /*
   valid IP 4 layers => min:4 max:12
   3 => min:3 max:9

   1
    */
  function isValidLayer(subS: string): boolean {
    if (
      subS.length > 3 ||
      subS.length === 0 ||
      (subS.length > 1 && subS[0] === "0")
    )
      return false;
    const subS2num = parseInt(subS);
    if (subS2num <= 255 && subS2num >= 0) {
      return true;
    }
    return false;
  }
  function helper(
    i: number = 0,
    layer: number = 4,
    potentialIP: string[] = [],
    layerStr: string = ""
  ): void {
    if (
      layerStr !== "0" &&
      layer === 1 &&
      isValidLayer(layerStr + s.slice(i, s.length))
    ) {
      validIPs.push(potentialIP.join("") + s.slice(i, s.length));
      return;
    }
    if (s.length - i > layer * 3) return;
    // if (s.length - i < layer || s.length - i > layer * 3) return;
    // don't add .

    if (layerStr.length === 0 || isValidLayer(layerStr + s[i])) {
      if (layerStr !== "0") {
        const copyOfPotentialIP = potentialIP.slice();
        copyOfPotentialIP.push(s[i]);
        helper(i + 1, layer, copyOfPotentialIP.slice(), layerStr + s[i]);
      }
    }
    // add
    if (layerStr[layerStr.length - 1] !== "." && layerStr.length > 0) {
      potentialIP.push(".");
      // reset layerStr
      helper(i, layer - 1, potentialIP.slice(), "");
    }
    return;
  }
  helper();
  return validIPs;
}

export { restoreIpAddresses };
