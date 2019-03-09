import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
export default class Game {
  constructor(cWidth, cHeight) {
    this.width = cWidth
    this.height = cHeight
  }
  start() {
    //ball
    this.ball = new Ball(10, this.width, this.height, '#f00')
    //draw paddle
    this.paddle = new Paddle(100, 20, '#000', this.width, this.height)
    //input
    new InputHandler(this.paddle)
  }
  draw(ctx) {
    this.ball.draw(ctx)
    this.paddle.draw(ctx)
  }
  update(deltaTime) {
    this.ball.update(deltaTime, this.width, this.height)
    this.paddle.update(deltaTime, this.width)
  }
}
