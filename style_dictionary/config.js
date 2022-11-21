const {
  buildCreamColorsTokens
} = require('./custom/helperFunctions/helperFunctions')

// Load json files
const CREAM_COLORS = require('../tokens/design-tokens.tokens.json')

// Add any token categories to be excluded from processing by Style Dictionary
// Use of token category is not required, or when creating a custom format
const excludeArray = ['effect', 'font', 'typography', 'grid']

// Define which token categories would use CSS variables instead of less variables.
// This is needed mainly for colors to set up theming capabilities.
const themableTokens = ['color']

// Import custom transforms
const sizes = require('./custom/transforms/sizes')
const spacings = require('./custom/transforms/spacings')
const fonts = require('./custom/transforms/fonts')

// Import custom formats
const fontFormat = require('./custom/formats/fonts')
const effectsFormat = require('./custom/formats/effects')

// Add new transformers and formatters to these arrays
const transforms = [sizes, spacings, fonts]
const formats = [fontFormat, effectsFormat]

const cream_colors = {
  source: ['tokens/design-tokens.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: buildCreamColorsTokens(
        CREAM_COLORS,
        excludeArray,
        themableTokens,
        formats
      )
    }
  }
}

const test_brand_1_settings = {
  source: ['tokens/test-1.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: [
        {
          destination: 'set_1/_color.less',
          format: 'css/variables',
          options: {
            showFileHeader: false
          },
          filter: {
            attributes: {
              category: 'color'
            }
          }
        },
        {
          destination: 'set_1/_sizes.less',
          format: 'less/variables',
          options: {
            showFileHeader: false
          },
          filter: {
            attributes: {
              category: 'sizes'
            }
          }
        }
      ],
      prefix: 'set-1'
    }
  }
}

const test_brand_2_settings = {
  source: ['tokens/test-2.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: [
        {
          destination: 'set_2/_color.less',
          format: 'css/variables',
          options: {
            showFileHeader: false
          },
          filter: {
            attributes: {
              category: 'color'
            }
          }
        },
        {
          destination: 'set_2/_sizes.less',
          format: 'less/variables',
          options: {
            showFileHeader: false
          },
          filter: {
            attributes: {
              category: 'sizes'
            }
          }
        }
      ],
      prefix: 'set-2'
    }
  }
}

const test_brand_3_settings = {
  source: ['tokens/test-3.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: [
        {
          destination: 'set_3/_color.less',
          format: 'css/variables',
          options: {
            showFileHeader: false
          },
          filter: {
            attributes: {
              category: 'color'
            }
          }
        },
        {
          destination: 'set_3/_sizes.less',
          format: 'less/variables',
          options: {
            showFileHeader: false
          },
          filter: {
            attributes: {
              category: 'sizes'
            }
          }
        }
      ],
      prefix: 'set-3'
    }
  }
}

module.exports = {
  transforms,
  formats,
  settings: {
    cream_colors,
    test_brand_1_settings,
    test_brand_2_settings,
    test_brand_3_settings
  }
}
