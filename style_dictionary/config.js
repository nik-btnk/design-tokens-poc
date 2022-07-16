const tokens = require('../tokens/design-tokens.tokens.json')

const tokensArray = []
for (x in tokens) {
  tokensArray.push({ [x]: tokens[x] })
}

module.exports = {
  source: ['tokens/*.tokens.json'],
  platforms: {
    less: {
      transformGroup: ['less'],
      buildPath: 'less/_tokens/',
      files: [
        ...tokensArray.map((token) => {
          const tokenCategory = Object.keys(token)[0]

          return {
            destination: `_${tokenCategory}.less`,
            format: 'less/variables',
            filter: {
              attributes: {
                category: tokenCategory
              }
            }
          }
        }),
        {
          destination: '_mixins.less',
          format: 'mixin-less/variables'
        }
      ]
    }
  }
}
