export function validateCNPJ (cnpj) {
    const isDigitValid = (rest, digito) => {
        let val = 0
        if (rest > 1) {
            val = 11 - rest
        }
        if (val.toString() === digito) {
            return val
        }
        return false
    }

    const getRest = num => num % 11

    const weightedSum = (valueArr, weightArr) => {
        const anyIsArray = valueArr instanceof Array && weightArr instanceof Array
        if (!anyIsArray) {
            return false
        }

        if (valueArr.length === weightArr.length) {
            return valueArr.reduce(
                (sum, _, i) => sum + valueArr[i] * weightArr[i], 0
            )

        }
    }

    const prepareCnpj = (cnpj) => {
        cnpj = cnpj.replace(/[^\d]+/g, '')
        if (cnpj !== '' && cnpj.length === 14 && !/([^0-9])+/.test(cnpj)) {
            return cnpj.split('')
        }
        return false
    }


    const PESOS_PRIMEIRO_DIGITO_VERIFICADOR = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const PESOS_SEGUNDO_DIGITO_VERIFICADOR = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    cnpj = prepareCnpj(cnpj)
    if (!(cnpj instanceof Array)) {
        return false
    }
    let [primeiro_digito, segundo_digito] = cnpj.splice(-2)
    let number = cnpj.map(item => { return parseInt(item) })

    let validador_um = isDigitValid(getRest(weightedSum(number, PESOS_PRIMEIRO_DIGITO_VERIFICADOR)), primeiro_digito)
    if (validador_um === false) {
        return false
    }
    return !!(isDigitValid(getRest(weightedSum([...number, validador_um], PESOS_SEGUNDO_DIGITO_VERIFICADOR)), segundo_digito) !== false)
}

export const formatCNPJ = (cnpj) => {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5')
}
