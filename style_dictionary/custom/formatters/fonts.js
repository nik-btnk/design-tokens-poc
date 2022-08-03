const supports = require('css-supports')
const { JSDOM } = require('jsdom')
const {
  formatName,
  formatValue
} = require('../helperFunctions/helperFunctions')

// Node has no access to DOM, therefore create global document variable to check valid CSS.
global.document = new JSDOM('<!DOCTYPE html><p>Hello world</p>').window.document

// Custom formatter to create mixins for tokens with multiple properties in typography 'value'.
module.exports = {
  name: 'mixin-less/variables',
  target: '_mixins.less', // Destination file name
  formatter: ({ dictionary }) => {
    // Add the custom token type you are targeting to this array.
    const targetArray = ['custom-fontStyle']
    // CSS properties to omit from mixin creation.
    const skipProperty = ['line-height']

    const filteredTokens = dictionary.allTokens.filter((token) =>
      targetArray.includes(token.type)
    )

    // const generatedMessage = `\n// Do not edit directly \n// Generated on ${new Date().toUTCString()}\n\n`
    let tokenValue = ''

    filteredTokens.forEach((token, index) => {
      let value = ''
      let loop = 0
      for (tokenName in token.original.value) {
        // Check if token is a supported CSS property and is not specified to exlude.
        if (
          supports(
            formatName(tokenName),
            formatValue(tokenName, token.original.value[tokenName])
          ) &&
          !skipProperty.includes(formatName(tokenName))
        ) {
          value = value.concat(
            `${loop === 0 ? '' : '\n'}\u0020\u0020${formatName(
              tokenName
            )}: ${formatValue(tokenName, token.original.value[tokenName])};`
          )
          loop++
        }
      }
      tokenValue = tokenValue.concat(
        `${index === 0 ? '' : '\n'}@${token.name}: {\n${value}\n};\n`
      )
    })

    return tokenValue
    //return generatedMessage + tokenValue
  }
}
