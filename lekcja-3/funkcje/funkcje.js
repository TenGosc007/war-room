// ============================================
// ZADANIE: Funkcje — Warsztat bohatera
// ============================================
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania i podpowiedzi znajdziesz w pliku README.md.

// ---------- CZĘŚĆ 1: Pierwsza funkcja ----------
function powitaj(nick) {
  // TODO: Zwróć napis "Witaj na arenie, <nick>!"
  // Przykład: powitaj("Miron") → "Witaj na arenie, Miron!"
}

// ---------- CZĘŚĆ 2: Funkcja z dwoma parametrami ----------
function kosztEkwipunku(cena, liczba) {
  // TODO: Zwróć łączny koszt zakupów: cena razy liczba sztuk.
  // Przykład: kosztEkwipunku(15, 3) → 45
}

// ---------- CZĘŚĆ 3: Funkcja zwracająca prawdę/fałsz ----------
function wystarczyMany(mana, koszt) {
  // TODO: Zwróć true, gdy mana >= koszt, a w przeciwnym razie false.
}

// ---------- CZĘŚĆ 4: Funkcja wywołuje funkcję ----------
// Wewnątrz funkcji możesz wywołać inną funkcję — użyj wystarczyMany!
function rzucZaklecie(nick, mana, koszt) {
  // TODO: Użyj wystarczyMany(mana, koszt) w if / else:
  //   gdy starcza many  → zwróć "<nick> rzuca zaklęcie za <koszt> many!"
  //   gdy za mało many  → zwróć "<nick> ma za mało many (<mana>/<koszt>)"
}

// ---------- CZĘŚĆ 5: Napisz funkcję SAM od zera ----------
// TODO: Poniżej napisz własną funkcję o nazwie krytyk,
// która przyjmuje parametr obrazenia i zwraca je pomnożone razy 2.
// Przykład: krytyk(15) → 30
// Gdy skończysz — odkomentuj linijkę "krytyk," w export na dole pliku.

// ---------- ZADANIE DODATKOWE (dla chętnych) ----------
function sredniRzut(rzut1, rzut2, rzut3) {
  // TODO: Zwróć średnią z trzech rzutów kością.
  // Przykład: sredniRzut(2, 4, 6) → 4
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log(powitaj("Miron"));
  console.log("3 mikstury po 15 złota:", kosztEkwipunku(15, 3), "złota");
  console.log("Czy starczy many? (30/40):", wystarczyMany(30, 40));
  console.log(rzucZaklecie("Miron", 50, 40));
  console.log(rzucZaklecie("Ela", 10, 40));
  if (typeof krytyk === "function") {
    console.log("Krytyk za 15:", krytyk(15));
  }
  console.log("Średni rzut 2, 4, 6:", sredniRzut(2, 4, 6));
}

// Oczekiwany wynik w konsoli:
// Witaj na arenie, Miron!
// 3 mikstury po 15 złota: 45 złota
// Czy starczy many? (30/40): false
// Miron rzuca zaklęcie za 40 many!
// Ela ma za mało many (10/40)
// Krytyk za 15: 30
// Średni rzut 2, 4, 6: 4

// Ta część jest potrzebna do testów — ruszaj ją tylko w części 5.
export {
  powitaj,
  kosztEkwipunku,
  wystarczyMany,
  rzucZaklecie,
  sredniRzut,
  // TODO (część 5): odkomentuj linijkę poniżej, gdy napiszesz funkcję krytyk
  // krytyk,
};
