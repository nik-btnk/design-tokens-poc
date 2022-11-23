const { settings, transforms, formats } = require('./config')

// Create Style Dictionary by extending a configuration file
const StyleDictionary = require('style-dictionary')

// Initialize Cream Colors brand
const CreamColorsSD = StyleDictionary.extend(settings.cream_colors)

// Register Cream Colors transforms
transforms.map((val) => {
  CreamColorsSD.registerTransform({
    name: val.name,
    type: val.type,
    matcher: val.matcher,
    transformer: val.transformer
  })
})

// Register Cream Colors formats
formats.map((val) => {
  CreamColorsSD.registerFormat({
    name: val.name,
    target: val.target,
    formatter: val.formatter
  })
})

// Update Less transformGroup for Cream Colors
CreamColorsSD.registerTransformGroup({
  name: 'less',
  transforms: CreamColorsSD.transformGroup['less'].concat(
    transforms.map((val) => val.name)
  )
})

CreamColorsSD.buildAllPlatforms()

// The below dictionaries are test functionality for multi-brand support

const TestBrand1SD = StyleDictionary.extend(settings.test_brand_1_settings)
TestBrand1SD.buildAllPlatforms()

const TestBrand2SD = StyleDictionary.extend(settings.test_brand_2_settings)
TestBrand2SD.buildAllPlatforms()

const TestBrand3SD = StyleDictionary.extend(settings.test_brand_3_settings)
TestBrand3SD.buildAllPlatforms()

// Fix animation shadow on details page
