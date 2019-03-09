//imports
import Paddle from './paddle.js'

//canvas settings
const canvas = document.getElementById('gameScreen')
const ctx = canvas.getContext('2d')
const GAME_WIDTH = canvas.clientWidth
const GAME_HEIGHT = canvas.clientHeight

//draw paddle
let paddle = new Paddle(100, 20, '#000', GAME_WIDTH, GAME_HEIGHT)
paddle.draw(ctx)

//variables
let lastTime = 0

//render
const gameLoop = timestamp => {
  //time calculation
  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  //clear
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  //objects
  paddle.update(deltaTime)
  paddle.draw(ctx)
  //loop
  requestAnimationFrame(gameLoop)
}
gameLoop()
