// ============================================
// ZADANIE: Kostka, moneta i losowe liczby
// ============================================
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania i podpowiedzi znajdziesz w pliku README.md.

function rzutKostka() {
  // TODO: Zwróć losową liczbę całkowitą od 1 do 6 (jak rzut kostką).
  return Math.floor(Math.random() * 6) + 1;
}

function rzutMoneta() {
  // TODO: Zwróć "orzeł" albo "reszka" — po 50% szans na każde.
  return Math.random() < 0.5 ? "orzeł" : "reszka";
}

function losujZZakresu(min, max) {
  // TODO: Zwróć losową liczbę całkowitą z zakresu od min do max (włącznie).
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function losujCzterocyfrowa() {
  // TODO: Zwróć losową liczbę całkowitą czterocyfrową (1000-9999).
  return Math.floor(Math.random() * 9000) + 1000;
}

// ============================================
// ZADANIE DODATKOWE (dla chętnych)
// ============================================
// Ta funkcja używa pętli for — to temat następnej lekcji!
// Pętla powtarza kod w { } dla i = 1, 2, 3, ... aż do nr.
// Twoje zadanie: uzupełnij tylko JEDNĄ linijkę wewnątrz pętli.
function printNumbers(nr) {
  let wynik = "";
  for (let i = 1; i <= nr; i++) {
    // TODO: dopisz liczbę i do napisu wynik
    wynik += i;
  }
  return wynik;
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log("Rzut kostką:", rzutKostka());
  console.log("Rzut monetą:", rzutMoneta());
  console.log("Liczba od 10 do 20:", losujZZakresu(10, 20));
  console.log("Liczba 4-cyfrowa:", losujCzterocyfrowa());
  console.log("printNumbers(5):", printNumbers(5));
}

// Oczekiwany wynik w konsoli (liczby losowe — u Ciebie będą inne):
// Rzut kostką: 4                (zawsze od 1 do 6)
// Rzut monetą: reszka           (orzeł albo reszka)
// Liczba od 10 do 20: 11        (zawsze od 10 do 20)
// Liczba 4-cyfrowa: 4499        (zawsze od 1000 do 9999)
// printNumbers(5): 12345

// Ta linijka jest potrzebna do testów — nie ruszaj jej.
export {
  rzutKostka,
  rzutMoneta,
  losujZZakresu,
  losujCzterocyfrowa,
  printNumbers,
};
