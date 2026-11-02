import { describe, it, expect } from "vitest";
import { connectWagons } from "./index";

function logLocomotives(name, locomotives) {
  console.log(`przypadek ${name}:`);
  ["A", "B", "C"].forEach((loco, i) => {
    const total = locomotives[i].reduce((a, b) => a + b, 0);
    console.log(
      `lokomotive ${loco}: [${locomotives[i].join(", ")}] -> ${total}`,
    );
  });
}

const testCases = [
  {
    name: "0",
    wagons: [1, 3, 2, 1, 3],
    expected: [[1, 1, 3], [3], [2]],
  },
  {
    name: "1",
    wagons: [1, 2, 3, 3, 2, 1],
    expected: [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
  },
  {
    name: "2",
    wagons: [1, 3, 2, 2, 3, 2, 1, 1, 3],
    expected: [
      [1, 2, 2, 3],
      [3, 1, 1],
      [2, 3],
    ],
  },
  {
    name: "3.1",
    wagons: [1, 2, 2, 3, 2, 1, 1, 2, 3, 3],
    expected: [
      [1, 3, 2],
      [2, 2, 3],
      [2, 1, 1, 3],
    ],
  },
  {
    name: "3.2",
    wagons: [1, 2, 2, 3, 2, 2, 1, 2, 3, 3],
    expected: [
      [1, 3, 1, 3],
      [2, 2, 2],
      [2, 2, 3],
    ],
  },
  {
    name: "3.3",
    wagons: [1, 2, 2, 3, 2, 3, 1, 2, 3, 3],
    expected: [
      [1, 3, 1, 3],
      [2, 2, 2],
      [2, 3, 3],
    ],
  },
  {
    name: "4",
    wagons: [1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1],
    expected: [
      [1, 1, 2, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
    ],
  },
  {
    name: "5",
    wagons: [1, 2, 5, 4, 3, 6],
    expected: [[1, 4, 6], [2, 3], [5]],
  },
];

describe("connectWagons", () => {
  it.each(testCases)(
    "przypadek $name: $wagons -> $expected",
    ({ name, wagons, expected }) => {
      const result = connectWagons(wagons);
      logLocomotives(name, result);
      expect(result).toEqual(expected);
    },
  );
});
