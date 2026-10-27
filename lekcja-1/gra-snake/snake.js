// ============================================================
//  USTAWIENIA GRY — TU GRZEJ!
//  Zmień wartość, zapisz plik, odśwież stronę (F5).
// ============================================================

const SPEED = 130;                // szybkość węża: MNIEJ = szybciej (50 = turbo, 300 = ślimak)
const START_SCORE = 0;            // z ilu punktów zaczynasz? (cheat: 9999)
const GROWTH = 1;                 // o ile wąż rośnie po zjedzeniu (5 = mega wąż)
const GRID = 21;                  // wielkość planszy — ile kratek mieści się w rzędzie
const SNAKE_COLOR = "#3fb950";    // kolor węża: "red", "blue", "#ff00ff"...
const FOOD_COLOR = "#f0b429";     // kolor jedzenia
const WALLS_KILL = true;          // false = przechodzisz przez ściany (GOD MODE)
const POINTS_PER_FOOD = 1;        // punkty za jedzenie (cheat: 100)

// ============================================================
//  SILNIK GRY — tu dzieje się magia
//  Na razie wystarczy, że pooglądasz jak to wygląda.
// ============================================================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");

const CELL = canvas.width / GRID;

let snake, dir, nextDir, food, score, alive, timer;

let best = Number(localStorage.getItem("snake_best")) || 0;
bestEl.textContent = best;

// start / restart gry
function start() {
  snake = [{ x: Math.floor(GRID / 2), y: Math.floor(GRID / 2) }];
  dir = { x: 1, y: 0 };
  nextDir = dir;
  score = START_SCORE;
  alive = true;
  scoreEl.textContent = score;
  spawnFood();
  clearInterval(timer);
  timer = setInterval(tick, SPEED);
  draw();
}

// losujemy pozycję jedzenia (tak działa "losowy drop" w grach)
function spawnFood() {
  do {
    food = {
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
}

// jedna "klatka" gry — wykonuje się co SPEED milisekund
function tick() {
  dir = nextDir;
  const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

  // ściana zabija albo przenosi na drugą stronę
  if (WALLS_KILL) {
    if (head.x < 0 || head.y < 0 || head.x >= GRID || head.y >= GRID) return die();
  } else {
    head.x = (head.x + GRID) % GRID;
    head.y = (head.y + GRID) % GRID;
  }

  // zjadamy czy lecimy dalej? (od tego zależy czy ogon się przesunie)
  const eating = head.x === food.x && head.y === food.y;
  const body = eating ? snake : snake.slice(0, -1);
  if (body.some((s) => s.x === head.x && s.y === head.y)) return die();

  snake.unshift(head);

  if (eating) {
    score += POINTS_PER_FOOD;
    scoreEl.textContent = score;
    for (let i = 1; i < GROWTH; i++) snake.push({ ...snake[snake.length - 1] });
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
}

// koniec gry
function die() {
  alive = false;
  clearInterval(timer);
  if (score > best) {
    best = score;
    localStorage.setItem("snake_best", best);
    bestEl.textContent = best;
  }
  draw(true);
}

// rysowanie planszy
function draw(gameOver = false) {
  ctx.fillStyle = "#0d1117";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = FOOD_COLOR;
  ctx.fillRect(food.x * CELL + 1, food.y * CELL + 1, CELL - 2, CELL - 2);

  ctx.fillStyle = SNAKE_COLOR;
  for (const s of snake) {
    ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
  }

  if (gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "28px monospace";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = "16px monospace";
    ctx.fillText("Spacja = restart", canvas.width / 2, canvas.height / 2 + 20);
  }
}

// sterowanie: strzałki + WASD, spacja = restart
document.addEventListener("keydown", (e) => {
  const keys = {
    ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 },
  };

  if (e.key === " ") {
    e.preventDefault();
    if (!alive) start();
    return;
  }

  const d = keys[e.key];
  if (!d) return;
  e.preventDefault();
  if (d.x === -dir.x && d.y === -dir.y) return; // nie można zawrócić o 180°
  nextDir = d;
});

start();
