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

// Note: configurations are not the same across all formats
const buildTestTokens = (set) => [
  {
    destination: `${set}/_color.less`,
    format: 'css/variables',
    options: {
      showFileHeader: false,
      selector: `.${set.replaceAll('_', '-')}`
    },
    filter: {
      attributes: {
        category: 'color'
      }
    }
  },
  {
    destination: `${set}/_sizes.less`,
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
]

// CREAM COLORS
// NOTE FOR FUTURE: think of a way to streamline the build configuration. Exlcude array, themeable tokens, etc.
// Possibly build a json config file for each brand?
const cream_colors = {
  source: ['tokens/design-tokens.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: buildCreamColorsTokens(CREAM_COLORS, excludeArray, themableTokens)
    }
  }
}

// TEST BRAND 1
const test_brand_1_settings = {
  source: ['tokens/test-1.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: buildTestTokens('test_brand_1'),
      prefix: 'test-brand-1'
    }
  }
}

// TEST BRAND 2
const test_brand_2_settings = {
  source: ['tokens/test-2.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: buildTestTokens('test_brand_2'),
      prefix: 'test-brand-2'
    }
  }
}

// TEST BRAND 3
const test_brand_3_settings = {
  source: ['tokens/test-3.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: buildTestTokens('test_brand_3'),
      prefix: 'test-brand-3'
    }
  }
}

module.exports = {
  settings: {
    cream_colors,
    test_brand_1_settings,
    test_brand_2_settings,
    test_brand_3_settings
  }
}
