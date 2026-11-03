import { describe, it, expect } from "vitest";
import { kartaGracza, sklepik } from "./var.js";

describe("kartaGracza", () => {
  it("zwraca napis z HP: 70 po otrzymaniu 30 obrażeń", () => {
    expect(kartaGracza()).toContain("HP: 70");
  });

  it("zwraca napis z Poziom: 2 po awansie", () => {
    expect(kartaGracza()).toContain("Poziom: 2");
  });

  it("ma format 'nick | klasa | HP: x | Poziom: y'", () => {
    expect(kartaGracza()).toMatch(/^.+ \| .+ \| HP: 70 \| Poziom: 2$/);
  });

  it("nick i klasa są uzupełnione (bez '???')", () => {
    expect(kartaGracza()).not.toContain("???");
  });
});

describe("sklepik", () => {
  it("zwraca 70 złota po zakupie miecza za 30", () => {
    expect(sklepik()).toBe(70);
  });
});
