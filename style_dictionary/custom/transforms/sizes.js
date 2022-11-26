module.exports = {
  applyTransform: ['design-tokens', 'test-1'],
  name: 'size/px',
  type: 'value',
  matcher: (token) => {
    return (
      (token.unit === 'pixel' || token.type === 'dimension') &
      (token.value !== 0)
    )
  },
  transformer: (token) => {
    return `${token.value}px`
  }
}
