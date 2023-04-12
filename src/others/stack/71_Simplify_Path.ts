function simplifyPath(path: string): string {
  const pathArr = path.split("/");
  const pathStack = ["/"];
  console.log(pathArr);
  for (const p of pathArr) {
    if (p === "/" || p === "" || p === ".") continue;
    if (p === "..") {
      if (pathStack.length > 1) {
        pathStack.pop();
        pathStack.pop();
      }
      continue;
    }
    pathStack.push(p);
    pathStack.push("/");
  }
  console.log(pathStack);
  if (pathStack[pathStack.length - 1] === "/" && pathStack.length > 1)
    pathStack.pop();
  return pathStack.join("");
}
function simplifyPathEnum(path: string): string {
  /*
    "/sagsa/../safsaf/../../../asfasf"
    "/asfasf"
  
     */
  const pathStack: string[] = [];

  function goBack(): void {
    if (pathStack.length <= 1) return; // root
    pathStack.pop(); // remove /
    while (pathStack[pathStack.length - 1] !== "/") {
      // pop until meet /
      pathStack.pop();
    }
  }

  for (let i = 0; i < path.length; i++) {
    if (pathStack[pathStack.length - 1] === "/" && path[i] === "/") continue;
    // what if /abc..bcd/
    if (
      path[i] === "." &&
      (path[i + 1] === "/" || i === path.length - 1) &&
      pathStack[pathStack.length - 1] === "/"
    ) {
      i++;
      continue;
    }
    if (
      path[i] === "." &&
      path[i + 1] === "." &&
      (path[i + 2] === "/" || i === path.length - 2) && // incase the .. is at the end of the path
      path[i - 1] === "/"
    ) {
      // go back folder
      goBack();
      i++; // path[i+1] is checked
      continue;
    }
    pathStack.push(path[i]);
  }

  if (pathStack[pathStack.length - 1] === "/" && pathStack.length > 1)
    pathStack.pop();
  return pathStack.join("");
}

export { simplifyPath };
