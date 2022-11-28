const { settings } = require('./config')
const { getDataForSD } = require('./custom/helperFunctions/helperFunctions')

// Create Style Dictionary by extending a configuration file
const StyleDictionary = require('style-dictionary')

const transforms = getDataForSD('transforms')
const formats = getDataForSD('formats')

console.log(formats)

// This functionality initializes each brand and conditionallly applies transforms and formats
// based on the 'applyTransform' and 'applyFormat' properties defined in their respective files.
Object.values(settings).forEach((brand) => {
  const initBrand = StyleDictionary.extend(brand)
  const source = initBrand.options.source[0]
    .replace('tokens/', '')
    .replace('.tokens.json', '')

  transforms.forEach((transform) => {
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

  formats.forEach((format) => {
    if (format.applyFormat && format.applyFormat.includes(source)) {
      initBrand.registerFormat({
        name: format.name,
        target: format.target,
        formatter: format.formatter
      })
    }
  })

  initBrand.buildAllPlatforms()
})
