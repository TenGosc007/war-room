// ============================================
// ZADANIE: Kino i wyniki gry
// ============================================
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania znajdziesz w pliku README.md.

function czyMozeWejsc(wiek, jestZRodzicem) {
  // TODO: Na film można wejść, gdy wiek >= 13 LUB gdy jest z rodzicem.
  // Zwróć true albo false. Użyj if / else i operatora ||

  if (wiek >= 13 || jestZRodzicem) {
    return true;
  } else {
    return false;
  }
}

function ocenWynik(punkty) {
  // TODO: Oceń wynik gry i zwróć napis:
  //   90 i więcej  → "Mistrz!"
  //   50 i więcej  → "Zaliczone"
  //   mniej niż 50 → "Spróbuj jeszcze raz"
  // Użyj if / else if / else
}

function czyPelnoletni(wiek) {
  // TODO: Zwróć "Pełnoletni" gdy wiek >= 18, a w przeciwnym razie "Niepełnoletni".
  // Dla chętnych: spróbuj zapisać to w jednej linii operatorem ?:
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log("15-latek bez rodzica:", czyMozeWejsc(15, false));
  console.log("10-latek z rodzicem:", czyMozeWejsc(10, true));
  console.log("Wynik 95 pkt:", ocenWynik(95));
  console.log("Wynik 40 pkt:", ocenWynik(40));
  console.log("Wiek 20:", czyPelnoletni(20));
}

// Oczekiwany wynik w konsoli:
// 15-latek bez rodzica: true
// 10-latek z rodzicem: true
// Wynik 95 pkt: Mistrz!
// Wynik 40 pkt: Spróbuj jeszcze raz
// Wiek 20: Pełnoletni

// Ta linijka jest potrzebna do testów — nie ruszaj jej.
export { czyMozeWejsc, ocenWynik, czyPelnoletni };
