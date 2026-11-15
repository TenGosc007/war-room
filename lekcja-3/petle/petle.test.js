import { describe, it, expect } from "vitest";
import {
  sumaEnergii,
  odliczanie,
  pasekZycia,
  tabliczkaMnozenia,
  silnia,
} from "./petle.js";

describe("sumaEnergii", () => {
  it("sumaEnergii(4) to 10", () => {
    expect(sumaEnergii(4)).toBe(10);
  });

  it("sumaEnergii(10) to 55", () => {
    expect(sumaEnergii(10)).toBe(55);
  });

  it("sumaEnergii(1) to 1", () => {
    expect(sumaEnergii(1)).toBe(1);
  });
});

describe("odliczanie", () => {
  it("odliczanie(5) to '5 4 3 2 1 START!'", () => {
    expect(odliczanie(5)).toBe("5 4 3 2 1 START!");
  });

  it("odliczanie(3) to '3 2 1 START!'", () => {
    expect(odliczanie(3)).toBe("3 2 1 START!");
  });
});

describe("pasekZycia", () => {
  it("pasekZycia(3, 5) to '###--'", () => {
    expect(pasekZycia(3, 5)).toBe("###--");
  });

  it("pasekZycia(0, 4) to '----'", () => {
    expect(pasekZycia(0, 4)).toBe("----");
  });

  it("pasekZycia(5, 5) to '#####'", () => {
    expect(pasekZycia(5, 5)).toBe("#####");
  });
});

describe("tabliczkaMnozenia", () => {
  it("tabliczkaMnozenia(3) to '3*1=3 3*2=6 3*3=9 3*4=12 3*5=15'", () => {
    expect(tabliczkaMnozenia(3)).toBe("3*1=3 3*2=6 3*3=9 3*4=12 3*5=15");
  });

  it("tabliczkaMnozenia(7) to '7*1=7 7*2=14 7*3=21 7*4=28 7*5=35'", () => {
    expect(tabliczkaMnozenia(7)).toBe("7*1=7 7*2=14 7*3=21 7*4=28 7*5=35");
  });
});

describe("silnia (zadanie dodatkowe)", () => {
  it("silnia(5) to 120", () => {
    expect(silnia(5)).toBe(120);
  });

  it("silnia(0) to 1", () => {
    expect(silnia(0)).toBe(1);
  });
});
