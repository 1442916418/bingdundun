const m = 2
const w = 550 * m
const h = 660 * m
const c1 = '#2D2D2D'
const canvas = document.querySelector('canvas')

canvas.width = w
canvas.height = h

const c = canvas.getContext('2d')

c.fillStyle = '#FFFFFF'
c.fillRect(0, 0, w, h)

// 身体
drarRroundRect({
  c,
  x: getValue(150),
  y: getValue(120),
  w: getValue(280),
  h: getValue(300),
  r: getValue(130),
})

// 左侧耳朵
drawSemicircle({
  c,
  x: getValue(100),
  y: getValue(184),
  w: getValue(85),
  r: getValue(40),
  fillStyle: '#FFFFFF',
  angle: -25.5 * Math.PI / 180
})

// 内左侧耳朵
drawSemicircle({
  c,
  x: getValue(112),
  y: getValue(197),
  w: getValue(50),
  r: getValue(25),
  strokeStyle: 'transparent',
  fillStyle: c1,
  angle: -1.5 * Math.PI / 180
})

resetRotate(c, 27 * Math.PI / 180)

// 右侧内耳朵
drawSemicircle({
  c,
  x: getValue(350),
  y: getValue(-164),
  w: getValue(85),
  r: getValue(40),
  fillStyle: '#FFFFFF',
  angle: 40.1 * Math.PI / 180
})

// 右侧内耳朵
drawSemicircle({
  c,
  x: getValue(362),
  y: getValue(-155),
  w: getValue(50),
  r: getValue(25),
  strokeStyle: 'transparent',
  fillStyle: c1,
  angle: 1 * Math.PI / 180
})