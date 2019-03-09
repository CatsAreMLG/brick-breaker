export default class Paddle {
  constructor(width, height, color, cWidth, cHeight) {
    this.width = width
    this.height = height
    this.pos = {
      x: cWidth / 2 - this.width / 2,
      y: cHeight - this.height * 2
    }
    this.color = color
    this.maxSpeed = 7
    this.speed = 0
    this.friction = 0.7
  }
  moveLeft() {
    this.speed = -this.maxSpeed
  }
  moveRight() {
    this.speed = this.maxSpeed
  }
  stop() {
    this.speed = 0
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }
  update(deltaTime, cWidth) {
    this.pos.x += this.speed
    if (this.pos.x < 0) this.pos.x = 0
    if (this.pos.x > cWidth - this.width) this.pos.x = cWidth - this.width
  }
}
