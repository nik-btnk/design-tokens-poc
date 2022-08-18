const { settings, transforms, formatters } = require('./config')

// Create Style Dictionary by extending a configuration file
const StyleDictionary = require('style-dictionary').extend(settings)

// Register transforms
transforms.map((val) => {
  StyleDictionary.registerTransform({
    name: val.name,
    type: val.type,
    matcher: val.matcher,
    transformer: val.transformer
  })
})

// Update Less transformGroup
StyleDictionary.registerTransformGroup({
  name: 'less',
  transforms: StyleDictionary.transformGroup['less'].concat(
    transforms.map((val) => val.name)
  )
})

// Register formatters
formatters.map((val) => {
  StyleDictionary.registerFormat({
    name: val.name,
    formatter: val.formatter
  })
})

// This function will run once we execute npm run build script and will build the design files for every chosen platform at configuration file
StyleDictionary.buildAllPlatforms()
