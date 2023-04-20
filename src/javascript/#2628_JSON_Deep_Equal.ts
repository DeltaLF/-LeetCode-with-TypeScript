function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 !== "object" || o1 === null) return o1 === o2;
  if (typeof o2 !== "object" || o2 === null) return false;
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let key of Object.keys(o1)) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }
  return true;
}
export { areDeeplyEqual };
