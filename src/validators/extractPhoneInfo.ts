import { SaudiPhoneType } from '../../types'
import { telecomCompanies } from '../utils'
import { areaCodes } from '../utils'

export const extractMobileInfo = (input: string): SaudiPhoneType => {
    let starts_with_5 = false

    if (input.charAt(0) === '5') {
        starts_with_5 = true
        input = '0' + input
    }

    const pattern = new RegExp(
        /^(00966|966|\+966|0)(5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
    )

    const number = input.match(pattern)

    if (number) {
        if (starts_with_5) {
            number[0] = number[0].slice(1)
        }

        return {
            isValid: true,
            input: number[0],
            provider: {
                name: {
                    ar: telecomCompanies(number[3]).arabicName,
                    en: telecomCompanies(number[3]).englishName,
                },
                code: number[2] + '' + number[3],
                note: 'Numbers could be transfered by customers across providers',
            },
            country: {
                country_code: '+966',
                countryIso2: 'SA',
                countryIso3: 'SAU',
            },
            phone_options: [
                '' + number[2] + number[3] + number[4],
                '0' + number[2] + number[3] + number[4],
                '966' + number[2] + number[3] + number[4],
                '+966' + number[2] + number[3] + number[4],
                '00966' + number[2] + number[3] + number[4],
            ],
        }
    }
    return {
        isValid: false,
        input: starts_with_5 ? '0' + input : input,
        provider: {
            name: {
                ar: 'غير معروف',
                en: 'Unknown',
            },
        },
    }
}

export const extractLandlineInfo = (input: string): SaudiPhoneType => {
    const pattern = new RegExp(
        /^(009661|9661|\+9661|01)(1|2|3|4|5|6|7|8|9)([0-9]{7})$/
    )

    const number = input.match(pattern)

    if (number) {
        return {
            isValid: true,
            input,
            provider: {
                name: {
                    ar: 'هاتف أرضي',
                    en: 'Landline',
                },
            },
            area: {
                code: '1' + number[2],
                name_en: areaCodes(number[2]).en,
                name_ar: areaCodes(number[2]).ar,
            },
            country: {
                country_code: '+966',
                countryIso2: 'SA',
                countryIso3: 'SAU',
            },
            phone_options: [
                '01' + number[2] + number[3],
                '9661' + number[2] + number[3],
                '+9661' + number[2] + number[3],
                '009661' + number[2] + number[3],
            ],
        }
    }

    return {
        isValid: false,
        input,
        provider: {
            name: {
                ar: 'غير معروف',
                en: 'Unknown',
            },
        },
    }
}
