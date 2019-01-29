export const isURL = (str) => {
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/
    return regex.test(str)
}

export const interpol = (item1, item2) => {
    if (!item1 || !item2) {
        return
    }
    return `${item1} ${item2}`
}

export const toSnakeCase = (text) => {
    return text.replace(/[^\w]/gi, '')
        .replace(/\.?([A-Z])/g, (x, y) => {
            return '_' + y.toLowerCase()
        })
        .replace(/^_/, '')
}
