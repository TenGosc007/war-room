// ============================================
// ZADANIE: Karta gracza RPG
// ============================================
// Uzupełnij miejsca oznaczone TODO.
// Szczegóły zadania znajdziesz w pliku README.md.

function kartaGracza() {
  // TODO 1: Zadeklaruj stałe: nick i klasa — wpisz własne wartości

  // TODO 2: Zadeklaruj zmienne: hp o wartości 100 i level o wartości 1

  // TODO 3: Gracz dostał 30 obrażeń — odejmij 30 od hp

  // TODO 4: Gracz awansował — zwiększ level o 1

  // Nie ruszaj tej linii! Zwraca kartę gracza w formacie: "Nick | Klasa | HP: X | Poziom: Y"
  return nick + " | " + klasa + " | HP: " + hp + " | Poziom: " + level;
}

function sklepik() {
  const cenaMiecza = 30;
  let zloto = 100;

  // TODO: Gracz kupuje miecz — odejmij cenę miecza od zloto

  return zloto;
}

// --------------------------------------------
// Demo — uruchamia się tylko przez `npm start`
// --------------------------------------------
if (!process.env.VITEST) {
  console.log("Karta gracza:", kartaGracza());
  console.log("Złoto po zakupach:", sklepik());
}

// Oczekiwany wynik w konsoli (nick i klasa — Twoje własne):
// Karta gracza: TwójNick | TwojaKlasa | HP: 70 | Poziom: 2
// Złoto po zakupach: 70

// Ta linijka jest potrzebna do testów — nie ruszaj jej.
export { kartaGracza, sklepik };
