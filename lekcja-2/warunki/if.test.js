import { describe, it, expect } from "vitest";
import { czyMozeWejsc, ocenWynik, czyPelnoletni } from "./if.js";

describe("czyMozeWejsc", () => {
  it("wpuści 15-latka bez rodzica", () => {
    expect(czyMozeWejsc(15, false)).toBe(true);
  });

  it("wpuści 10-latka z rodzicem", () => {
    expect(czyMozeWejsc(10, true)).toBe(true);
  });

  it("nie wpuści 10-latka bez rodzica", () => {
    expect(czyMozeWejsc(10, false)).toBe(false);
  });
});

describe("ocenWynik", () => {
  it("95 punktów to 'Mistrz!'", () => {
    expect(ocenWynik(95)).toBe("Mistrz!");
  });

  it("70 punktów to 'Zaliczone'", () => {
    expect(ocenWynik(70)).toBe("Zaliczone");
  });

  it("20 punktów to 'Spróbuj jeszcze raz'", () => {
    expect(ocenWynik(20)).toBe("Spróbuj jeszcze raz");
  });
});

describe("czyPelnoletni", () => {
  it("20 lat to 'Pełnoletni'", () => {
    expect(czyPelnoletni(20)).toBe("Pełnoletni");
  });

  it("15 lat to 'Niepełnoletni'", () => {
    expect(czyPelnoletni(15)).toBe("Niepełnoletni");
  });
});
