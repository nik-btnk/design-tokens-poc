const config = require('./config')

//Create Style Dictionary by extending a configuration file
const StyleDictionary = require('style-dictionary').extend(config)

//Import custom transforms
const sizes = require('./custom/transforms/sizes')
const spacings = require('./custom/transforms/spacings')
const fonts = require('./custom/transforms/fonts')

//Register transforms
const transforms = [sizes, spacings, fonts]

transforms.map((val) => {
  StyleDictionary.registerTransform({
    name: val.name,
    type: val.type,
    matcher: val.matcher,
    transformer: val.transformer
  })
})

//Update Less transformGroup
StyleDictionary.registerTransformGroup({
  name: 'less',
  transforms: StyleDictionary.transformGroup['less'].concat(
    transforms.map((val) => val.name)
  )
})

////////////////////////////////
// EXPERIMENTAL FUNCTIONALITY //
////////////////////////////////
// Custom formatter to create mixins for tokens with multiple properties in 'value'.
StyleDictionary.registerFormat({
  name: 'mixin-less/variables',
  formatter: ({ dictionary }) => {
    // Add the custom token type you are targeting to this array.
    const targetArray = ['custom-fontStyle']

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

    const filteredTokens = dictionary.allTokens.filter((token) =>
      targetArray.includes(token.type)
    )
    // console.log(dictionary.allTokens)

    const generatedMessage = `\n// Do not edit directly \n// Generated on ${new Date().toUTCString()}\n\n`
    let tokenValue = ''

    filteredTokens.forEach((token, index) => {
      let value = ''
      let loop = 0
      for (tokenName in token.original.value) {
        value = value.concat(
          `${loop === 0 ? '' : '\n'}\u0020\u0020${formatName(tokenName)}: ${
            token.original.value[tokenName]
          };`
        )
        loop++
      }
      tokenValue = tokenValue.concat(
        `${index === 0 ? '' : '\n'}@${token.name}: {\n${value}\n};\n`
      )
    })

    return generatedMessage + tokenValue
  }
})
////////////////////////////////
////////////////////////////////
////////////////////////////////

//This function will run once we execute npm run build script and will build the design files for every chosen platform at configuration file
StyleDictionary.buildAllPlatforms()
