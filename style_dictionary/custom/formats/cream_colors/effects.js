module.exports = {
  name: 'effects-less/variables',
  target: '_cream_colors/_effects.less',
  formatter: ({ dictionary }) => {
    const target = 'custom-shadow'

    const filteredTokens = dictionary.allTokens.filter(
      (token) => token.type === target
    )

    const addUnits = (val) => {
      if (val === 0) {
        return val
      } else return val + 'px'
    }

    // const generatedMessage = `\n// Do not edit directly \n// Generated on ${new Date().toUTCString()}\n\n`
    let tokenValue = ''

    filteredTokens.forEach((token, index) => {
      let value = ''

      if (token.value.shadowType === 'dropShadow') {
        // The below code creates a mixin
        // value = `box-shadow: ${addUnits(token.value.offsetX)} ${addUnits(
        //   token.value.offsetY
        // )} ${addUnits(token.value.radius)} ${addUnits(token.value.spread)} ${
        //   token.value.color
        // }`
        // tokenValue = tokenValue.concat(
        //   `${index === 0 ? '' : '\n'}@${
        //     token.name
        //   }: {\n\u0020\u0020${value}\n};\n`
        // )

        // The below code creates a token
        value = `${addUnits(token.value.offsetX)} ${addUnits(
          token.value.offsetY
        )} ${addUnits(token.value.radius)} ${addUnits(token.value.spread)} ${
          token.value.color
        }`
        tokenValue = tokenValue.concat(
          `${index === 0 ? '' : '\n'}@${token.name}: ${value};`
        )
      }
    })
    return tokenValue
    // return generatedMessage + tokenValue
  }
}
