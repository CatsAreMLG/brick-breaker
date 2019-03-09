export default class Ball {
  constructor(radius, cWidth, cHeight, color) {
    this.radius = radius
    this.pos = {
      x: cWidth / 2,
      y: cHeight / 2
    }
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
  update(deltaTime, cWidth, cHeight) {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y
    if (this.pos.y >= cHeight - this.radius) {
      this.pos.y = cHeight / 2
      this.pos.x = cWidth / 2
      this.speed = { x: Math.random() * 4 - 2, y: 2 }
    }
    if (this.pos.y <= this.radius) {
      this.speed.y *= -1
    }
    if (this.pos.x >= cWidth - this.radius || this.pos.x <= 0 + this.radius) {
      this.speed.x *= -1
    }
  }
}
