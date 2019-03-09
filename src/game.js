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
    this.ball = new Ball(10, '#f00', this)
    //draw paddle
    this.paddle = new Paddle(100, 20, '#000', this)
    //game objects
    this.gameObjects = [this.ball, this.paddle]
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
