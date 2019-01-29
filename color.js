export const isLight = (r, g, b) => {
    // Counting the perceptive luminance
    // human eye favors green color...
    return 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5
}

export const hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b
    })

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : null
}

/**
 * Returns black if input is light and
 * white if it's dark
 * @param {String} backgroundColor
 * @returns {String} Returns black or white
 */
export const blackOrWhite = (backgroundColor) => {
    const rgb = hexToRgb(backgroundColor)
    return isLight(...Object.values(rgb)) ? 'black' : 'white'
}
