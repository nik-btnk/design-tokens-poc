const { settings, formats } = require('./config')
const { loadTransforms } = require('./custom/helperFunctions/helperFunctions')

// Create Style Dictionary by extending a configuration file
const StyleDictionary = require('style-dictionary')

const transforms = loadTransforms()

// This functionality initializes each brand and conditionallly applies transforms
// based on the applyTransform property defined inside each transform. if property is not
// defined, the transform will be applies to all brands.
Object.values(settings).forEach((brand) => {
  const initBrand = StyleDictionary.extend(brand)
  const source = initBrand.options.source[0]
    .replace('tokens/', '')
    .replace('.tokens.json', '')

  transforms.forEach((transform) => {
    // Create functionality which applies transform to all brands if applyTtransform is omitted.
    if (transform.applyTransform && transform.applyTransform.includes(source)) {
      initBrand.registerTransform({
        name: transform.name,
        type: transform.type,
        matcher: transform.matcher,
        transformer: transform.transformer
      })

      initBrand.registerTransformGroup({
        name: 'less',
        transforms: initBrand.transformGroup['less'].concat(transform.name)
      })
    }
  })

  initBrand.buildAllPlatforms()
})

// Register Cream Colors formats
// formats.map((val) => {
//   CreamColorsSD.registerFormat({
//     name: val.name,
//     target: val.target,
//     formatter: val.formatter
//   })
// })
