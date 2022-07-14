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

//This function will run once we execute npm run build script and will build the design files for every chosen platform at configuration file
StyleDictionary.buildAllPlatforms()
