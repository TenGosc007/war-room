# Zadanie: Pętle — Odliczanie, energia i pasek życia

## Cel

Przećwiczysz pętlę `for`: liczenie w górę i w dół, sumowanie w pętli,
budowanie napisów i łączenie pętli z warunkiem `if`.

## Jak pracować

1. Otwórz plik `petle.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.

## Przypomnienie

Pętla `for` powtarza kod w `{ }`:

```js
for (let i = 1; i <= 5; i++) {
  // wykona się dla i = 1, 2, 3, 4, 5
}
```

- `let i = 1` — start
- `i <= 5` — warunek: pętla kręci się, dopóki jest prawdziwy
- `i++` — po każdym obrocie `i` rośnie o 1 (`i--` — maleje)

## Część 1: `sumaEnergii(n)`

Zwróć sumę liczb od 1 do `n` — użyj pętli `for`.

```js
sumaEnergii(4);  // 1+2+3+4 = 10
sumaEnergii(10); // 55
```

## Część 2: `odliczanie(start)`

Zwróć napis z odliczaniem od `start` do 1, zakończony `"START!"`.

```js
odliczanie(5); // "5 4 3 2 1 START!"
odliczanie(3); // "3 2 1 START!"
```

Podpowiedź: pętla w dół — `for (let i = start; i >= 1; i--)`.
Zmienna `wynik` i `return` są już gotowe — Ty piszesz samą pętlę.

## Część 3: `pasekZycia(hp, maxHp)`

Zbuduj pasek życia o długości `maxHp`: znak `#` za każdy punkt życia,
który został, i `-` za każdy utracony.

```js
pasekZycia(3, 5); // "###--"
pasekZycia(0, 4); // "----"
```

Podpowiedź: w pętli od 1 do `maxHp` sprawdź `if (i <= hp)` — to pętla
z warunkiem w środku!

## Część 4: `tabliczkaMnozenia(liczba)`

Tym razem **całą funkcję piszesz sam** — bez gotowego szkieletu.
Zwróć napis z tabliczką mnożenia danej liczby od 1 do 5:

```js
tabliczkaMnozenia(3); // "3*1=3 3*2=6 3*3=9 3*4=12 3*5=15"
```

Uwaga: po ostatnim wyniku **nie ma** spacji. Podpowiedź: `if (i < 5)`.

## Zadanie dodatkowe: `silnia(n)` — dla chętnych

Silnia `n` to iloczyn liczb od 1 do `n`: `n! = 1·2·3·...·n`.
Uwaga: `silnia(0)` to `1`.

```js
silnia(5); // 120
silnia(0); // 1
```

Podpowiedź: zamiast dodawać do sumy — mnoż wynik w pętli.
