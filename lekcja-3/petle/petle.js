// ============================================
// ZADANIE: Pętle — Odliczanie, energia i pasek życia
// ============================================
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania i podpowiedzi znajdziesz w pliku README.md.

// ---------- CZĘŚĆ 1: Suma energii ----------
// Pętla powtarza kod dla i = 1, 2, 3, ... aż do n.
// Twoje zadanie: uzupełnij JEDNĄ linijkę wewnątrz pętli.
function sumaEnergii(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    // TODO: dodaj i do zmiennej suma
  }
  return suma;
}

// ---------- CZĘŚĆ 2: Odliczanie (pętla w dół) ----------
function odliczanie(start) {
  // TODO: Zbuduj napis "<start> ... 3 2 1 START!"
  // Przykład: odliczanie(5) → "5 4 3 2 1 START!"
  // Użyj pętli w dół: for (let i = start; i >= 1; i--) { ... }
  let wynik = "";

  // tutaj napisz pętlę, która dopisuje do wyniku liczbę i spację

  return wynik + "START!";
}

// ---------- CZĘŚĆ 3: Pasek życia (pętla + warunek) ----------
function pasekZycia(hp, maxHp) {
  // TODO: Zwróć napis o długości maxHp:
  //   "#" za każdy punkt życia, który został; "-" za każdy utracony.
  //   pasekZycia(3, 5) → "###--"
  // Podpowiedź: pętla od 1 do maxHp, w środku if (i <= hp)
  let pasek = "";

  // tutaj napisz pętlę z warunkiem

  return pasek;
}

// ---------- CZĘŚĆ 4: Tabliczka mnożenia ----------
function tabliczkaMnozenia(liczba) {
  // TODO: Zwróć napis "3*1=3 3*2=6 3*3=9 3*4=12 3*5=15"
  //   (dla podanej liczby, mnożniki od 1 do 5, spacja między wynikami)
  // Tym razem całą funkcję piszesz sam!
  // Uwaga: po ostatnim wyniku NIE ma spacji.
}

// ---------- ZADANIE DODATKOWE (dla chętnych) ----------
// Silnia n to iloczyn 1·2·3·...·n. Uwaga: silnia(0) to 1.
function silnia(n) {
  // TODO: Zwróć n! — zamiast dodawać, mnoż wynik w pętli.
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log("Suma energii do 10:", sumaEnergii(10));
  console.log("Odliczanie:", odliczanie(5));
  console.log("Pasek życia 3/5:", pasekZycia(3, 5));
  console.log("Tabliczka dla 7:", tabliczkaMnozenia(7));
  console.log("silnia(5):", silnia(5));
}

// Oczekiwany wynik w konsoli:
// Suma energii do 10: 55
// Odliczanie: 5 4 3 2 1 START!
// Pasek życia 3/5: ###--
// Tabliczka dla 7: 7*1=7 7*2=14 7*3=21 7*4=28 7*5=35
// silnia(5): 120

// Ta linijka jest potrzebna do testów — nie ruszaj jej.
export {
  sumaEnergii,
  odliczanie,
  pasekZycia,
  tabliczkaMnozenia,
  silnia,
};
