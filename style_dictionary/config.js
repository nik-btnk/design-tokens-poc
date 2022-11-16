// Add any token categories to be excluded from processing by Style Dictionary
const excludeArray = ['effect', 'font', 'typography', 'grid']

// Define which token categories would use CSS variables instead of less variables.
// This is needed mainly for colors to set up theming capabilities.
const themableTokens = ['color']

// Import custom transforms
const sizes = require('./custom/transforms/sizes')
const spacings = require('./custom/transforms/spacings')
const fonts = require('./custom/transforms/fonts')

// Import custom formatters
const fontFormatter = require('./custom/formatters/fonts')
const effectsFormatter = require('./custom/formatters/effects')

// Add new transformers and formatters to these arrays
const transforms = [sizes, spacings, fonts]
const formatters = [fontFormatter, effectsFormatter]

const { buildTokenFiles } = require('./custom/helperFunctions/helperFunctions')

// console.log(buildTokenFiles(excludeArray, themableTokens, formatters))

module.exports = {
  transforms,
  formatters,
  settings: {
    source: ['tokens/*.tokens.json'],
    platforms: {
      less: {
        transformGroup: ['less'],
        buildPath: 'less/_tokens/',
        files: buildTokenFiles(excludeArray, themableTokens, formatters)
      }
    }
  }
}
