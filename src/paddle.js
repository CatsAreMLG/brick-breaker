export default class Paddle {
  constructor(width, height, color, cWidth, cHeight) {
    this.width = width
    this.height = height
    this.pos = {
      x: cWidth / 2 - this.width / 2,
      y: cHeight - this.height * 2
    }
    this.color = color
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }
}
