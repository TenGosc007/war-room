# Zadanie: Warunki — Kino i wyniki gry

## Cel

Przećwiczysz instrukcje `if`, `if / else`, `if / else if / else`, operatory logiczne (`||`, `&&`) i operator `? :`.

## Jak pracować

1. Otwórz plik `if.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.

## Część 1: `czyMozeWejsc(wiek, jestZRodzicem)`

Na film można wejść, gdy widz ma **13 lat lub więcej**, LUB gdy **jest z rodzicem**.

Funkcja ma zwrócić `true` albo `false`.

```js
czyMozeWejsc(15, false); // true  (ma 15 lat)
czyMozeWejsc(10, true);  // true  (jest z rodzicem)
czyMozeWejsc(10, false); // false
```

## Część 2: `ocenWynik(punkty)`

Oceń wynik gry i zwróć napis:

| Punkty         | Wynik                 |
| -------------- | --------------------- |
| 90 i więcej    | `"Mistrz!"`           |
| 50–89          | `"Zaliczone"`         |
| mniej niż 50   | `"Spróbuj jeszcze raz"` |

Użyj `if / else if / else`.

## Część 3: `czyPelnoletni(wiek)`

Zwróć `"Pełnoletni"`, gdy `wiek >= 18`, a w przeciwnym razie `"Niepełnoletni"`.

Dla chętnych: spróbuj zapisać to w **jednej linii** operatorem `? :`
(operator warunkowy ze ściągi).
