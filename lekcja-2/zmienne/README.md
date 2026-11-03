# Zadanie: Zmienne — Karta gracza RPG

## Cel

Przećwiczysz deklarowanie zmiennych za pomocą `let` i `const` oraz zmienianie wartości zmiennych.

## Jak pracować

1. Otwórz plik `var.js` i uzupełnij wszystkie miejsca oznaczone `TODO`.
2. Uruchom program: `npm start`
3. Sprawdź się testami: `npm test`

> Podpowiedź: testy możesz też uruchomić w trybie obserwacji — `npx vitest`.
> Wtedy uruchamiają się same po każdym zapisie pliku.

## Część 1: `kartaGracza()`

Zbuduj kartę gracza, która zwraca napis w formacie:

```
nick | klasa | HP: 70 | Poziom: 2
```

Kroki:

1. Zadeklaruj stałe `const nick` i `const klasa` — wpisz własne wartości (np. `"Arthus"`, `"Mag"`).
2. Zadeklaruj zmienne `let hp = 100` i `let level = 1`.
3. Gracz otrzymał 30 obrażeń — odejmij 30 od `hp`.
4. Gracz awansował — zwiększ `level` o 1.

## Część 2: `sklepik()`

Gracz ma 100 złota (`let zloto = 100`) i kupuje miecz za 30 (`const cenaMiecza = 30`).

Odejmij cenę miecza od złota i zwróć wynik — powinno wyjść `70`.

## Do zapamiętania

- `const` — wartość stała, nie da się jej zmienić po przypisaniu.
- `let` — wartość można zmieniać (`hp = hp - 30`).
- `var` — stary sposób, w nowym kodzie używamy `let` i `const`.
