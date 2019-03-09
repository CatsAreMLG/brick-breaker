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
    this.gamestate = GAME_STATE.MENU
    this.ball = new Ball(10, '#f00', this)
    this.paddle = new Paddle(100, 20, '#000', this)
    this.gameObjects = []
    new InputHandler(this.paddle, this)
  }
  start() {
    this.gamestate = GAME_STATE.RUNNING
    //bricks
    let bricks = buildLevel(this, level1)
    //objects
    this.gameObjects = [...bricks, this.ball, this.paddle]
  }
  draw(ctx) {
    this.gameObjects.forEach(objects => objects.draw(ctx))
    if (this.gamestate == GAME_STATE.PAUSED) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)'
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('Paused', this.width / 2, this.height / 2)
    }
    if (this.gamestate == GAME_STATE.MENU) {
      ctx.fillStyle = 'rgb(0,0,0)'
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('Press SPACEBAR To Start', this.width / 2, this.height / 2)
    }
  }
  update(deltaTime) {
    if (this.gamestate !== GAME_STATE.RUNNING) return
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
