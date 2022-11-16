const { cssNoUnits, units } = require('../constants/constants')

// Require all json files in the tokens folder and create array of json data
const fs = require('fs')
const path = require('path')
const normalizedPath = path.join(__dirname, '..', '..', '..', 'tokens')
const tokensArray = []
const jsonsInDir = fs
  .readdirSync(normalizedPath)
  .filter((file) => path.extname(file) === '.json')
jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join(normalizedPath, file))
  const json = JSON.parse(fileData.toString())
  tokensArray.push({ [file.split('.')[0]]: json })
})

// Transform property name from camel case to hyphenated string usable by CSS.
const formatName = (name) => {
  const isUpperCase = (string) => /^[A-Z]*$/.test(string)
  const letters = name.split('')
  return letters
    .map((letter) => {
      if (isUpperCase(letter)) {
        return `-${letter.toLowerCase()}`
      } else return letter
    })
    .join('')
}

// Append units to CSS property value if required.
const formatValue = (name, value) => {
  if (value === 0) return value
  if (typeof value !== 'number') return value
  if (cssNoUnits.includes(formatName(name))) return value

  return value + units
}

// Build an array of objects that define creation of output token files.
const buildTokenFiles = (excludeArray, themableTokens, formatters) => {
  return [
    ...tokensArray.map((token) => {
      const tokenBrand = Object.keys(token)[0]
      const tokenCategories = Object.keys(token[tokenBrand])
      return tokenCategories.map((category) => {
        if (!excludeArray.includes(category)) {
          return {
            destination: `./_${tokenBrand}/_${category}.less`,
            format: themableTokens.includes(category)
              ? 'css/variables'
              : 'less/variables',
            options: {
              showFileHeader: false,
              selector: '.' + tokenBrand
            },
            filter: {
              attributes: {
                category: category
              }
            }
          }
        }
      })
    })[0],
    ...tokensArray.map((token) => {
      const tokenBrand = Object.keys(token)[0]
      return formatters.map((formatter) => {
        return {
          destination: '_' + tokenBrand + '/' + formatter.target,
          format: formatter.name,
          options: { showFileHeader: false }
        }
      })
    })[0]
  ]
}

module.exports = { formatName, formatValue, buildTokenFiles }
