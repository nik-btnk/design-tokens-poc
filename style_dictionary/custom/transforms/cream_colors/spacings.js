module.exports = {
    name: 'custom/spacing',
    type: 'value',
    matcher: function (token) {
        return (token.type === 'custom-spacing')
    },
    transformer: function({value}) {
        if ([value.bottom, value.left, value.right].every(v => v === value.top)){
            return `${value.top}px`
        }
        return `${value.top}px ${value.right}px ${value.bottom}px ${value.left}px` 
    }
}