import { describe, it, expect } from "vitest";
import {
  kartaBohatera,
  rzutK20,
  ocenAtak,
  pojedynek,
  eliksir,
} from "./pojedynek.js";

describe("kartaBohatera", () => {
  it("zwraca kartę z HP: 120 po eliksirze", () => {
    expect(kartaBohatera("Arthus")).toContain("HP: 120");
  });

  it("zwraca kartę z Mana: 40 po zaklęciu", () => {
    expect(kartaBohatera("Arthus")).toContain("Mana: 40");
  });

  it("zaczyna się od nicku bohatera", () => {
    expect(kartaBohatera("Miron")).toMatch(/^Miron \|/);
  });
});

describe("rzutK20", () => {
  it("zwraca liczbę całkowitą od 1 do 20", () => {
    for (let i = 0; i < 100; i++) {
      const wynik = rzutK20();
      expect(Number.isInteger(wynik)).toBe(true);
      expect(wynik).toBeGreaterThanOrEqual(1);
      expect(wynik).toBeLessThanOrEqual(20);
    }
  });
});

describe("ocenAtak", () => {
  it("rzut 20 to 'Trafienie krytyczne!'", () => {
    expect(ocenAtak(20)).toBe("Trafienie krytyczne!");
  });

  it("rzut 15 to 'Trafienie'", () => {
    expect(ocenAtak(15)).toBe("Trafienie");
  });

  it("rzut 5 to 'Pudło!'", () => {
    expect(ocenAtak(5)).toBe("Pudło!");
  });
});

describe("pojedynek", () => {
  it("krytyk: smok traci 50 HP", () => {
    expect(pojedynek("Arthus", 19)).toBe(
      "Arthus: Trafienie krytyczne! Smok traci 50 HP i ma teraz 50 HP."
    );
  });

  it("trafienie: smok traci 20 HP", () => {
    expect(pojedynek("Arthus", 12)).toBe(
      "Arthus: Trafienie Smok traci 20 HP i ma teraz 80 HP."
    );
  });

  it("pudło: smok nie traci HP", () => {
    expect(pojedynek("Arthus", 3)).toBe(
      "Arthus: Pudło! Smok traci 0 HP i ma teraz 100 HP."
    );
  });
});

describe("eliksir (zadanie dodatkowe)", () => {
  it("leczy, ale nie ponad 100 HP", () => {
    expect(eliksir(90, 30)).toBe(100);
  });

  it("leczy normalnie, gdy jest zapas", () => {
    expect(eliksir(50, 20)).toBe(70);
  });
});
