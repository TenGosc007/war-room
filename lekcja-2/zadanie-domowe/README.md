# Zadanie domowe: Pojedynek ze smokiem

## Cel

To zadanie łączy **wszystko** z lekcji: zmienne (`let`, `const`),
wyrażenia warunkowe (`if / else if / else`) i losowanie liczb
(`Math.random()`, `Math.floor()`).

Budujesz mini-grę RPG: bohater rzuca kością 20-ścienną, oceniasz jego
atak i odejmujesz smokowi punkty życia.

## Jak pracować

1. Otwórz plik `pojedynek.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.

## Część 1: `kartaBohatera(nick)` — zmienne

Zbuduj kartę bohatera zwracającą napis `"nick | HP: 120 | Mana: 40"`:

1. Zadeklaruj `let hp = 100` i `let mana = 50`.
2. Bohater wypił eliksir — zwiększ `hp` o 20.
3. Bohater rzucił zaklęcie — zmniejsz `mana` o 10.

## Część 2: `rzutK20()` — random

Zwróć losową liczbę całkowitą **od 1 do 20** — to kość używana
w grach RPG jak Dungeons & Dragons.

## Część 3: `ocenAtak(rzut)` — warunki

Oceń rzut i zwróć napis:

| Rzut          | Wynik                   |
| ------------- | ----------------------- |
| 18 i więcej   | `"Trafienie krytyczne!"` |
| 10–17         | `"Trafienie"`           |
| mniej niż 10  | `"Pudło!"`              |

## Część 4: `pojedynek(nick, rzut)` — łączy wszystko

Smok ma 100 HP (`const hpSmoka`). Funkcja używa już `ocenAtak(rzut)`,
żeby sprawdzić jak poszedł atak. Twoje zadanie:

1. Ustal `obrazenia` w zależności od oceny:
   - `"Trafienie krytyczne!"` → 50
   - `"Trafienie"` → 20
   - `"Pudło!"` → 0
2. Oblicz, ile HP zostało smokowi po ataku.
3. Zwróć napis w formacie:

```js
pojedynek("Arthus", 19);
// "Arthus: Trafienie krytyczne! Smok traci 50 HP i ma teraz 50 HP."
```

W prawdziwej grze `rzut` pochodzi z `rzutK20()` — zobacz sekcję demo
na dole pliku.

## Zadanie dodatkowe: `eliksir(hp, mocEliksiru)`

Zwróć `hp + mocEliksiru`, ale HP nigdy nie może przekroczyć **100**.

```js
eliksir(50, 20); // 70
eliksir(90, 30); // 100 — nie 120!
```

Podpowiedź: `Math.min(a, b)` zwraca mniejszą z dwóch liczb.
