function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined) return false;
  while (obj !== null || obj === undefined) {
    obj = Object.getPrototypeOf(obj);
    if (obj === classFunction?.prototype) return true;
  }

  return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

export { checkIfInstanceOf };
