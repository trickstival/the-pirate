export const uuidv4 = _ =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const rand = (Math.random() * 16) | 0
        const value = c === 'x' ? rand : (rand & 0x3) | 0x8
        return value.toString(16)
    })

import * as cnpj from './numeric-use/cnpj'
import * as cpf from './numeric-use/cpf'

export {
    cpf, cnpj
}

export const normalizeLocalCurrency = (numInput) => {
    const input = numInput + ''
    const getSeparator = () => {
        const chars = input.split('').slice(-3)

        if (!chars.some(char => ['.', ','].includes(char))) {
            return false
        }

        if (chars.includes(',')) {
            return ','
        }
        return '.'
    }

    const separator = getSeparator()

    // Integers
    if (!separator) {
        return parseFloat(input.replace(/[.|,]/g, ''))
    }

    // Comma decimal (ex: 1.000,00)
    if (separator === ',') {
        return parseFloat(input.replace(/\./g, '').replace(/,/g, '.'))
    }

    // Dot decimal (ex: 1,000.00)
    return parseFloat(input.replace(/,/g, ''))
}
