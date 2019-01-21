export dom from './dom'
export numeric from './numeric'
export string from './string'

export const truthyJoin = (toMerge, separator = ' ') => {
    if (Array.isArray(toMerge)) {
        return toMerge.filter(e => e).join(separator)
    }
}

export const any = (...items) => {
    return items.some(e => e)
}

export const maybe = (obj, propsStr) => {
    const singleMaybe = (obj, prop) => {
        if (!obj || !obj[prop]) {
            return
        }
        return obj[prop]
    }

    if (
        !obj ||
        !propsStr ||
        !(typeof propsStr === 'number' || typeof propsStr === 'string')
    ) {
        return
    }
    const props = propsStr.split('.')
    let retorno = obj
    for (const prop of props) {
        retorno = singleMaybe(retorno, prop)
    }
    return retorno
}
