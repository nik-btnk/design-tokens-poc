const fs = require('fs')
const path = require('path')
const { cssNoUnits, units } = require('../constants/constants')

// This operation returns all transforms or formats defined in in respective folder as an array.
const getDataForSD = (data) => {
  // data needs to be 'transforms' or 'formats' for respective folders
  const normalizedPath = path.join(__dirname, '..', data)
  const filesInDir = fs
    .readdirSync(normalizedPath)
    .filter((file) => path.extname(file) === '.js')

  return filesInDir.map((file) => require(path.join(normalizedPath, file)))
}

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

// Build an array of objects that define creation of output token files for Cream Colors
const buildCreamColorsTokens = (rawTokenData, excludeArray, themableTokens) => {
  const builtTokens = []
  const formats = getDataForSD('formats')

  Object.keys(rawTokenData).forEach((tokenSet) => {
    const tokenCategory = tokenSet

    if (!excludeArray.includes(tokenCategory)) {
      builtTokens.push({
        destination: `_cream_colors/_${tokenCategory}.less`,
        format: themableTokens.includes(tokenCategory)
          ? 'css/variables'
          : 'less/variables',
        options: {
          showFileHeader: false,
          selector: themableTokens.includes(tokenCategory)
            ? '.cream-colors'
            : undefined
        },
        filter: {
          attributes: {
            category: tokenCategory
          }
        }
      })
    }
  })

  return [
    ...builtTokens,
    ...formats.map((format) => {
      return {
        destination: format.target,
        format: format.name,
        options: { showFileHeader: false }
      }
    })
  ]
}

module.exports = {
  getDataForSD,
  formatName,
  formatValue,
  buildCreamColorsTokens
}
