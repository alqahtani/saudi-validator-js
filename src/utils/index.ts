export { telecomCompanies } from './telecomeCompanies'
export { areaCodes } from './areaCodes'

/**
 * These are utility functions that are used across the application.
 */

// This function checks if the input is a string and contains only numbers
export const isNumeric = (input: unknown): boolean => {
    return typeof input === 'string' && /^\d+$/.test(input)
}

// This function converts Arabic-Indic numerals to ASCII equivalents
export const indicToArabicNumbers = (input: string) =>
    input.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())

// This function prepares input by removing white spaces and
// specified characters and converting Arabic-Indic numerals
// to ASCII equivalents
export const prepareNumericInput = (input: string | number): string => {
    // Step 1: Convert input to string if it's not already
    let result = String(input)

    // Step 2: Remove white spaces and specified characters (dash, underscore, period, comma)
    result = result.replace(/\s|-|_|\.|,/g, '')

    // Step 3: Convert Arabic-Indic numerals to ASCII equivalents
    result = indicToArabicNumbers(result)

    return result
}
