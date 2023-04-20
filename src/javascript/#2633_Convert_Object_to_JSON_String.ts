function jsonStringify(object: any): string {
  /*
      only includes strings, integers, arrays, objects, booleans and null
       */
  if (typeof object === "string") return `"${object}"`;
  if (object === null || typeof object !== "object") return `${object}`;
  const resultArr: string[] = []; // mutate the result to be more efficient
  const isArray = Array.isArray(object);
  resultArr.push(isArray ? "[" : "{");
  for (let [key, value] of Object.entries(object)) {
    if (isArray) {
      resultArr.push(`${jsonStringify(value)}`);
    } else {
      resultArr.push(`"${key}":${jsonStringify(value)}`);
    }
    resultArr.push(",");
  }
  if (resultArr.length > 1) resultArr.pop(); // remove the extra comma
  resultArr.push(isArray ? "]" : "}");
  return resultArr.join("");
}

export { jsonStringify };
