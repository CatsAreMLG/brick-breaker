//imports
import Game from './game.js'
//canvas settings
const canvas = document.getElementById('gameScreen')
const ctx = canvas.getContext('2d')
const GAME_WIDTH = canvas.clientWidth
const GAME_HEIGHT = canvas.clientHeight
//variables
let game = new Game(GAME_WIDTH, GAME_HEIGHT)
let lastTime = 0
//render
const gameLoop = timestamp => {
  //time calculation
  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  //clear
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  //objects
  game.update(deltaTime)
  game.draw(ctx)
  //loop
  requestAnimationFrame(gameLoop)
}
requestAnimationFrame(gameLoop)
