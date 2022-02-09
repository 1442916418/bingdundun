const m = 2
const w = 550 * m
const h = 660 * m
const c0 = '#D3D3D3'
const c1 = '#2D2D2D'
const c2 = 'transparent'
const colorList = ['#ADFF2F', '#FFD700', '#FF4500', '#6A5ACD', '#00FFFF']

const canvas = document.querySelector('canvas')

canvas.width = w
canvas.height = h

const c = canvas.getContext('2d')

c.fillStyle = '#FFFFFF'
c.fillRect(0, 0, w, h)

// 身体
drarRroundRect({
  c,
  x: gv(150),
  y: gv(120),
  w: gv(280),
  h: gv(300),
  r: gv(130),
})

// 左侧耳朵
drawSemicircle({
  c,
  x: gv(70),
  y: gv(195),
  w: gv(85),
  r: gv(40),
  fillStyle: '#FFFFFF',
  angle: -30.5 * Math.PI / 180
})

// 内左侧耳朵
drawSemicircle({
  c,
  x: gv(85),
  y: gv(210),
  w: gv(50),
  r: gv(25),
  strokeStyle: 'transparent',
  fillStyle: c1,
  angle: -1.5 * Math.PI / 180
})

resetRotate(c, 32 * Math.PI / 180)

// 右侧耳朵
drawSemicircle({
  c,
  x: gv(345),
  y: gv(-144),
  w: gv(85),
  r: gv(40),
  fillStyle: '#FFFFFF',
  angle: 37 * Math.PI / 180
})

// 右侧内耳朵
drawSemicircle({
  c,
  x: gv(360),
  y: gv(-140),
  w: gv(50),
  r: gv(25),
  strokeStyle: 'transparent',
  fillStyle: c1,
  angle: 1 * Math.PI / 180
})

resetRotate(c, -38 * Math.PI / 180)

// 右手
drawSemicircle({
  c,
  x: gv(430),
  y: gv(210),
  w: gv(55),
  r: gv(25),
})

// 右胳膊
drawArcTo({
  c,
  x: gv(485.5),
  y: gv(247),
  x0: gv(485.5),
  y0: gv(297),
  x1: gv(448.5),
  y1: gv(312),
  r: 185,
})

// 右手（内）
drawSemicircle({
  c,
  x: gv(430),
  y: gv(225),
  w: gv(45),
  r: gv(20),
  strokeStyle: c2,
  fillStyle: c1
})

// 右胳膊(内)
c.beginPath()
c.moveTo(gv(430), gv(240))
c.lineTo(gv(476), gv(240))
c.lineTo(gv(431), gv(293.5))
c.fillStyle = c1
c.fill()
c.closePath()

drawArcTo({
  c,
  x: gv(475),
  y: gv(240),
  x0: gv(475),
  y0: gv(280),
  x1: gv(410),
  y1: gv(300),
  r: 125,
  strokeStyle: c2,
  fillStyle: c1
})

// 右胳膊(内) 爱心
c.beginPath()
c.font = '50px 微软雅黑'
c.fillStyle = '#FF4500'
c.fillText('❤', gv(437), gv(260))
c.closePath()

// TODO: 先画中间部分

colorList.forEach((color, i) => {
  // let cw = gv(i ? 80 + (i * 4) : 80)

  // drawCircular({
  //   c,
  //   x: gv(290),
  //   y: gv(250),
  //   w: cw,
  //   h: gv(i ? 50 + (i * 4) : 50),
  //   strokeStyle: color
  // })

  let cw = gv(i ? 175 + (i * 4) : 175)
  drarRroundRect({
    c,
    x: gv(200),
    y: gv(160),
    w: cw,
    h: gv(i ? 140 + (i * 4) : 140),
    r: gv(78),
    strokeStyle: color,
    lineWidth: 3
  })
})