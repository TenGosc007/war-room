# Zadanie: Random — Kostka, moneta i losowe liczby

## Cel

Przećwiczysz `Math.random()`, `Math.floor()` i losowanie liczb z zadanego zakresu.

## Jak pracować

1. Otwórz plik `random.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.

## Przypomnienie

`Math.random()` zwraca ułamek z zakresu `[0, 1)` — np. `0.7293...`.
Żeby dostać liczbę całkowitą z innego zakresu, trzeba ją przeskalować
i zaokrąglić w dół przez `Math.floor()`:

```js
Math.floor(Math.random() * 10) + 1; // losowa liczba 1–10
```

## Część 1: `rzutKostka()`

Zwróć losową liczbę całkowitą **od 1 do 6** — jak rzut kostką do gry.

## Część 2: `rzutMoneta()`

Zwróć `"orzeł"` albo `"reszka"` — każde z 50% szansą.

Podpowiedź: `Math.random() < 0.5` jest prawdziwe w połowie przypadków.

## Część 3: `losujZZakresu(min, max)`

Zwróć losową liczbę całkowitą z zakresu **od `min` do `max` włącznie**.

```js
losujZZakresu(5, 10); // np. 7 — zawsze od 5 do 10
```

Podpowiedź: zakres `min`–`max` ma `max - min + 1` możliwych wartości.

## Część 4: `losujCzterocyfrowa()`

Zwróć losową liczbę całkowitą **od 1000 do 9999** — czterocyfrową.

Podpowiedź: ile jest liczb czterocyfrowych? To wielkość zakresu
(prawie jak w części 3).

## Zadanie dodatkowe: `printNumbers(nr)` — dla chętnych

Funkcja ma zwrócić napis złożony z kolejnych liczb od 1 do `nr`:

```js
printNumbers(5);  // "12345"
printNumbers(12); // "123456789101112"
```

W kodzie znajdziesz gotową **pętlę `for`** — to temat następnej lekcji.
Pętla powtarza kod dla `i = 1, 2, 3, ...` aż do `nr`.
Twoje zadanie to tylko **jedna linijka**: dopisz `i` do napisu `wynik`.
