const form = document.querySelector('#guess-form')
const input = document.querySelector('#guess')
const submitButton = form.querySelector('button')
const message = document.querySelector('#message')
const attempts = document.querySelector('#attempts')
const restartButton = document.querySelector('#restart')

let secretNumber = drawNumber()
let attemptsLeft = 3

function drawNumber() {
  return Math.floor(Math.random() * 10) + 1
}

function setMessage(text, state) {
  message.textContent = text
  message.className = `message ${state}`
}

function updateAttempts() {
  attempts.textContent = `Pozostałe próby: ${attemptsLeft}`
}

function finishGame() {
  input.disabled = true
  submitButton.disabled = true
  restartButton.hidden = false
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const guess = Number(input.value)

  if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
    setMessage('Wpisz liczbę całkowitą od 1 do 10.', 'error')
    input.select()
    return
  }

  attemptsLeft -= 1
  updateAttempts()

  if (guess === secretNumber) {
    setMessage(`Brawo, wygrałeś! Prawidłowa liczba to ${secretNumber}.`, 'success')
    finishGame()
    return
  }

  if (attemptsLeft === 0) {
    setMessage(`Przegrałeś. Prawidłowa liczba to ${secretNumber}.`, 'error')
    finishGame()
    return
  }

  const hint = guess > secretNumber ? 'za duża' : 'za mała'
  setMessage(`Liczba ${guess} jest ${hint}. Spróbuj ponownie.`, 'hint')
  input.value = ''
  input.focus()
})

restartButton.addEventListener('click', () => {
  secretNumber = drawNumber()
  attemptsLeft = 3
  input.disabled = false
  submitButton.disabled = false
  restartButton.hidden = true
  input.value = ''
  setMessage('Wpisz liczbę i sprawdź, czy trafisz.', 'hint')
  updateAttempts()
  input.focus()
})
