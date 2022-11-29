const StyleDictionary = require('style-dictionary')
const { settings } = require('./config')
const { getDataForSD } = require('./custom/helperFunctions/helperFunctions')

const transforms = getDataForSD('transforms')
const formats = getDataForSD('formats')

Object.values(settings).forEach((brand) => {
  // Initialize brand by extending a brand configuration file
  const initBrand = StyleDictionary.extend(brand)
  const source = initBrand.options.source[0]
    .replace('tokens/', '')
    .replace('.tokens.json', '')

  // Conditionally apply transforms to brand based on the 'applyTransform' property defined in transform file
  transforms.forEach((transform) => {
    if (transform.applyTransform && transform.applyTransform.includes(source)) {
      initBrand.registerTransform({
        name: transform.name,
        type: transform.type,
        matcher: transform.matcher,
        transformer: transform.transformer
      })

      // Transform group would need to be updated for each platform if multiple platforms are registered in brand config.
      initBrand.registerTransformGroup({
        name: 'less',
        transforms: initBrand.transformGroup['less'].concat(transform.name)
      })
    }
  })

  // Conditionally apply formats to brand based on the 'applyFormat' property defined in transform file
  formats.forEach((format) => {
    if (format.applyFormat && format.applyFormat.includes(source)) {
      initBrand.registerFormat({
        name: format.name,
        target: format.target,
        formatter: format.formatter
      })
    }
  })

  // Build the brand after transforms and formats are applied
  initBrand.buildAllPlatforms()
})
