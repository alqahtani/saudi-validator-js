import { isNumeric, prepareNumericInput } from '../utils'
import { extractMobileInfo, extractLandlineInfo } from './extractPhoneInfo'
import { SaudiPhoneType } from '../../types'

/*
 * Validate a Saudi phone or mobile number.
 * The number should start with '+966' for international format or
 * '05' for local format, followed by 8 additional digits. Mobile
 * numbers can start with various digits following the prefix,
 * indicating the telecom provider.
 *
 * @param {string} number - The phone or mobile number to validate.
 * @returns {object} - An object containing `isValid` boolean flag,
 * and `provider` string name (English and Arabic) if valid,
 * 'Unknown' otherwise.
 */

export const validateSaudiPhone = (input: string | number): SaudiPhoneType => {
    const phone = prepareNumericInput(input)

    // Credits for this regix to @homaily in this gist:
    // https://gist.github.com/homaily/8672499
    const mobile_regex = new RegExp(
        /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
    )
    const landline_regex = new RegExp(
        /^(009661|9661|\+9661|01)(1|2|3|4|5|6|7|8|9)([0-9]{7})$/
    )

    if (mobile_regex.test(phone)) {
        return extractMobileInfo(phone)
    }

    if (landline_regex.test(phone)) {
        return extractLandlineInfo(phone)
    }

    return {
        isValid: false,
        input: input as string,
        provider: {
            name: {
                en: 'Unknown',
                ar: 'غير معروف',
            },
        },
        reason: {
            en: 'Invalid phone number',
            ar: 'رقم هاتف غير صالح',
        },
    }
}
