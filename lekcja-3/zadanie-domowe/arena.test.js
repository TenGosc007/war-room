import { describe, it, expect } from "vitest";
import {
  obrazeniaBroni,
  seriaAtakow,
  rundyWalki,
  arena,
  fizzBuzz,
} from "./arena.js";

describe("obrazeniaBroni", () => {
  it("miecz zadaje 15", () => {
    expect(obrazeniaBroni("miecz")).toBe(15);
  });

  it("topor zadaje 25", () => {
    expect(obrazeniaBroni("topor")).toBe(25);
  });

  it("luk zadaje 10", () => {
    expect(obrazeniaBroni("luk")).toBe(10);
  });

  it("nieznana broń to pięści — 5", () => {
    expect(obrazeniaBroni("patyk")).toBe(5);
  });
});

describe("seriaAtakow", () => {
  it("3 ataki po 10 to 30", () => {
    expect(seriaAtakow(3, 10)).toBe(30);
  });

  it("0 ataków to 0 obrażeń", () => {
    expect(seriaAtakow(0, 10)).toBe(0);
  });
});

describe("rundyWalki", () => {
  it("potwór 50 HP i 20 obrażeń to 3 rundy", () => {
    expect(rundyWalki(50, 20)).toBe(3);
  });

  it("potwór 100 HP i 25 obrażeń to 4 rundy", () => {
    expect(rundyWalki(100, 25)).toBe(4);
  });

  it("potwór 10 HP i 100 obrażeń to 1 runda", () => {
    expect(rundyWalki(10, 100)).toBe(1);
  });
});

describe("arena", () => {
  it("Miron z toporem na potwora 50 HP", () => {
    expect(arena("Miron", "topor", 50)).toBe(
      "Miron (topor) pokonuje potwora! Liczba rund: 2"
    );
  });

  it("Ela z łukiem na potwora 30 HP", () => {
    expect(arena("Ela", "luk", 30)).toBe(
      "Ela (luk) pokonuje potwora! Liczba rund: 3"
    );
  });
});

describe("fizzBuzz (zadanie dodatkowe)", () => {
  it("fizzBuzz(5) to '1 2 Fizz 4 Buzz'", () => {
    expect(fizzBuzz(5)).toBe("1 2 Fizz 4 Buzz");
  });

  it("fizzBuzz(15) kończy się na 'FizzBuzz'", () => {
    expect(fizzBuzz(15)).toBe(
      "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
    );
  });
});
