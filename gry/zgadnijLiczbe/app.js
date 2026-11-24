// Import zewntętrznych bibliotek
// jak używać?
// prompt("Podaj napis: ")
const prompt = require("prompt-sync")();

let random = Math.floor(Math.random() * 10) + 1;

// let proby = 3;
// if (liczba != random) proby = proby - 1;

// console.log("Nie zgadles. Pozostalo", proby);

// Proba 1
let liczba = prompt("zgadnij liczbe: ");
console.log("podałeś: ", liczba);

if (liczba > random) {
  console.log("Liczba jest za duza!");
}
if (liczba < random) {
  console.log("Liczba jest za mala!");
}

if (random != liczba) {
  //   proby = proby - 1;
  console.log("Nie zgadles!");
  console.log(random);
}

if (random == liczba) {
  console.log("Zgadles!");
  return;
}

// Proba 2
liczba = prompt("zgadnij liczbe: ");
console.log("podałeś: ", liczba);

if (liczba > random) {
  console.log("Liczba jest za duza!");
}
if (liczba < random) {
  console.log("Liczba jest za mala!");
}

if (random != liczba) {
  //   proby = proby - 1;
  console.log("Nie zgadles!");
  console.log(random);
}

if (random == liczba) {
  console.log("Zgadles!");
  return;
}

// Proba 3
liczba = prompt("zgadnij liczbe: ");
console.log("podałeś: ", liczba);

if (liczba > random) {
  console.log("Liczba jest za duza!");
}
if (liczba < random) {
  console.log("Liczba jest za mala!");
}

if (random != liczba) {
  //   proby = proby - 1;
  console.log("Nie zgadles!");
  console.log(random);
  return;
}

if (random == liczba) {
  console.log("Zgadles!");
  return;
}

// if ((proby = 2)) {
//   console.log("Pozostało 2 prób");
// } else if ((proby = 1)) {
//   console.log("Pozostało 1 prób");
// } else {
//   console.log("Pozostało 0 prób");
// }
