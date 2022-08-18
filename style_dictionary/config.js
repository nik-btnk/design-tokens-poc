const tokens = require('../tokens/design-tokens.tokens.json')

// Import custom transforms
const sizes = require('./custom/transforms/sizes')
const spacings = require('./custom/transforms/spacings')
const fonts = require('./custom/transforms/fonts')

// Import custom formatters
const fontFormatter = require('./custom/formatters/fonts')
const effectsFormatter = require('./custom/formatters/effects')

const tokensArray = []
for (x in tokens) {
  tokensArray.push({ [x]: tokens[x] })
}

// Add any token categories to be excluded from processing by Style Dictionary
const excludeArray = ['effect', 'font', 'typography']

// Add new transformers and formatters to these arrays
const transforms = [sizes, spacings, fonts]
const formatters = [fontFormatter, effectsFormatter]

module.exports = {
  transforms,
  formatters,
  settings: {
    source: ['tokens/*.tokens.json'],
    platforms: {
      less: {
        transformGroup: ['less'],
        buildPath: 'less/_tokens/',
        files: [
          ...tokensArray.map((token) => {
            const tokenCategory = Object.keys(token)[0]

            if (!excludeArray.includes(tokenCategory)) {
              return {
                destination: `_${tokenCategory}.less`,
                format: 'less/variables',
                options: { showFileHeader: false },
                filter: {
                  attributes: {
                    category: tokenCategory
                  }
                }
              }
            }
          }),
          ...formatters.map((formatter) => {
            return {
              destination: formatter.target,
              format: formatter.name,
              options: { showFileHeader: false }
            }
          })
        ]
      }
    }
  }
}
