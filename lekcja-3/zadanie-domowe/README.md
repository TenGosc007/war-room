# Zadanie domowe: Turniej na arenie

## Cel

To zadanie łączy **wszystko** z lekcji: funkcje (parametry, `return`,
funkcja wywołująca funkcję), pętle (`for` i `while`) oraz warunki
(`if / else if / else`).

Budujesz mini-symulator walki: rycerz wybiera broń, wykonuje serię ataków
i walczy z potworem aż do jego pokonania.

## Jak pracować

1. Otwórz plik `arena.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.

## Część 1: `obrazeniaBroni(bron)` — funkcja + warunki

Zwróć obrażenia w zależności od broni:

| Broń          | Obrażenia |
| ------------- | --------- |
| `"miecz"`     | 15        |
| `"topor"`     | 25        |
| `"luk"`       | 10        |
| każda inna    | 5         |

## Część 2: `seriaAtakow(ileAtakow, obrazenia)` — pętla `for`

Policz łączne obrażenia serii ataków — dodaj `obrazenia` do sumy
`ileAtakow` razy, używając pętli `for` (nie mnożenia!).

```js
seriaAtakow(3, 10); // 30
```

## Część 3: `rundyWalki(hpPotwora, obrazenia)` — pętla `while`

Pętla `while` powtarza kod, **dopóki warunek jest prawdziwy**:

```js
while (hp > 0) {
  // wykonuje się, dopóki potwór żyje
}
```

Używamy jej, gdy nie wiemy z góry, ile razy pętla się obróci.
Policz, ile rund zajmie pokonanie potwora — w każdej rundzie traci
`obrazenia` HP:

```js
rundyWalki(50, 20); // 3 rundy: 50 → 30 → 10 → -10
```

## Część 4: `arena(nick, bron, hpPotwora)` — łączy wszystko

Użyj funkcji `obrazeniaBroni` i `rundyWalki`, żeby zwrócić raport:

```js
arena("Miron", "topor", 50);
// "Miron (topor) pokonuje potwora! Liczba rund: 2"
```

## Zadanie dodatkowe: `fizzBuzz(n)` — dla chętnych

Klasyka programowania! Zwróć napis z liczbami od 1 do `n`, ale:

- liczby podzielne przez 3 zamień na `"Fizz"`,
- liczby podzielne przez 5 zamień na `"Buzz"`,
- podzielne przez 3 **i** 5 jednocześnie na `"FizzBuzz"`.

```js
fizzBuzz(5); // "1 2 Fizz 4 Buzz"
```

Podpowiedź: `i % 3 === 0` oznacza, że `i` dzieli się przez 3 bez reszty.
Zacznij sprawdzanie od `"FizzBuzz"` — inaczej `"Fizz"` go przechwyci!
