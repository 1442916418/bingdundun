/**
 * @name: 获取倍数值
 * @param {Number} v - 原值
 * @param {Number} m - 放大倍数
 */
const gv = (v, m = 2) => v * m

/**
 * @name: 重置旋转角度
 * @param {Object} ccanvas 组件的绘图上下文
 * @param {Number} angle 角度
 */
const resetRotate = (c, angle) => c.rotate(angle)

/**
 * @name: 设置旋转角度
 * @param {Object} ccanvas 组件的绘图上下文
 * @param {Number} angle 角度
 */
const setRotate = (c, angle) => c.rotate(angle)

/**
 * @name: 获取弧度
 * @param {Number} value 弧度值
 * @return {Number} 弧度
 */
const getRadian = (value) => value * Math.PI / 180

/**
 * 绘制圆角矩形
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - 矩形的 x 坐标
 * @param {Number} y - 矩形的 y 坐标
 * @param {Number} w - 矩形的宽度
 * @param {Number} h - 矩形的高度
 * @param {Number} r - 矩形的圆角半径
 * @param {lineWidth} r - 矩形的边框宽度
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 * @param {String} [fillStyle = 'transparent']   - 矩形的填充色
 */
const drawRroundRect = ({
  c,
  x,
  y,
  w,
  h,
  r,
  strokeStyle = '#D3D3D3',
  fillStyle = "transparent",
  lineWidth = 2
} = {}) => {
  c.beginPath()
  c.strokeStyle = strokeStyle
  c.fillStyle = fillStyle
  c.lineWidth = gv(lineWidth)

  // 左上半圆
  c.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)
  c.moveTo(x + r, y)
  c.lineTo(x + w - r, y)

  // 右上半圆
  c.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)
  c.lineTo(x + w, y + h - r)

  // 右下半圆
  c.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)
  c.lineTo(x + r, y + h)

  // 左下半圆
  c.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)
  c.lineTo(x, y + r)

  c.fill()
  c.stroke()
  c.closePath()
}

/**
 * 绘制半圆
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - 矩形的 x 坐标
 * @param {Number} y - 矩形的 y 坐标
 * @param {Number} w - 矩形的宽度
 * @param {Number} r - 矩形的圆角半径
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 * @param {String} [fillStyle = 'transparent']   - 矩形的填充色
 * @param {Number} angle - 旋转角度
 */
const drawSemicircle = ({
  c,
  x,
  y,
  w,
  r,
  strokeStyle = '#D3D3D3',
  fillStyle = "#FFFFFF",
  angle = 0
} = {}) => {
  angle && c.rotate(angle)

  c.beginPath()
  c.strokeStyle = strokeStyle
  c.fillStyle = fillStyle
  c.lineWidth = gv(2)

  // 左上半圆
  c.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)

  // 右上半圆
  c.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)

  c.fill()
  c.stroke()
  c.closePath()
}

/**
 * 绘制弧线
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - 横坐标
 * @param {Number} y - 纵坐标
 * @param {Number} x0 - 两切线交点的横坐标
 * @param {Number} y0 - 两切线交点的纵坐标
 * @param {Number} x1 - 第二条切线上一点的横坐标
 * @param {Number} y1 - 第二条切线上一点的纵坐标
 * @param {Number} r - 半径
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 * @param {String} [fillStyle = '#FFFFFF']   - 矩形的填充色
 */
const drawArcTo = ({
  c,
  x,
  y,
  x0,
  y0,
  x1,
  y1,
  r,
  strokeStyle = '#D3D3D3',
  fillStyle = "#FFFFFF",
} = {}) => {
  c.beginPath();
  c.strokeStyle = strokeStyle
  c.fillStyle = fillStyle
  c.lineWidth = gv(2)

  c.moveTo(x, y);
  c.arcTo(x0, y0, x1, y1, r);

  c.fill()
  c.stroke()
  c.closePath()
}

/**
 * 绘制矩形
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - 矩形的 x 坐标
 * @param {Number} y - 矩形的 y 坐标
 * @param {Number} w - 矩形的宽度
 * @param {Number} h - 矩形的高度
 * @param {String} [fillStyle = 'transparent']   - 矩形的填充色
 */
const drawRect = ({
  c,
  x,
  y,
  w,
  h,
  fillStyle = "#FFFFFF"
} = {}) => {
  c.beginPath()
  c.fillStyle = fillStyle

  c.fillRect(x, y, w, h)

  c.fill()
  c.closePath()
}

/**
 * 绘制圆形
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - 圆形的 x 坐标
 * @param {Number} y - 圆形的 y 坐标
 * @param {Number} w - 圆形的宽度
 * @param {Number} h - 圆形的高度
 * @param {String} [fillStyle = 'transparent'] - 圆形的填充色
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 */
const drawCircular = ({
  c,
  x,
  y,
  w,
  h,
  fillStyle = "transparent",
  strokeStyle = '#D3D3D3'
} = {}) => {
  c.beginPath()
  c.fillStyle = fillStyle
  c.strokeStyle = strokeStyle
  c.lineWidth = gv(3)

  c.arc(x, y, w, h, 0, 2 * Math.PI)

  c.fill()
  c.stroke()
  c.closePath()
}

/**
 * 绘制椭圆
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - 矩形的 x 坐标
 * @param {Number} y - 矩形的 y 坐标
 * @param {Number} rx - 椭圆长轴的半径
 * @param {Number} ry - 椭圆短轴的半径
 * @param {Number} rotate - 椭圆的旋转角度，以弧度表示(非角度度数)。
 * @param {Number} startAngle - 将要绘制的起始点角度，从 x 轴测量，以弧度表示(非角度度数)。
 * @param {Number} endAngle - 椭圆将要绘制的结束点角度，以弧度表示(非角度度数)
 * @param {Boolean} anticlockwise - true:逆时针，false:顺时针
 * @param {lineWidth} r - 矩形的边框宽度
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 * @param {String} [fillStyle = 'transparent'] - 矩形的填充色
 */
const drawEllipse = ({
  c,
  x,
  y,
  rx,
  ry,
  rotate,
  startAngle,
  endAngle,
  anticlockwise = false,
  strokeStyle = '#D3D3D3',
  fillStyle = "transparent",
  lineWidth = 2
} = {}) => {
  c.beginPath()
  c.strokeStyle = strokeStyle
  c.fillStyle = fillStyle
  c.lineWidth = gv(lineWidth)

  c.ellipse(x, y, rx, ry, rotate, startAngle, endAngle, anticlockwise)

  c.fill()
  c.stroke()
  c.closePath()
}

/**
 * @name: 三次贝塞尔曲线
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} cp1x - 第一个控制点的 x 轴坐标
 * @param {Number} cp1y - 第一个控制点的 y 轴坐标
 * @param {Number} cp2x - 第二个控制点的 x 轴坐标
 * @param {Number} cp2y - 第二个控制点的 y 轴坐标
 * @param {Number} x - 结束点的 x 轴坐标
 * @param {Number} y - 结束点的 y 轴坐标
 * @param {Number} lineWidth - 线宽
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 * @param {String} [fillStyle = 'transparent'] - 矩形的填充色
 * @param {Boolean} isPoints - 是否显示点位 
 */
const drawBezierCurveTo = ({
  c,
  cp1x,
  cp1y,
  cp2x,
  cp2y,
  x,
  y,
  lineWidth = 2,
  strokeStyle = '#D3D3D3',
  fillStyle = "transparent",
} = {}) => {
  c.beginPath()
  c.strokeStyle = strokeStyle
  c.fillStyle = fillStyle
  c.lineWidth = gv(lineWidth)

  c.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

  c.stroke()
  c.fill()
  c.closePath()
}

/**
 * @name: 三次贝塞尔曲线
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Array} list 坐标数组(二维数组)
 *   @param {Number} cp1x - 第一个控制点的 x 轴坐标
 *   @param {Number} cp1y - 第一个控制点的 y 轴坐标
 *   @param {Number} cp2x - 第二个控制点的 x 轴坐标
 *   @param {Number} cp2y - 第二个控制点的 y 轴坐标
 *   @param {Number} x - 结束点的 x 轴坐标
 *   @param {Number} y - 结束点的 y 轴坐标
 * @param {Number} lineWidth - 线宽
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 */
 const drawBezierCurveToList = ({
  c,
  list= [],
  lineWidth = 2,
  strokeStyle = '#D3D3D3',
} = {}) => {
  c.beginPath()
  c.strokeStyle = strokeStyle
  c.lineWidth = gv(lineWidth)

  list.forEach((item) => {
    c.bezierCurveTo(...item)
  })

  c.stroke()
  c.closePath()
}

/**
 * @name: 三次贝塞尔曲线(填充)
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Array} list 坐标数组(二维数组)
 *   @param {Number} cp1x - 第一个控制点的 x 轴坐标
 *   @param {Number} cp1y - 第一个控制点的 y 轴坐标
 *   @param {Number} cp2x - 第二个控制点的 x 轴坐标
 *   @param {Number} cp2y - 第二个控制点的 y 轴坐标
 *   @param {Number} x - 结束点的 x 轴坐标
 *   @param {Number} y - 结束点的 y 轴坐标
 * @param {Number} lineWidth - 线宽
 * @param {String} [strokeStyle = '#D3D3D3'] - 矩形的边框色
 * @param {String} [fillStyle = 'transparent'] - 矩形的填充色
 * @param {Boolean} isPoints - 是否显示点位 
 */
const drawBezierCurveToFill = ({
  c,
  list = [],
  lineWidth = 2,
  strokeStyle = '#D3D3D3',
  fillStyle = "transparent",
} = {}) => {
  c.beginPath()
  c.strokeStyle = strokeStyle
  c.fillStyle = fillStyle
  c.lineWidth = gv(lineWidth)

  list.forEach((item) => {
    c.bezierCurveTo(...item)
  })

  c.stroke()
  c.fill()
  c.closePath()
}

/**
 * @name: 画直线
 * @param {Object} c - canvas 组件的绘图上下文
 * @param {Number} x - x 轴坐标
 * @param {Number} y - y 轴坐标
 * @param {Number} x1 - 线 x 轴坐标
 * @param {Number} y1 - 线 y 轴坐标
 * @param {Number} lineWidth - 线宽
 */
const drawLineTo = ({
  c,
  x,
  y,
  x1,
  y1,
  lineWidth = 2,
  strokeStyle = '#D3D3D3',
}) => {
  c.beginPath()
  c.strokeStyle = strokeStyle
  c.lineWidth = gv(lineWidth)

  c.moveTo(x, y)
  c.lineTo(x1, y1)

  c.stroke()
  c.closePath()
}