const {
  buildCreamColorsTokens,
  buildTestTokens
} = require('./custom/helperFunctions/helperFunctions')

// CREAM COLORS
const cream_colors = {
  source: ['tokens/design-tokens.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: buildCreamColorsTokens(),
      prefix: 'creamcolors'
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
