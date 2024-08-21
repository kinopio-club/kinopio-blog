// adapted from https://gist.github.com/pketh/3f62b807db3835d564c1
let colorCycleTimer
let colorCycleIteration = 0
const colorCycleDuration = 200
const max = 239
const min = 150

// initial rgb values
let r = Math.floor(Math.random() * 241)
let g = Math.floor(Math.random() * 241)
let b = Math.floor(Math.random() * 241)
r = Math.max(r, min)
g = Math.max(g, min)
b = Math.max(b, min)
r = Math.min(r, max)
g = Math.min(g, max)
b = Math.min(b, max)

// random intervals used to calculate the changing RGB values
let ri = Math.floor(Math.random() * 4)
let gi = Math.floor(Math.random() * 4)
let bi = Math.floor(Math.random() * 4)

const start = () => {
  updateBackgroundColor()
  colorCycleIteration = 0
  if (colorCycleTimer) { return }
  colorCycleTimer = window.requestAnimationFrame(colorCycleFrame)
}
// update color

const updateBackgroundColor = () => {
  if (r > max || r < min) {
    ri = ri * -1
  }
  if (g > max || g < min) {
    gi = gi * -1
  }
  if (b > max || b < min) {
    bi = bi * -1
  }
  r += ri
  g += gi
  b += bi
  let backgroundColor = `rgb(${r}, ${g}, ${b})`
  const element = document.body
  element.style.background = backgroundColor
}
const shouldUpdate = () => {
  const result = colorCycleIteration / colorCycleDuration
  return result === parseInt(result)
}
const colorCycleFrame = () => {
  colorCycleIteration++
  if (shouldUpdate()) {
    updateBackgroundColor()
  }
  window.requestAnimationFrame(colorCycleFrame)
}

start()
