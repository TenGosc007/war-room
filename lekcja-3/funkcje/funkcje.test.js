import { describe, it, expect } from "vitest";
import {
  powitaj,
  kosztEkwipunku,
  wystarczyMany,
  rzucZaklecie,
  sredniRzut,
} from "./funkcje.js";
import * as modul from "./funkcje.js";

describe("powitaj", () => {
  it("wita gracza po nicku", () => {
    expect(powitaj("Miron")).toBe("Witaj na arenie, Miron!");
  });

  it("działa dla innego nicku", () => {
    expect(powitaj("Ela")).toBe("Witaj na arenie, Ela!");
  });
});

describe("kosztEkwipunku", () => {
  it("liczy łączny koszt zakupów", () => {
    expect(kosztEkwipunku(15, 3)).toBe(45);
  });

  it("jedna sztuka to po prostu cena", () => {
    expect(kosztEkwipunku(30, 1)).toBe(30);
  });
});

describe("wystarczyMany", () => {
  it("true, gdy mana jest większa niż koszt", () => {
    expect(wystarczyMany(50, 40)).toBe(true);
  });

  it("true, gdy mana jest równa kosztowi", () => {
    expect(wystarczyMany(40, 40)).toBe(true);
  });

  it("false, gdy many jest za mało", () => {
    expect(wystarczyMany(10, 40)).toBe(false);
  });
});

describe("rzucZaklecie", () => {
  it("rzuca zaklęcie, gdy starcza many", () => {
    expect(rzucZaklecie("Miron", 50, 40)).toBe(
      "Miron rzuca zaklęcie za 40 many!"
    );
  });

  it("odmawia, gdy many jest za mało", () => {
    expect(rzucZaklecie("Ela", 10, 40)).toBe("Ela ma za mało many (10/40)");
  });
});

describe("krytyk (napisana samodzielnie)", () => {
  it("funkcja krytyk istnieje i jest wyeksportowana", () => {
    expect(typeof modul.krytyk).toBe("function");
  });

  it("krytyk(15) to 30", () => {
    expect(modul.krytyk?.(15)).toBe(30);
  });

  it("krytyk(7) to 14", () => {
    expect(modul.krytyk?.(7)).toBe(14);
  });
});

describe("sredniRzut (zadanie dodatkowe)", () => {
  it("sredniRzut(2, 4, 6) to 4", () => {
    expect(sredniRzut(2, 4, 6)).toBe(4);
  });

  it("sredniRzut(1, 1, 4) to 2", () => {
    expect(sredniRzut(1, 1, 4)).toBe(2);
  });
});
