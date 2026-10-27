# Lekcja 1 — materiały dla prowadzącego

## Struktura

- `1-hackowanie/` — fałszywy profil gracza do zabawy DevTools + przyciski z prawdziwym JS
- `2-gra-snake/` — snake z sekcją USTAWIENIA na górze pliku do "cheatowania"

Wszystko działa offline, wystarczy podwójny klik na `index.html`. Zero instalacji.

## Proponowany przebieg (50–60 min)

1. **~10 min — pogadanka.** W co gra, co jego zdaniem robi programista.
   Haki: tick rate w CS, hitboxy, "dlaczego strzał nie wszedł", jak działają
   scamy z "darmowymi V-Bucksami" (idealny moment na lekcję sceptycyzmu).
2. **~15 min — MISJA #1 (DevTools).** Otwórz `1-hackowanie/index.html`,
   niech sam zmieni V-Bucks na 999999 przez "Zbadaj". Screen dla znajomych.
   Puenta: "to działa na KAŻDEJ stronie — google, fortnite.com — ale tylko u ciebie".
3. **~10 min — MISJA #2 (kod).** Klikacie przyciski, potem pokazujesz
   źródło strony — "to jest prawdziwy kod, który właśnie wykonałeś".
   Bonus: w konsoli `document.title = 'HACKED'`.
4. **~15 min — SNAKE + cheaty.** Zagraj, potem otwórz `snake.js` i zmieniajcie
   po kolei: SPEED → WALLS_KILL (false = god mode) → START_SCORE → GROWTH.
   To jest sedno: **zmienna = wartość, którą możesz kontrolować**.
5. **~5 min — zwiastun.** "Za tydzień napiszemy własną grę od zera —
   pomyśl do tego czasu jaką chcesz zrobić."

## Na co uważać

- Nie tłumacz składni. Jeśli pyta "a co to const" — "słowo, które mówi
  komputerowi: zapamiętaj tę wartość". Szczegóły na kolejnych lekcjach.
- Jeśli utknie przy DevTools na Macu: Safari wymaga włączenia menu
  "Programowanie" w ustawieniach — łatwiej użyć Chrome/Edge/Firefox.
- `before/` jest celowo puste — jak będziesz chciał, zrobię wersję startową
  (te same pliki bez przycisków/kodu, do uzupełnienia razem z nim na lekcji).

## Pomysł na rozwinięcie, jak zostanie czas

- Speedrun: kto ustawi snake.js tak, żeby pobić największy wynik?
- Niech sam wpisze w konfiguracji wartość, która zepsuje grę — debugowanie
  "od dnia pierwszego" buduje właściwe nastawienie do błędów.
