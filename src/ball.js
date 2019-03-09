export default class Ball {
  constructor(radius, color, game) {
    this.radius = radius
    this.pos = {
      x: game.width / 2,
      y: game.height / 2
    }
    this.game = game
    this.speed = { x: Math.random() * 4 - 2, y: 2 }
    this.color = color
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
      this.pos.y = height / 2
      this.pos.x = width / 2
      this.speed = { x: Math.random() * 4 - 2, y: 2 }
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
    let bottomOfBall = this.pos.y + this.radius
    let topOfPaddle = this.game.paddle.pos.y
    let leftOfPaddle = this.game.paddle.pos.x
    let rightOfPaddle = this.game.paddle.pos.x + this.game.paddle.width
    if (
      bottomOfBall >= topOfPaddle &&
      this.pos.x + this.radius >= leftOfPaddle &&
      this.pos.x - this.radius <= rightOfPaddle
    ) {
      this.pos.y = topOfPaddle - this.radius
      this.speed.y *= -1
    }
  }
}
