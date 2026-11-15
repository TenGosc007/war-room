# Zadanie: Funkcje — Warsztat bohatera

## Cel

Przećwiczysz definiowanie własnych funkcji: parametry, `return` i wywoływanie jednej funkcji wewnątrz drugiej.

## Jak pracować

1. Otwórz plik `funkcje.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.

## Przypomnienie

Funkcja to nazwany kawałek kodu, który można wywołać wiele razy:

```js
function nazwa(parametr) {
  return parametr * 2; // return zwraca wynik i kończy funkcję
}

nazwa(5); // 10 — wywołanie z argumentem 5
```

## Część 1: `powitaj(nick)`

Zwróć napis powitania gracza:

```js
powitaj("Miron"); // "Witaj na arenie, Miron!"
```

## Część 2: `kosztEkwipunku(cena, liczba)`

Zwróć łączny koszt zakupów: `cena` razy `liczba` sztuk.

```js
kosztEkwipunku(15, 3); // 45
```

## Część 3: `wystarczyMany(mana, koszt)`

Zwróć `true`, gdy gracz ma **co najmniej** tyle many, ile wynosi `koszt`,
a w przeciwnym razie `false`.

```js
wystarczyMany(50, 40); // true
wystarczyMany(10, 40); // false
```

## Część 4: `rzucZaklecie(nick, mana, koszt)` — funkcja wywołuje funkcję

Wewnątrz funkcji możesz wywołać inną funkcję! Użyj `wystarczyMany(mana, koszt)`
w instrukcji `if / else`:

- starcza many → `"<nick> rzuca zaklęcie za <koszt> many!"`
- za mało many → `"<nick> ma za mało many (<mana>/<koszt>)"`

```js
rzucZaklecie("Miron", 50, 40); // "Miron rzuca zaklęcie za 40 many!"
rzucZaklecie("Ela", 10, 40);   // "Ela ma za mało many (10/40)"
```

## Część 5: `krytyk(obrazenia)` — napisz funkcję SAM

Tym razem nie ma gotowej funkcji — napisz ją od zera, ze słowem `function`,
nazwą, parametrem w nawiasie i `return`:

```js
krytyk(15); // 30 — trafienie krytyczne zadaje podwójne obrażenia
```

Gdy skończysz, odkomentuj linijkę `// krytyk,` w `export` na dole pliku
(usuń `//`), żeby testy mogły zobaczyć Twoją funkcję.

## Zadanie dodatkowe: `sredniRzut(rzut1, rzut2, rzut3)`

Zwróć średnią z trzech rzutów kością:

```js
sredniRzut(2, 4, 6); // 4
```
