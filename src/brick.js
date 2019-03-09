export default class Brick {
  constructor(game, pos) {
    this.width = 52
    this.height = 24
    this.pos = pos
    this.game = game
    this.color = '#099'
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }
  update(deltaTime, { width, height }) {}
}
