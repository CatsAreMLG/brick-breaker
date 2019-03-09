import Brick from './brick.js'

export const buildLevel = (game, level) => {
  let bricks = []
  level.forEach((row, i) => {
    row.forEach((brick, j) => {
      if (brick === 1) {
        let pos = {
          x: 80 * j,
          y: 75 + 24 * i
        }
        bricks.push(new Brick(game, pos))
      }
    })
  })
  return bricks
}

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
