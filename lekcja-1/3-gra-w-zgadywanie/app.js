// Import zewntętrznych bibliotek
const prompt = require("prompt-sync")();

// Definicja stałych
const wylosowanaLiczba = Math.round(Math.random() * 100) + 1;

// Definicja zminnych
let liczbaProb = 0;
let strzal;

// Definicja funkcji
function print(text) {
  if (typeof window == "undefined") {
    console.log(text);
  } else {
    alert(text);
  }
}

function zgaduj() {
  strzal = Number(prompt("Podaj liczbę od 1 do 100: "));
  liczbaProb++;

  if (strzal < wylosowanaLiczba) {
    print("Za mało! Spróbuj ponownie.");
  } else if (strzal > wylosowanaLiczba) {
    print("Za dużo! Spróbuj ponownie.");
  } else {
    print(`Gratulacje! Zgadłeś w ${liczbaProb} próbach.`);
    return;
  }

  zgaduj();
}

// wywołanie funkcji
zgaduj();
