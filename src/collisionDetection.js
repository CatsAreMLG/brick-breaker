export function detectCollision(ball, gameObject) {
  const bottomOfBall = ball.pos.y + ball.radius
  const topOfBall = ball.pos.y - ball.radius
  const topOfObject = gameObject.pos.y
  const bottomOfObject = gameObject.pos.y + gameObject.height
  const leftOfObject = gameObject.pos.x
  const rightOfObject = gameObject.pos.x + gameObject.width
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.pos.x + ball.radius >= leftOfObject &&
    ball.pos.x - ball.radius <= rightOfObject
  )
    return true
  else return false
}
