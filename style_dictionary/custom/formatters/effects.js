module.exports = {
  name: 'effects-less/variables',
  target: '_effects.less',
  formatter: ({ dictionary }) => {
    const targetArray = ['custom-shadow']

    const filteredTokens = dictionary.allTokens.filter((token) =>
      targetArray.includes(token.type)
    )
    console.log(filteredTokens)
    return 'test'
  }
}
