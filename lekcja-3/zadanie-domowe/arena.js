// ============================================
// ZADANIE DOMOWE: Turniej na arenie
// ============================================
// To zadanie łączy wszystko z lekcji: funkcje,
// pętle for i while oraz warunki.
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania znajdziesz w pliku README.md.

// ---------- CZĘŚĆ 1: Broń (funkcja + warunki) ----------
function obrazeniaBroni(bron) {
  // TODO: Zwróć obrażenia w zależności od broni:
  //   "miecz" → 15
  //   "topor" → 25
  //   "luk"   → 10
  //   każda inna broń → 5 (same pięści!)
}

// ---------- CZĘŚĆ 2: Seria ataków (pętla for) ----------
function seriaAtakow(ileAtakow, obrazenia) {
  // TODO: Policz łączne obrażenia serii: dodaj `obrazenia` do sumy
  // `ileAtakow` razy — użyj pętli for, nie mnożenia!
}

// ---------- CZĘŚĆ 3: Walka do końca (pętla while) ----------
// Pętla while powtarza kod, DOPÓKI warunek jest prawdziwy:
//   while (hp > 0) { ... }
// Nie wiemy z góry, ile rund potrwa walka — dlatego while, nie for.
function rundyWalki(hpPotwora, obrazenia) {
  // TODO: Policz, ile rund zajmie pokonanie potwora.
  // W każdej rundzie potwór traci `obrazenia` HP.
  // Przykład: rundyWalki(50, 20) → 3 (bo 50 → 30 → 10 → -10)
}

// ---------- CZĘŚĆ 4: Arena (łączy wszystko) ----------
function arena(nick, bron, hpPotwora) {
  // TODO: Użyj funkcji obrazeniaBroni(bron) i rundyWalki(hpPotwora, ...).
  // Zwróć napis: "<nick> (<bron>) pokonuje potwora! Liczba rund: <rundy>"
  // Przykład: arena("Miron", "topor", 50)
  //   → "Miron (topor) pokonuje potwora! Liczba rund: 2"
}

// ---------- ZADANIE DODATKOWE (dla chętnych) ----------
// Klasyka! Liczby 1..n, ale podzielne przez 3 → "Fizz",
// przez 5 → "Buzz", przez 3 i 5 → "FizzBuzz".
// fizzBuzz(5) → "1 2 Fizz 4 Buzz"
function fizzBuzz(n) {
  // TODO: zbuduj napis w pętli. Podpowiedź: i % 3 === 0 znaczy
  // "podzielne przez 3". Sprawdzaj "FizzBuzz" jako pierwszy!
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log("Obrażenia topora:", obrazeniaBroni("topor"));
  console.log("Seria 3 ataków po 10:", seriaAtakow(3, 10));
  console.log("Rundy na potwora 50 HP (20 obrażeń):", rundyWalki(50, 20));
  console.log(arena("Miron", "topor", 50));
  console.log(arena("Ela", "luk", 30));
  console.log("FizzBuzz do 15:", fizzBuzz(15));
}

// Oczekiwany wynik w konsoli:
// Obrażenia topora: 25
// Seria 3 ataków po 10: 30
// Rundy na potwora 50 HP (20 obrażeń): 3
// Miron (topor) pokonuje potwora! Liczba rund: 2
// Ela (luk) pokonuje potwora! Liczba rund: 3
// FizzBuzz do 15: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

// Ta linijka jest potrzebna do testów — nie ruszaj jej.
export { obrazeniaBroni, seriaAtakow, rundyWalki, arena, fizzBuzz };
