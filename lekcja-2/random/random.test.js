import { describe, it, expect } from "vitest";
import {
  rzutKostka,
  rzutMoneta,
  losujZZakresu,
  losujCzterocyfrowa,
  printNumbers,
} from "./random.js";

describe("rzutKostka", () => {
  it("zwraca liczbę całkowitą od 1 do 6", () => {
    for (let i = 0; i < 100; i++) {
      const wynik = rzutKostka();
      expect(Number.isInteger(wynik)).toBe(true);
      expect(wynik).toBeGreaterThanOrEqual(1);
      expect(wynik).toBeLessThanOrEqual(6);
    }
  });
});

describe("rzutMoneta", () => {
  it("zwraca 'orzeł' albo 'reszka'", () => {
    expect(["orzeł", "reszka"]).toContain(rzutMoneta());
  });

  it("przy wielu rzutach losuje oba wyniki", () => {
    const wyniki = new Set();
    for (let i = 0; i < 50; i++) {
      wyniki.add(rzutMoneta());
    }
    expect(wyniki.size).toBe(2);
  });
});

describe("losujZZakresu", () => {
  it("losuje liczbę całkowitą od 5 do 10 (włącznie)", () => {
    for (let i = 0; i < 100; i++) {
      const wynik = losujZZakresu(5, 10);
      expect(Number.isInteger(wynik)).toBe(true);
      expect(wynik).toBeGreaterThanOrEqual(5);
      expect(wynik).toBeLessThanOrEqual(10);
    }
  });
});

describe("losujCzterocyfrowa", () => {
  it("zwraca liczbę całkowitą z zakresu 1000–9999", () => {
    for (let i = 0; i < 100; i++) {
      const wynik = losujCzterocyfrowa();
      expect(Number.isInteger(wynik)).toBe(true);
      expect(wynik).toBeGreaterThanOrEqual(1000);
      expect(wynik).toBeLessThanOrEqual(9999);
    }
  });
});

describe("printNumbers (zadanie dodatkowe)", () => {
  it("printNumbers(1) zwraca '1'", () => {
    expect(printNumbers(1)).toBe("1");
  });

  it("printNumbers(5) zwraca '12345'", () => {
    expect(printNumbers(5)).toBe("12345");
  });

  it("printNumbers(12) zwraca '123456789101112'", () => {
    expect(printNumbers(12)).toBe("123456789101112");
  });
});
