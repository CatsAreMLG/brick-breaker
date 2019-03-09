//imports
import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'

//canvas settings
const canvas = document.getElementById('gameScreen')
const ctx = canvas.getContext('2d')
const GAME_WIDTH = canvas.clientWidth
const GAME_HEIGHT = canvas.clientHeight

//draw paddle
let paddle = new Paddle(100, 20, '#000', GAME_WIDTH, GAME_HEIGHT)
paddle.draw(ctx)

//input
new InputHandler(paddle)

//variables
let lastTime = 0

//ball
let ball = new Ball(10, GAME_WIDTH, GAME_HEIGHT, '#f00')
ball.draw(ctx)

//render
const gameLoop = timestamp => {
  //time calculation
  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  //clear
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  //objects
  paddle.update(deltaTime, GAME_WIDTH)
  paddle.draw(ctx)
  ball.draw(ctx)
  ball.update(deltaTime, GAME_WIDTH, GAME_HEIGHT)
  //loop
  requestAnimationFrame(gameLoop)
}
requestAnimationFrame(gameLoop)
