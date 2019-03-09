import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'
import { buildLevel, level1, level2 } from './levels.js'

const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAME_OVER: 3,
  NEW_LEVEL: 4,
  WIN: 5
}

export default class Game {
  constructor(cWidth, cHeight) {
    this.width = cWidth
    this.height = cHeight
    this.gamestate = GAME_STATE.MENU
    this.lives = 3
    this.levels = [level1, level2]
    this.currentLevel = 0
    this.bricks = []
    this.ball = new Ball(10, '#f00', this)
    this.paddle = new Paddle(100, 20, '#000', this)
    this.gameObjects = []
    new InputHandler(this.paddle, this)
  }
  start() {
    if (
      this.gamestate !== GAME_STATE.MENU &&
      this.gamestate !== GAME_STATE.GAME_OVER &&
      this.gamestate !== GAME_STATE.NEW_LEVEL &&
      this.gamestate !== GAME_STATE.WIN
    )
      return
    this.gamestate = GAME_STATE.RUNNING
    //bricks
    this.bricks = buildLevel(this, this.levels[this.currentLevel])
    this.ball.reset()
    //objects
    this.gameObjects = [this.ball, this.paddle]
  }
  draw(ctx) {
    ;[...this.bricks, ...this.gameObjects].forEach(objects => objects.draw(ctx))
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
    if (this.gamestate == GAME_STATE.GAME_OVER) {
      ctx.fillStyle = 'rgb(0,0,0)'
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('GAME OVER', this.width / 2, this.height / 2)
    }
    if (this.gamestate == GAME_STATE.WIN) {
      ctx.fillStyle = 'rgb(0,0,0)'
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('YOU WIN', this.width / 2, this.height / 2)
    }
  }
  update(deltaTime) {
    if (this.lives === 0) this.gamestate = GAME_STATE.GAME_OVER
    if (this.gamestate !== GAME_STATE.RUNNING) return
    if (this.bricks.length === 0) {
      if (this.currentLevel === this.levels.length - 1) {
        this.gamestate = GAME_STATE.WIN
        this.currentLevel = 0
      } else {
        this.currentLevel++
        this.gamestate = GAME_STATE.NEW_LEVEL
        this.start()
      }
    }
    ;[...this.bricks, ...this.gameObjects].forEach(objects =>
      objects.update(deltaTime, this)
    )
    this.bricks = this.bricks.filter(brick => !brick.markedForDeletion)
  }
  togglePause() {
    this.gamestate == GAME_STATE.PAUSED
      ? (this.gamestate = GAME_STATE.RUNNING)
      : (this.gamestate = GAME_STATE.PAUSED)
  }
}
