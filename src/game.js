import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'
import { buildLevel, level1 } from './levels.js'

const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAME_OVER: 3
}

export default class Game {
  constructor(cWidth, cHeight) {
    this.width = cWidth
    this.height = cHeight
  }
  start() {
    this.gamestate = GAME_STATE.RUNNING
    //ball
    this.ball = new Ball(10, '#f00', this)
    //paddle
    this.paddle = new Paddle(100, 20, '#000', this)
    //bricks
    let bricks = buildLevel(this, level1)
    //game objects
    this.gameObjects = [...bricks, this.ball, this.paddle]
    //input
    new InputHandler(this.paddle, this)
  }
  draw(ctx) {
    this.gameObjects.forEach(objects => objects.draw(ctx))
  }
  update(deltaTime) {
    if (this.gamestate == GAME_STATE.PAUSED) return
    this.gameObjects.forEach(objects => objects.update(deltaTime, this))
    this,
      (this.gameObjects = this.gameObjects.filter(
        object => !object.markedForDeletion
      ))
  }
  togglePause() {
    this.gamestate == GAME_STATE.PAUSED
      ? (this.gamestate = GAME_STATE.RUNNING)
      : (this.gamestate = GAME_STATE.PAUSED)
  }
}
