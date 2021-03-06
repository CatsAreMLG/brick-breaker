import { detectCollision } from './collisionDetection.js'

export default class Ball {
  constructor(radius, color, game) {
    this.radius = radius
    this.pos = {
      x: game.width / 2,
      y: game.height / 2
    }
    this.game = game
    this.speed = { x: Math.random() * 8 - 4, y: 4 }
    this.color = color
  }
  reset() {
    this.pos.x = this.game.width / 2
    this.pos.y = this.game.height / 2
    this.speed = { x: Math.random() * 8 - 4, y: 4 }
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
  update(deltaTime, { width, height }) {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y
    //wall bottom
    if (this.pos.y >= height - this.radius) {
      this.game.lives--
      this.reset()
    }
    //wall top
    if (this.pos.y <= this.radius) {
      this.speed.y *= -1
    }
    //wall left/right
    if (this.pos.x >= width - this.radius || this.pos.x <= 0 + this.radius) {
      this.speed.x *= -1
    }
    //paddle collision
    if (detectCollision(this, this.game.paddle)) {
      this.pos.y = this.game.paddle.pos.y - this.radius
      this.speed.y *= -1
    }
  }
}
