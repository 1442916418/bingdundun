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
const drarRroundRect = ({
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