const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const wylosowanaLiczba = Math.round(Math.random() * 100) + 1;
let liczbaProb = 0;

console.log("Zgadnij liczbę od 1 do 100!");

function zgaduj() {
  rl.question("Podaj liczbę: ", (odpowiedz) => {
    const strzal = Number(odpowiedz);

    if (odpowiedz === "" || isNaN(strzal) || strzal < 1 || strzal > 100) {
      console.log("Podaj liczbę od 1 do 100!");
      return zgaduj();
    }

    liczbaProb++;

    if (strzal < wylosowanaLiczba) {
      console.log("Za mało! Spróbuj ponownie.");
      zgaduj();
    } else if (strzal > wylosowanaLiczba) {
      console.log("Za dużo! Spróbuj ponownie.");
      zgaduj();
    } else {
      console.log(`Gratulacje! Zgadłeś w ${liczbaProb} próbach.`);
      rl.close();
    }
  });
}

zgaduj();
