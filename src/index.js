//imports
import Paddle from './paddle.js'

//canvas settings
const canvas = document.getElementById('gameScreen')
const ctx = canvas.getContext('2d')
const width = canvas.clientWidth
const height = canvas.clientHeight

//clear
ctx.clearRect(0, 0, width, height)

//draw paddle
let paddle = new Paddle(100, 20, '#000', width, height)
paddle.draw(ctx)
