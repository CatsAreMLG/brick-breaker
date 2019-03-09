export default class Brick {
  constructor(game, pos) {
    this.width = 80
    this.height = 24
    this.pos = pos
    this.game = game
    this.color = `hsla(${Math.random() * 360},50%,50%,0.5)`
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#fff'
    ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height)
  }
  update(deltaTime, { width, height }) {}
}
