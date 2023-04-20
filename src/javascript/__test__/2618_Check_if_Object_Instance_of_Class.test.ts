import { checkIfInstanceOf } from "../#2618_Check_if_Object_Instance_of_Class";

it("checkIfInstanceOf", () => {
  expect((() => checkIfInstanceOf(new Date(), Date))()).toBe(true);
  expect(
    (() => {
      class Animal {}
      class Dog extends Animal {}
      return checkIfInstanceOf(new Dog(), Animal);
    })()
  ).toBe(true);
  expect((() => checkIfInstanceOf(Date, Date))()).toBe(false);
  expect((() => checkIfInstanceOf(null, null))()).toBe(false);
  expect((() => checkIfInstanceOf(undefined, undefined))()).toBe(false);
  expect((() => checkIfInstanceOf(BigInt(100), BigInt))()).toBe(true);
  expect((() => checkIfInstanceOf(BigInt(100), Number))()).toBe(false);
  expect((() => checkIfInstanceOf(Symbol(100), Symbol))()).toBe(true);
  expect((() => checkIfInstanceOf([], null))()).toBe(false);
  expect((() => checkIfInstanceOf(0, Object))()).toBe(true);
});
