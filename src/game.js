import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'
export default class Game {
  constructor(cWidth, cHeight) {
    this.width = cWidth
    this.height = cHeight
  }
  start() {
    //ball
    this.ball = new Ball(10, '#f00', this)
    //paddle
    this.paddle = new Paddle(100, 20, '#000', this)
    //bricks
    let bricks = []
    for (let i = 0; i < 14; i++) {
      bricks.push(new Brick(this, { x: i * 1.09 * 52 + 5, y: 30 }))
    }
    //game objects
    this.gameObjects = [this.ball, this.paddle, ...bricks]
    //input
    new InputHandler(this.paddle)
  }
  draw(ctx) {
    this.gameObjects.forEach(objects => objects.draw(ctx))
  }
  update(deltaTime) {
    this.gameObjects.forEach(objects => objects.update(deltaTime, this))
  }
}
