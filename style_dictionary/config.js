const tokens = require('../tokens/design-tokens.tokens.json')
const fontFormatter = require('./custom/formatters/fonts')

const tokensArray = []
for (x in tokens) {
  tokensArray.push({ [x]: tokens[x] })
}

const formatterArray = [fontFormatter]

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
            options: { showFileHeader: false },
            filter: {
              attributes: {
                category: tokenCategory
              }
            }
          }
        }),
        ...formatterArray.map((formatter) => {
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
