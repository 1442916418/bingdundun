const m = 2
const w = 550 * m
const h = 660 * m
const colors = {
  /**
   * 浅灰色
   */
  lightGrey: '#D3D3D3',
  /**
   * 黑色
   */
  black: '#2D2D2D',
  /**
   * 透明
   */
  transparent: 'transparent',
  /**
   * 白色
   */
  white: '#FFFFFF',
  /**
   * 深石板灰(眼睛底色)
   */
  darkSlateGray: '#2F4F4F',
}
// 脸圆圈颜色
const colorList = ['#ADFF2F', '#FFD700', '#FF4500', '#6A5ACD', '#00FFFF']
// 奥运五环颜色
const colorList1 = ['#0081C8', '#000000', '#EE334E', '#FCB131', '#00A651']

const canvas = document.querySelector('canvas')

canvas.width = w
canvas.height = h

const c = canvas.getContext('2d')

c.fillStyle = colors.white
c.fillRect(0, 0, w, h)

// 身体
drawRroundRect({
  c,
  x: gv(150),
  y: gv(120),
  w: gv(280),
  h: gv(320),
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
  angle: getRadian(-30.5)
})

// 内左侧耳朵
drawSemicircle({
  c,
  x: gv(85),
  y: gv(210),
  w: gv(50),
  r: gv(25),
  strokeStyle: 'transparent',
  fillStyle: colors.black,
  angle: getRadian(-1.5)
})

resetRotate(c, getRadian(32))

// 右侧耳朵
drawSemicircle({
  c,
  x: gv(345),
  y: gv(-144),
  w: gv(85),
  r: gv(40),
  fillStyle: '#FFFFFF',
  angle: getRadian(37)
})

// 右侧内耳朵
drawSemicircle({
  c,
  x: gv(360),
  y: gv(-140),
  w: gv(50),
  r: gv(25),
  strokeStyle: 'transparent',
  fillStyle: colors.black,
  angle: getRadian(1)
})

resetRotate(c, getRadian(-38))

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
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 右胳膊(内)
c.beginPath()
c.moveTo(gv(430), gv(240))
c.lineTo(gv(476), gv(240))
c.lineTo(gv(431), gv(293.5))
c.fillStyle = colors.black
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
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 右胳膊(内) 爱心
c.beginPath()
c.font = '50px 微软雅黑'
c.fillStyle = '#FF4500'
c.fillText('❤', gv(437), gv(260))
c.closePath()

// 双腿部分(最外层)
const bottomBoxList = [
  [gv(424), gv(350), gv(415), gv(400), gv(400), gv(430)],
  [gv(400), gv(430), gv(385), gv(460), gv(390), gv(530)],
  [gv(390), gv(530), gv(395), gv(560), gv(325), gv(550)],
  [gv(325), gv(550), gv(315), gv(540), gv(325), gv(530)],
  [gv(325), gv(530), gv(335), gv(500), gv(315), gv(490)],
  [gv(315), gv(490), gv(270), gv(490), gv(280), gv(490)],
  [gv(280), gv(490), gv(260), gv(490), gv(260), gv(510)],
  [gv(260), gv(510), gv(275), gv(540), gv(260), gv(550)],
  [gv(260), gv(550), gv(200), gv(560), gv(190), gv(535)],
  [gv(190), gv(535), gv(195), gv(460), gv(180), gv(430)],
  [gv(180), gv(430), gv(170), gv(400), gv(156), gv(350)]
]
drawBezierCurveToList({
  c,
  list: bottomBoxList
})

// 左大腿
const leftFillList = [
  [gv(200), gv(465), gv(205), gv(500), gv(202), gv(520)],
  [gv(202), gv(510), gv(195), gv(545), gv(250), gv(530)],
  [gv(250), gv(530), gv(240), gv(505), gv(250), gv(490)],
  [gv(250), gv(490), gv(220), gv(465), gv(200), gv(465)],
]
drawBezierCurveToFill({
  c,
  list: leftFillList,
  isPoints: true,
  strokeStyle: colors.black,
  fillStyle: colors.black
})

// 右大腿
const rightFillList = [
  [gv(380), gv(470), gv(375), gv(500), gv(380), gv(530)],
  [gv(380), gv(530), gv(380), gv(535), gv(340), gv(535)],
  [gv(340), gv(535), gv(335), gv(535), gv(335), gv(500)],
  [gv(335), gv(500), gv(333), gv(490), gv(381), gv(470)],
]
drawBezierCurveToFill({
  c,
  list: rightFillList,
  isPoints: true,
  strokeStyle: colors.black,
  fillStyle: colors.black
})

// 左手手
const leftHeadBoxList = [
  [gv(150), gv(260), gv(120), gv(265), gv(80), gv(320)],
  [gv(80), gv(320), gv(70), gv(340), gv(80), gv(360)],
  [gv(80), gv(360), gv(90), gv(380), gv(130), gv(340)],
  [gv(130), gv(340), gv(139), gv(330), gv(150), gv(320)],
]
drawBezierCurveToList({
  c,
  list: leftHeadBoxList
})

// 左胳膊
const rightHeadFillList = [
  [gv(150), gv(270), gv(120), gv(275), gv(85), gv(330)],
  [gv(85), gv(330), gv(80), gv(340), gv(90), gv(350)],
  [gv(90), gv(350), gv(105), gv(360), gv(126), gv(330)],
  [gv(125), gv(330), gv(140), gv(315), gv(150), gv(310)],
]
drawBezierCurveToFill({
  c,
  list: rightHeadFillList,
  isPoints: true,
  strokeStyle: colors.black,
  fillStyle: colors.black
})

// 中间部分
colorList.forEach((color, i) => {
  let cw = gv(i ? 210 + (i * 5) : 210)
  drawRroundRect({
    c,
    x: gv(i ? 180 - (i * 2) : 180),
    y: gv(i ? 150 - (i * 2) : 150),
    w: cw,
    h: gv(i ? 180 + (i * 6) : 180),
    r: gv(100),
    strokeStyle: color,
    lineWidth: 3
  })
})

// 左熊猫眼(黑眼圈)
drawEllipse({
  c,
  x: gv(230),
  y: gv(220),
  rx: 75,
  ry: 50,
  rotate: getRadian(-30),
  startAngle: 0,
  endAngle: 2 * Math.PI,
  strokeStyle: colors.transparent,
  fillStyle: colors.black,
})

// 左熊猫眼(白眼圈)
drawCircular({
  c,
  x: gv(238),
  y: gv(218),
  w: gv(16),
  h: gv(16),
  strokeStyle: colors.transparent,
  fillStyle: colors.white
})

// 左熊猫眼(灰眼圈)
drawCircular({
  c,
  x: gv(240),
  y: gv(218),
  w: gv(12),
  h: gv(12),
  strokeStyle: colors.transparent,
  fillStyle: colors.darkSlateGray
})

// 左熊猫眼(黑眼球)
drawCircular({
  c,
  x: gv(240),
  y: gv(220),
  w: gv(6),
  h: gv(6),
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 左熊猫眼(黑眼球上的白色圈)
drawCircular({
  c,
  x: gv(240),
  y: gv(213),
  w: gv(4),
  h: gv(4),
  strokeStyle: colors.transparent,
  fillStyle: colors.white
})

// 右熊猫眼(黑眼圈)
drawEllipse({
  c,
  x: gv(340),
  y: gv(220),
  rx: 75,
  ry: 50,
  rotate: getRadian(30),
  startAngle: 0,
  endAngle: 2 * Math.PI,
  strokeStyle: colors.transparent,
  fillStyle: colors.black,
})

// 左熊猫眼(白眼圈)
drawCircular({
  c,
  x: gv(333),
  y: gv(218),
  w: gv(16),
  h: gv(16),
  strokeStyle: colors.transparent,
  fillStyle: colors.white
})

// 右熊猫眼(灰眼圈)
drawCircular({
  c,
  x: gv(333),
  y: gv(218),
  w: gv(12),
  h: gv(12),
  strokeStyle: colors.transparent,
  fillStyle: colors.darkSlateGray
})

// 左熊猫眼(黑眼球)
drawCircular({
  c,
  x: gv(333),
  y: gv(220),
  w: gv(6),
  h: gv(6),
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 左熊猫眼(黑眼球上的白色圈)
drawCircular({
  c,
  x: gv(333),
  y: gv(213),
  w: gv(4),
  h: gv(4),
  strokeStyle: colors.transparent,
  fillStyle: colors.white
})

// 鼻子
drawRroundRect({
  c,
  x: gv(273),
  y: gv(223),
  w: gv(25),
  h: gv(12),
  r: gv(6),
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 鼻子尖尖
drawArcTo({
  c,
  x: gv(297),
  y: gv(232),
  x0: gv(290),
  y0: gv(250),
  x1: gv(273),
  y1: gv(233),
  r: 30,
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 嘴巴
drawArcTo({
  c,
  x: gv(315),
  y: gv(260),
  x0: gv(280),
  y0: gv(275),
  x1: gv(245),
  y1: gv(260),
  r: 160,
  strokeStyle: colors.transparent,
  fillStyle: colors.black
})

// 北京 2022     
c.beginPath()
c.font = 'italic bold 30px sans-serif'
c.fillStyle = colors.black
c.fillText('BEIJING 2022', gv(235), gv(380))
c.closePath()

// 奥运五环
drawCircular({
  c,
  x: gv(260),
  y: gv(400),
  w: gv(11),
  h: gv(11),
  strokeStyle: colorList1[0]
})
drawCircular({
  c,
  x: gv(287),
  y: gv(400),
  w: gv(11),
  h: gv(11),
  strokeStyle: colorList1[1]
})
drawCircular({
  c,
  x: gv(314),
  y: gv(400),
  w: gv(11),
  h: gv(11),
  strokeStyle: colorList1[2]
})
drawCircular({
  c,
  x: gv(273),
  y: gv(410),
  w: gv(11),
  h: gv(11),
  strokeStyle: colorList1[3]
})
drawCircular({
  c,
  x: gv(301),
  y: gv(410),
  w: gv(11),
  h: gv(11),
  strokeStyle: colorList1[4]
})