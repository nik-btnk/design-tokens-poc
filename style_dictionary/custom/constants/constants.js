// CSS properties that do not require specified units.
const cssNoUnits = [
  'font-weight',
  'line-height',
  'z-index',
  'animation-iteration-count',
  'border-image-slice',
  'border-image-width',
  'column-count',
  'counter-increment',
  'counter-reset',
  'flex',
  'flex-grow',
  'flex-shrink',
  'font-size-adjust',
  'nav-index',
  'opacity',
  'order',
  'orphans',
  'tab-size',
  'windows'
]

// Specified value units.
const units = 'px'

module.exports = { cssNoUnits, units }
