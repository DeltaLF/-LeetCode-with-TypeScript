import { findCheapestPrice } from "../787_Cheapest_Flights_Within_K_Stops";

it("finds cheapest price of flights", () => {
  expect(
    findCheapestPrice(
      4,
      [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
      ],
      0,
      3,
      1
    )
  ).toBe(700);
  expect(
    findCheapestPrice(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      1
    )
  ).toBe(200);

  expect(
    findCheapestPrice(
      5,
      [
        [0, 1, 100],
        [0, 2, 100],
        [0, 3, 10],
        [1, 2, 100],
        [1, 4, 10],
        [2, 1, 10],
        [2, 3, 100],
        [2, 4, 100],
        [3, 2, 10],
        [3, 4, 100],
      ],
      0,
      4,
      3
    )
  ).toBe(40);

  expect(
    findCheapestPrice(
      4,
      [
        [0, 1, 1],
        [0, 2, 5],
        [1, 2, 1],
        [2, 3, 1],
      ],
      0,
      3,
      1
    )
  ).toBe(6);
});
