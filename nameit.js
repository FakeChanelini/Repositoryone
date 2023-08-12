const moles = document.querySelectorAll('.mole')
const game = document.querySelector('.game')
let score = 0
let gameOver = false
let lastMole

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randomMole(moles) {
  const index = Math.floor(Math.random() * moles.length)
  const mole = moles[index]
  if (mole === lastMole) {
    return randomMole(moles)
  }
  lastMole = mole
  return mole
}

function showMole() {
  const time = randomTime(500, 1000)
  const mole = randomMole(moles)
  mole.classList.add('up')
  setTimeout(() => {
    mole.classList.remove('up')
    if (!gameOver) showMole()
  }, time)
}

function startGame() {
  score = 0
  gameOver = false
  showMole()
  setTimeout(() => (gameOver = true), 10000)
}

function whack(e) {
  score++
  document.querySelector('#score').textContent = score
}

moles.forEach((mole) => mole.addEventListener('click', whack))
document.querySelector('#start').addEventListener('click', startGame)
