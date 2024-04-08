import { isNumeric, prepareNumericInput } from '../utils'
import { SaudiIDType } from '../../types'

/*
 * Validate a Saudi national ID number.
 * The ID should be 10 digits long and start with '1' or '2'.
 * The validation is based on the Luhn algorithm.
 * @param {string | number} id - The ID number to validate.
 * @returns {object} - True if the ID is valid, false otherwise.
 */

const idTypes: { [key: number]: { ar: string; en: string } } = {
    1: {
        ar: 'هوية وطنية',
        en: 'National ID',
    },
    2: {
        ar: 'بطاقة إقامة',
        en: 'Iqama ID',
    },
    3: {
        ar: 'رقم حدود',
        en: 'Border Number',
    },
    4: {
        ar: 'رقم حدود',
        en: 'Border Number',
    },
}

export const validateSaudiID = (input: string | number): SaudiIDType => {
    const id = prepareNumericInput(input)

    // Check if the ID is in a valid format
    if (!isNumeric(id) || id.length !== 10) {
        return {
            isValid: false,
            id,
            type: {
                en: 'Invalid ID',
                ar: 'رقم غير صالح',
            },
            reason: {
                en: 'ID should be 10 digits long',
                ar: 'رقم الهوية يجب أن يتكون من 10 أرقام',
            },
        }
    }

    // Check if the ID starts with 1, 2, 3, or 4
    if (![...'1234'].includes(id[0])) {
        return {
            isValid: false,
            id,
            type: {
                en: 'Invalid ID',
                ar: 'رقم غير صالح',
            },
            reason: {
                en: 'ID should start with 1, 2, 3, or 4',
                ar: 'رقم الهوية يجب أن يبدأ بـ 1، 2، 3، أو 4',
            },
        }
    }

    // Calculate the Luhn sum
    const luhnSum = id
        .split('')
        .map(Number)
        .reduce((acc, digit, index) => {
            const isEven = index % 2 === 0
            const doubled = isEven ? digit * 2 : digit
            const subtracted = doubled > 9 ? doubled - 9 : doubled
            return acc + subtracted
        }, 0)

    // Check if the ID is valid based on the Luhn sum
    const isValid = luhnSum % 10 === 0

    // If the ID is invalid, return the error message
    if (!isValid) {
        return {
            isValid: false,
            id,
            type: {
                en: 'Invalid ID',
                ar: 'رقم غير صالح',
            },
            reason: {
                en: 'ID failed Luhn algorithm',
                ar: 'فشل الرقم في خوارزمية لون',
            },
        }
    }

    // Return the ID type
    return {
        isValid: true,
        id,
        type: idTypes[Number(id[0])],
    }
}
