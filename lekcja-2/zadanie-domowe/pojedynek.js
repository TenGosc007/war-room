// ============================================
// ZADANIE DOMOWE: Pojedynek ze smokiem
// ============================================
// To zadanie łączy wszystko z lekcji: zmienne,
// warunki i losowanie liczb (Math.random).
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania znajdziesz w pliku README.md.

// ---------- CZĘŚĆ 1: Karta bohatera (zmienne) ----------
function kartaBohatera(nick) {
  // TODO 1: Zadeklaruj zmienne (let): hp = 100 i mana = 50

  // TODO 2: Bohater wypił eliksir — zwiększ hp o 20

  // TODO 3: Bohater rzucił zaklęcie — zmniejsz mana o 10

  // Nie ruszaj tej linii! Zwraca kartę w formacie: "nick | HP: X | Mana: Y"
  return nick + " | HP: " + hp + " | Mana: " + mana;
}

// ---------- CZĘŚĆ 2: Kość 20-ścienna (random) ----------
function rzutK20() {
  // TODO: Zwróć losową liczbę całkowitą od 1 do 20.
}

// ---------- CZĘŚĆ 3: Ocena ataku (warunki) ----------
function ocenAtak(rzut) {
  // TODO: Oceń rzut kością i zwróć napis:
  //   18 i więcej  → "Trafienie krytyczne!"
  //   10 i więcej  → "Trafienie"
  //   mniej niż 10 → "Pudło!"
}

// ---------- CZĘŚĆ 4: Pojedynek (łączy wszystko) ----------
// Bohater o nicku `nick` atakuje smoka wynikiem rzutu `rzut`.
// W prawdziwej grze rzut pochodzi z funkcji rzutK20().
function pojedynek(nick, rzut) {
  const hpSmoka = 100;
  const ocena = ocenAtak(rzut);

  // TODO 1: Ustal obrażenia w zależności od oceny (if / else if / else):
  //   "Trafienie krytyczne!" → 50
  //   "Trafienie"            → 20
  //   "Pudło!"               → 0
  let obrazenia;

  // TODO 2: Smok traci obrażenia — popraw tę linijkę, żeby od hpSmoka
  // odjęte zostały obrazenia (teraz smok w ogóle nie traci HP!)
  const hpSmokaPoAtaku = hpSmoka;

  return nick + ": " + ocena + " Smok traci " + obrazenia + " HP i ma teraz " + hpSmokaPoAtaku + " HP.";
}

// ---------- ZADANIE DODATKOWE (dla chętnych) ----------
// Bohater pije eliksir leczący, ale HP nigdy nie może
// przekroczyć 100.
function eliksir(hp, mocEliksiru) {
  // TODO: Zwróć hp + mocEliksiru, ale maksymalnie 100.
  // Podpowiedź: przyda się Math.min(...) albo operator ?:
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log("Bohater:", kartaBohatera("Arthus"));
  const rzut = rzutK20();
  console.log("Wyrzucił na kości:", rzut);
  console.log(pojedynek("Arthus", rzut));
  console.log("Eliksir (90 HP + 30):", eliksir(90, 30));
}

// Oczekiwany wynik w konsoli (rzut jest losowy — u Ciebie może być inny):
// Bohater: Arthus | HP: 120 | Mana: 40
// Wyrzucił na kości: 14
// Arthus: Trafienie Smok traci 20 HP i ma teraz 80 HP.
// Eliksir (90 HP + 30): 100

// Ta linijka jest potrzebna do testów — nie ruszaj jej.
export { kartaBohatera, rzutK20, ocenAtak, pojedynek, eliksir };
